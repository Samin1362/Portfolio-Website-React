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
  FiChevronRight,
} from "react-icons/fi";

const navItems = [
  { path: "/dashboard", label: "Home", icon: FiHome, exact: true },
  { path: "/dashboard/projects", label: "Projects", icon: FiFolder },
];

const pageTitles = {
  "/dashboard": "Dashboard",
  "/dashboard/projects": "Projects",
  "/dashboard/projects/add": "Add Project",
};

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

  const getPageTitle = () => {
    const editMatch = location.pathname.match(/\/dashboard\/projects\/edit\//);
    if (editMatch) return "Edit Project";
    return pageTitles[location.pathname] || "Dashboard";
  };

  const getInitials = (name) => {
    if (!name) return "A";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/5">
        <Link
          to="/dashboard"
          className="flex items-center gap-2.5"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#10B981] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="text-base font-bold text-white">Portfolio Admin</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest px-3 mb-2">
          Menu
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path, item.exact);
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-gradient-to-r from-[#7C3AED]/25 to-[#10B981]/15 text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span
                className={`p-1.5 rounded-md transition-colors ${
                  active
                    ? "bg-gradient-to-br from-[#7C3AED] to-[#10B981] text-white"
                    : "bg-white/5 text-gray-400 group-hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </span>
              {item.label}
              {active && (
                <FiChevronRight className="w-3 h-3 ml-auto text-purple-400" />
              )}
            </Link>
          );
        })}

        <div className="pt-2 mt-2 border-t border-white/5">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest px-3 mb-2">
            External
          </p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <span className="p-1.5 rounded-md bg-white/5 text-gray-400 group-hover:text-white transition-colors">
              <FiExternalLink className="w-3.5 h-3.5" />
            </span>
            View Portfolio
          </a>
        </div>
      </nav>

      {/* User */}
      <div className="px-3 py-4 border-t border-white/5">
        <div className="flex items-center gap-3 px-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#10B981] flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
            {getInitials(user?.displayName)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {user?.displayName || "Admin"}
            </p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
        >
          <span className="p-1.5 rounded-md bg-red-500/10">
            <FiLogOut className="w-3.5 h-3.5" />
          </span>
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a12] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-60 flex-col fixed inset-y-0 left-0 bg-[#0f0f1a] border-r border-white/5 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-60 bg-[#0f0f1a] border-r border-white/5 z-50 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-3">
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>
        <SidebarContent />
      </aside>

      {/* Main */}
      <div className="flex-1 md:ml-60 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-[#0a0a12]/90 backdrop-blur-sm border-b border-white/5">
          <div className="flex items-center justify-between px-4 md:px-6 h-14">
            <div className="flex items-center gap-3">
              {/* Mobile hamburger */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors md:hidden"
              >
                <FiMenu className="w-5 h-5" />
              </button>

              {/* Page title */}
              <div>
                <h2 className="text-sm font-semibold text-white">
                  {getPageTitle()}
                </h2>
                <p className="text-xs text-gray-500 hidden md:block">
                  Portfolio Admin Panel
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-white/5"
              >
                <FiExternalLink className="w-3.5 h-3.5" />
                Portfolio
              </a>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#10B981] flex items-center justify-center text-white text-[11px] font-bold">
                {getInitials(user?.displayName)}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
