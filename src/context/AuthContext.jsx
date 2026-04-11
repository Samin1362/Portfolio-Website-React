import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Get ID token for API calls
  const getIdToken = async () => {
    if (!auth.currentUser) return null;
    return auth.currentUser.getIdToken();
  };

  // Login
  const login = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  };

  // Register — creates Firebase user + syncs to backend
  const register = async (email, password, displayName) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Set display name in Firebase
    await updateProfile(result.user, { displayName });

    // Sync to backend PostgreSQL
    const token = await result.user.getIdToken();
    await axios.post(
      `${API_URL}/api/auth/register`,
      { display_name: displayName },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Force refresh to get updated user object with displayName
    setUser({ ...result.user, displayName });

    return result;
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    getIdToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
