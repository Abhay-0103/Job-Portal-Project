import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = true;
  const user = { FullName: "Alex", role: "employer" };
  const Navigate = useNavigate();

  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r  from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 cursor-pointer">
              Job-Portal
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => Navigate("/find-jobs")}
              className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Find Jobs
            </a>
            <a
              onClick={() => {
                Navigate(
                  isAuthenticated && user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/login"
                );
              }}
              className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              For Employers
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 cursor-pointer">
                  Welcome, {user?.FullName}
                </span>
                <a
                  href={
                    user?.role === "employer"
                      ? "/employer-dashboard"
                      : "/find-jobs"
                  }
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <>
                <a
                  href="/login"
                  className="cursor-pointer text-gray-600 hover:text-gray-900 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
