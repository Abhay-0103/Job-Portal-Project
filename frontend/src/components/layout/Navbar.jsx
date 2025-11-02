// Global Imports
import React, { use } from "react";
import { useState, useEffect } from "react";
import { Briefcase, Bookmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// Local Imports
import { useAuth } from "../../context/AuthContext";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (ProfileDropdownOpen) {
                setProfileDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => 
            document.removeEventListener("click", handleClickOutside);
        }, [profileDropdownOpen]);

  return <header className="">
    <div className="">
        <div className="">
            {/* Logo */}
            <Link to="/find-jobs" className="">
            <div className="">
                <Briefcase className="" />
            </div>
            <span className="">JobPortal</span>
            </Link>

            {/* Auth Buttons */}
            <div className="">
                {user && (
                    <button
                    className=""
                    onClick={() => navigate("/saved-jobs")}
                    >
                    <Bookmark className="" />
                    </button>
                )}

                {isAuthenticated ? (
                    <ProfileDropdown
                    isOpen={profileDropdownOpen}
                    onToggle={(e) => {
                        e.stopPropagation();
                        setProfileDropdownOpen(!profileDropdownOpen);
                    }}
                    avatar={user?.avatar || ""}
                    companyName={user?.name || ""}
                    email={user?.email || ""}
                    userRole={user?.role || ""}
                    onLogout={logout}
                    />
                ) : (
                    <>
                    <a
                        href="/login"
                        className=""
                    >
                        Login
                    </a>
                    <a
                    href="/signup"
                    className=""
                    >
                        Sign Up
                    </a>
                    </>
                )}
            </div>
        </div>
    </div>
  </header>;
};

export default Navbar;
