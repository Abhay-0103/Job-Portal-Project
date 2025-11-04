// global React
import React from 'react'
import {
  MapPin,
  DollarSign,
  Building2,
  Clock,
  Users,
} from "lucide-react";
import { useEffect, useState } from 'react';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

// local imports
import { useAuth } from '../../context/AuthContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Navbar from '../../components/layout/Navbar';
import StatusBadge from '../../components/StatusBadge';

const JobDetails = () => {
  const { user } = useAuth();
  const { jobId } = useParams();

  const [jobDetails, setJobDetails] = useState(null);

  const getJobDetailsById = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.JOBS.GET_JOB_BY_ID(jobId),
        {
          params: { userId: user?._id || null },
        }
      );
      setJobDetails(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const applyToJob = async () => {
    try {
      if (jobId) {
        await axiosInstance.post(API_PATHS.APPLICATIONS.APPLY_TO_JOB(jobId));
        toast.success("Application submitted successfully!");
      }

      getJobDetailsById();
    } catch (err) {
      console.log("Error", err);
      const errorMsg = err?.response?.data?.message;
      toast.error(errorMsg || "Failed to submit application! Try again later.");
    }
  };

  useEffect(() => {
    if (jobId && user){
    getJobDetailsById();
    }
  }, [jobId, user]);
        
  return (
    
  )
}

export default JobDetails