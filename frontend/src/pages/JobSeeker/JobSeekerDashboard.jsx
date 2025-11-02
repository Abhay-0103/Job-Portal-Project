// Global Imports
import React from 'react'
import { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, X } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

// Local Imports
import LoadingSpinner from '../../components/LoadingSpinner'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { useAuth } from '../../context/AuthContext'
import { min } from 'moment'

const JobSeekerDashboard = () => {

  const { user } = useAuth();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Filter States
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    category: '',
    type: '',
    minSalary: '',
    maxSalary: '',
  });

  // Sidebar collapse states
  const [expandedSections, setExpandedSections] = useState({
    jobType: true,
    salary: true,
    categories: true,
  });

  // Functions to fetch jobs from API
  const fetchJobs = async (filterParams = {}) => {

  };

  // Fetch jobs on component mount and when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const apiFilters = {
        keyword: filters.keyword,
        location: filters.location,
        minSalary: filters.minSalary,
        maxSalary: filters.maxSalary,
        category: filters.category,
        type: filters.type,
        experience: filters.experience,
        remoteOnly: filters.remoteOnly,
      };
      
      // Only call API if there are meaningful filter
      const hasFilters = Object.values(apiFilters).some((value) =>
         value !== "" &&
          value !== false &&
          value !== null &&
          value !== undefined
);

  if (hasFilters) {
        fetchJobs(apiFilters);
      } else {
        fetchJobs(); // Fetch all jobs if no filters
      }
    }, 500); // Debounce API calls by 500ms

    return () => clearTimeout(timeoutId);
  }, [filters, user]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>JobSeekerDashboard</div>
  )
}

export default JobSeekerDashboard