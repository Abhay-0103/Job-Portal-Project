// Global Imports
import React from "react";
import { Save, X } from "lucide-react";

// Local Imports
import DashboardLayout from "../../components/layout/DashboardLayout";

const EditProfileDetails = ({
  formData,
  handleInputChange,
  handleImageChange,
  handleSave,
  handleCancel,
  uploading,
  saving,
}) => {
  return (
    <DashboardLayout activeMenu="company-profile">
      {formData && <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-6">
              <h1 className="text-lg md:text-xl font-medium text-white">
                Edit Profile
                </h1>
                </div>

                {/* Edit Form */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Personal Information Section */}
                    <div className="space-y-6">
                      <h2 className="text-lg font-medium text-gray-800 border-b pb-2">
                        Personal Information
                      </h2>

                      {/* Avatar Upload */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={formData?.avatar}
                            alt="Avatar"
                            className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                          />
                          {uploading?.avatar && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              </div>
                          )}
                        </div>
                        <div>
                          <label className="block">
                          <span className="sr-only">
                            Choose Avatar
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, "avatar")}
                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                              transition-colors"
                            />
                          </label>
                        </div>
                      </div>

                      {/* Name Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all"
                        placeholder="Enter Your Full Name"
                        />
                      </div>
                      
                      {/* Email (Read-only) */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address 
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          disabled
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                          />
                      </div>
                    </div>
                      
                    {/* Company Information Section */}
                    <div className="space-y-6">
                      <h2 className="text-lg font-medium text-gray-800 border-b pb-2">
                        Company Information
                      </h2>

                      {/* Company Logo Upload */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={formData.companyLogo}
                            alt="Company Logo"
                            className="w-20 h-20 rounded-lg object-cover border-4 border-gray-200"
                          />
                          {uploading.logo && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              </div>
                              )}
                        </div>
                        <div>
                          <label className="block">
                          <span className="sr-only">
                            Choose Company Logo
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, "logo")}
                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-green-700 hover:file:bg-green-100
                              transition-colors"
                            />
                          </label>
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all"
                        placeholder="Enter Company Name"
                        />
                      </div>

                      {/* Company Description */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Description
                        </label>
                        <textarea
                          value={formData.companyDescription}
                          onChange={(e) => handleInputChange("companyDescription", e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all resize-none"
                        placeholder="Describe your company.."
                        />
                        </div>
                    </div>
                  </div>


                  </div>
                  </div>
                  </div>
                  </div>
                  }
    </DashboardLayout>
  );
};

export default EditProfileDetails;
