import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY_yrvS4jW_qp1B6bxPjz58V49Mu9KEQQ",
  authDomain: "samin-portfolio-project.firebaseapp.com",
  projectId: "samin-portfolio-project",
  storageBucket: "samin-portfolio-project.firebasestorage.app",
  messagingSenderId: "325012977371",
  appId: "1:325012977371:web:0e9b908c7c9bc44a84befe",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
