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

// Local Imports
import { validateEmail } from "../../utils/helper";
import { validatePassword } from "../../utils/helper";
import { validateAvatar } from "../../utils/helper";
import uploadImage from "../../utils/uploadImage";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

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

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev, role: role
    }));
    if (formState.error.role) {
      setFormState((prev) => ({
        ...prev,
        error: { ...prev.error, role: "" },
      }));
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const error = validateAvatar(file);
      if (error) {
        setFormState((prev) => ({
          ...prev,
          error: { ...prev.error, avatar: error },
        }));
        return;
      }
      setFormData((prev) => ({ ...prev, avatar: file, }));

      // Create a preview
      const reader = new FileReader();
      reader.onloadend = (e) => {
        setFormState((prev) => ({
          ...prev,
          avatarPreview: e.target.result,
          error: { ...prev.error, avatar: "" },
        }));
      }
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {
      fullName: !formData.fullName ? "Enter your full name." : "",
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      role: !formData.role ? "Select a role." : "",
      avatar: "",
    };
 // Remove empty errors
 Object.keys(errors).forEach(key => {
    if (!errors[key]) delete errors[key];  
 });

 setFormState((prev) => ({ ...prev, error: errors, }));
 return Object.keys(errors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState((prev) => ({ ...prev, loading: true }));

    try {
      let avatarUrl = "";

      // Upload image if present
      if (formData.avatar) {
        const imgUploadRes = await uploadImage(formData.avatar);
        avatarUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        avatar: avatarUrl || "",
      });

      // Handle success Registration
      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: true,
        error: {},
      }));

      const { token } = response.data;

      if (token) {
        login(response.data, token);

        // redirect based on user role
        setTimeout(() => {
          window.location.href = 
            formData.role === "employer"
              ? "/employer-dashboard"
              : "/find-jobs";
        }, 2000);
      }
    } catch (error) {
      console.log("error", error);

      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: {
          submit: 
           error.response?.data?.message ||
           "Registration failed. Please try again.",
        },
      }));
    }
  };

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
          <div className="flex items-center space-x-4">
           <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {formState.avatarPreview ? ( 
              <img
                src={formState.avatarPreview} 
                alt="Avatar Preview"
                className="w-full h-full object-cover"
                />
            ) : (
              <User className="w-8 h-8 text-gray-400" />
            )}
            </div>
            <div className="flex-1">
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <label
                  htmlFor="avatar"
                  className="cursor-pointer bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors flex items-center space-x-2"
                > 
                <Upload className="w-4 h-4" />
                <span>Upload Photo</span>
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: JPEG, JPG, PNG. Max size: 5MB.
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            I am a *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleRoleChange("jobSeeker")}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.role === "jobSeeker"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-400"
              }`}
              >
              <UserCheck className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-medium">Job Seeker</div>
            <div className="text-xs text-gray-500">
              Looking for your dream job
            </div>
            </button>
            <button
              type="button"
              onClick={() => handleRoleChange("employer")}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.role === "employer"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-gray-200 hover:border-gray-400"
              }`}
              >
              <Building2 className="w-8 h-8 mb-2 mx-auto" />
              <div className="font-medium">Employer</div>
              <div className="text-xs text-gray-500">
                Hiring top talent
              </div>
                
                </button>
              </div>
            
          {formState.error.role && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formState.error.role}
            </p>
          )}
        </div>

          {/* Submit Error */}
          {formState.error.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {formState.error.submit}
              </p>
            </div>
          )}

          {/* Submit Button */}
            <button
              type="submit"
              disabled={formState.loading}
              className="cursor-pointer w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
              {formState.loading ? (
                <>
                <Loader className="w-5 h-5 animate-spin" />
                <span className="ml-2">Creating Account...</span>
                </>
              ) : (
                <span>Create Account</span>
              )}
            </button>
          
          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a 
              href="/login" 
              className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign In Here
              </a>
            </p>
          </div>

      </form>
    </motion.div>
  </div>

};

export default SignUp;
