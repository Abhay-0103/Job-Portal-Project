import React, { useState } from 'react'
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememnerMe: false
  });

  const [formState, setFormState] = useState({
    loading: false,
    error: {},
    showPassword: false,
    success: false
  });

  // Validation Functions
  const validateEmail = (email) => {

  };

  const validatePassword = (password) => {

  };

  // Handle Input Changes
  const handleInputChange = (e) => {

  };

  const validateForm = () => {

  };

  const handleSubmit = async (e) => {
    
  };

  return (
    
  )
}

export default Login