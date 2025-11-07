// Global Imports
import React from 'react'
import { useState, useEffect } from 'react';
import { Save, X, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

// Local Imports
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import uploadImage from '../../utils/uploadImage';
import Navbar from '../../components/layout/Navbar';

const UserProfile = () => {
  const { user, updateUser } = useAuth();

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    avatar: user?.avatar || "",
    resume: user?.resume || "",
  });

  const [formData, setFormData] = useState({ ...profileData });
  const [uploading, setUploading] = useState({ avatar: false, logo: false });
  const [saving, setSaving] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageUpload = async (file, type) => {
    setUploading((prev) => ({ ...prev, [type]: true }));

    try {
      const imgUploadRes = await uploadImage(file);
      const avatarUrl = imgUploadRes.imageUrl || "";

      // Update form data with new image URL
      handleInputChange(type, avatarUrl);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      setUploading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      handleInputChange(type, previewUrl);

      // Upload the image
      handleImageUpload(file, type);
    }
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      const response = await axiosInstance.put(
        API_PATHS.AUTH.UPDATE_PROFILE,
        formData
      );
       
      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        // Update profile data and exit mode
        setProfileData({ ...formData });
        updateUser({ ...formData });
      }
    } catch (error) {
      console.error("Profile Update Failed", error);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({ ...profileData });
  };

  const DeleteResume = async () => {
    setSaving(true);

    try {
      const response = await axiosInstance.post(
        API_PATHS.AUTH.DELETE_RESUME,
        {
          resumeUrl: user.resume || "",
        }
      );

      if (response.status === 200) {
        toast.success("Resume deleted successfully!");
        setProfileData({ ...formData, resume: "" });
        updateUser({ ...formData, resume: "" });
        setFormData({ ...formData, resume: "" });
      }
    } catch (error) {
      console.error("Profile Update Failed", error);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    const userData = {
      name: user?.name || "",
      email: user?.email || "",
      avatar: user?.avatar || "",
    };

    setProfileData({ ...userData });
    setFormData({ ...userData });
    return () => {};
  }, [user]);

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile