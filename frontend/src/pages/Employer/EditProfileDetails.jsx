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
      {formData && <div className="">
        <div className="">
          <div className="">
            {/* Header */}
            <div className="">
              <h1 className="">
                Edit Profile
                </h1>
                </div>

                {/* Edit Form */}
                <div className="">
                  <div className="">
                    {/* Personal Information Section */}
                    <div className="">
                      <h2 className="">
                        Personal Information
                      </h2>

                      {/* Avatar Upload */}
                      <div className="">
                        <div className="">
                          <img
                            src={formData?.avatar}
                            alt="Avatar"
                            className=""
                          />
                          {uploading?.avatar && (
                            <div className="">
                              <div className=""></div>
                              </div>
                          )}
                        </div>
                        <div>
                          <label className="">
                          <span className="">
                            Choose Avatar
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, "avatar")}
                              className=""
                            />
                          </label>
                        </div>
                      </div>

                      {/* Name Input */}
                      <div>
                        <label className="">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className=""
                        placeholder="Enter Your Full Name"
                        />
                      </div>
                      
                      {/* Email (Read-only) */}
                      <div>
                        <label className="">
                          Email Address 
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          disabled
                          className=""
                          />
                      </div>
                    </div>
                      
                    {/* Company Information Section */}
                    <div className="">
                      <h2 className="">
                        Company Information
                      </h2>

                      {/* Company Logo Upload */}
                      <div className="">
                        <div className="">
                          <img
                            src={formData.companyLogo}
                            alt="Company Logo"
                            className=""
                          />
                          {uploading.logo && (
                            <div className="">
                              <div className=""></div>
                              </div>
                              )}
                        </div>
                        <div>
                          <label className="">
                          <span className="">
                            Choose Company Logo
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageChange(e, "logo")}
                              className=""
                            />
                          </label>
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className=""
                        placeholder="Enter Company Name"
                        />
                      </div>

                      {/* Company Description */}
                      <div>
                        <label className="">
                          Company Description
                        </label>
                        <textarea
                          value={formData.companyDescription}
                          onChange={(e) => handleInputChange("companyDescription", e.target.value)}
                          rows={4}
                          className=""
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
