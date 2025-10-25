// global imports
import React, { useState, useEffect } from "react";
import { Briefcase, Building2, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// local imports
import { useAuth } from "../../contexts/AuthContext";
import { NAVIGATION_MENU } from "../../utils/data";

const DashboardLayout = ({ activeMenu }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(activeMenu || "dashboard");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsuve behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close dropdowm when clicked outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (profileDropdownOpen) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [profileDropdownOpen]);

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    navigate(`/${itemId}`);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarCollapsed = isMobile && false;

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 transform ${
          isMobile
            ? sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        } ${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-white border-r border-gray-200`}
      >
        {/* Company Logo */}
        <div className="">
          {!sidebarCollapsed ? (
            <Link className="" to="/">
              <div className="">
                <Briefcase className="" />
              </div>
              <span className="">JobPortal</span>
            </Link>
          ) : (
            <div className="">
              <Building2 className="" />
            </div>
          )}
        </div>

        {/* Navigation Menu */}

        {/* Logout */}
        <div className="">
          <button className="" onClick={logout}>
            <LogOut className="" />
            {!sidebarCollapsed && <span className="">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
