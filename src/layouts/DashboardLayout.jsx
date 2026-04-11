import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FiHome,
  FiFolder,
  FiLogOut,
  FiMenu,
  FiX,
  FiExternalLink,
} from "react-icons/fi";

const navItems = [
  { path: "/dashboard", label: "Home", icon: FiHome, exact: true },
  { path: "/dashboard/projects", label: "Projects", icon: FiFolder },
];

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const isActive = (path, exact) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const SidebarContent = () => (
    <>
      {/* Logo / Brand */}
      <div className="p-6 border-b border-gray-700/30">
        <Link
          to="/dashboard"
          className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#10B981] bg-clip-text text-transparent"
          onClick={() => setSidebarOpen(false)}
        >
          Portfolio Admin
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path, item.exact);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-[#7C3AED]/20 to-[#10B981]/20 text-white border border-purple-500/30"
                  : "text-gray-400 hover:text-white hover:bg-[#282732]"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}

        {/* View Portfolio link */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-[#282732] transition-all duration-200"
        >
          <FiExternalLink className="w-5 h-5" />
          View Portfolio
        </a>
      </nav>

      {/* User Info + Logout */}
      <div className="p-4 border-t border-gray-700/30">
        <div className="mb-3 px-4">
          <p className="text-sm font-medium text-white truncate">
            {user?.displayName || "Admin"}
          </p>
          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all duration-200"
        >
          <FiLogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 bg-[#0f0f17]/95 backdrop-blur-sm border-r border-gray-700/30 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-[#0f0f17] border-r border-gray-700/30 z-50 flex flex-col transform transition-transform duration-300 md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Top Bar (mobile) */}
        <header className="md:hidden sticky top-0 z-20 bg-[#0f0f17]/95 backdrop-blur-sm border-b border-gray-700/30 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-400 hover:text-white"
          >
            <FiMenu className="w-6 h-6" />
          </button>
          <span className="text-sm font-bold bg-gradient-to-r from-[#7C3AED] to-[#10B981] bg-clip-text text-transparent">
            Portfolio Admin
          </span>
          <div className="w-10" />
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
