import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Upload,
  Eye,
  EyeOff,
  UserCheck,
  Building2,
  Loader,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    avatar: null,
  });

  const [formState, setFormState] = useState({
    loading: false,
    error: {},
    showPassword: false,
    avatarPreview: null,
    success: false,
  });

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error on input change
    if (formState.error[name]) {
      setFormState((prev) => ({
        ...prev,
        error: {
          ...prev.error,
          [name]: "",
        },
      }));
    }
  };

  const handleRoleChange = (e) => {};

  const handleAvatarChange = (e) => {};

  const validateForm = () => {};

  const handleSubmit = async (e) => {};

  if (formState.success) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Account Created!
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome aboard! Your account has been successfully created.
            </p>
            <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto" />
            <p className="text-sm text-gray-500 mt-2">
              Redirecting To Your Dashboard...
            </p>
          </motion.div>
        </div>
      );
    }

  return <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-600">
            Join us today! Whether you're seeking your dream job or looking to hire top talent, our platform is here to connect you with endless opportunities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formState.error.fullName 
                  ? "border-red-500" 
                  : "border-gray-300"}
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="Enter your full name"
                />
          </div>
          {formState.error.fullName && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formState.error.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                formState.error.email 
                ? "border-red-500" 
                : "border-gray-300"
                 } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
              placeholder="Enter your email"
              />
          </div>
          {formState.error.email && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formState.error.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password *
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={formState.showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-12 py-3 rounded-lg border ${
                formState.error.password
                  ? "border-red-500"
                  : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`} 
              placeholder="Create a strong password"
              />
            <button
              type="button"
              onClick={() =>
                setFormState((prev) => ({
                  ...prev,
                  showPassword: !prev.showPassword,
                }))
              }
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
              {formState.showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {formState.error.password && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />  
              {formState.error.password}
            </p>
          )}
        </div>

        {/* Avatar Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Picture (Optional)  
          </label>
          <div className="flex items-center">
           <div className="relative">
            {formState.avatarPreview ? ( 
              <img
                src={formState.avatarPreview} 
                alt="Avatar Preview"
                className="w-16 h-16 rounded-full object-cover border"
                />
            ) : (
              <User className="w-16 h-16 text-gray-300 border rounded-full p-3" />
            )}
            </div>
            <div className="ml-4">
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <label
                  htmlFor="avatar"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors text-sm"
                > 
                <Upload className="w-4 h-4 inline-block mr-2" />
                <span>Upload Photo</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: JPG, PNG. Max size: 5MB.
                </p>
            </div>
          </div>
          {formState.error.avatar && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
              {formState.error.avatar}
              </p>
          )}
        </div>

        {/* Role Selection */}


      </form>
    </motion.div>
  </div>;

};

export default SignUp;
