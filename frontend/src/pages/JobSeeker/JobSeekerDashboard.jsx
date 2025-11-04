// Global Imports
import React from "react";
import { useState, useEffect } from "react";
import { Search, Filter, Grid, List, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// Local Imports
import LoadingSpinner from "../../components/LoadingSpinner";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { useAuth } from "../../context/AuthContext";
import FilterContent from "./components/FilterContent";
import SearchHeader from "./components/SearchHeader";
import Navbar from "../../components/layout/Navbar";

const JobSeekerDashboard = () => {
  const { user } = useAuth();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Filter States
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    category: "",
    type: "",
    minSalary: "",
    maxSalary: "",
  });

  // Sidebar collapse states
  const [expandedSections, setExpandedSections] = useState({
    jobType: true,
    salary: true,
    categories: true,
  });

  // Functions to fetch jobs from API
  const fetchJobs = async (filterParams = {}) => {
    try {
      setLoading(true);
      setError(null);

      // Build query parameters
      const params = new URLSearchParams();

      if (filterParams.keyword) params.append("keyword", filterParams.keyword);
      if (filterParams.location)
        params.append("location", filterParams.location);
      if (filterParams.minSalary)
        params.append("minSalary", filterParams.minSalary);
      if (filterParams.maxSalary)
        params.append("maxSalary", filterParams.maxSalary);
      if (filterParams.category)
        params.append("category", filterParams.category);
      if (filterParams.type) params.append("type", filterParams.type);
      if (user) params.append("userId", user?._id);

      const response = await axiosInstance.get(
        `${API_PATHS.JOBS.GET_ALL_JOBS}?${params.toString()}`
      );

      const jobsData = Array.isArray(response.data)
        ? response.data
        : response.data.jobs || [];

      setJobs(jobsData);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Failed to load jobs. Please try again later.");
      setJobs([]);
    } finally {
      setLoading(false);
    }
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
      const hasFilters = Object.values(apiFilters).some(
        (value) =>
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

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      keyword: "",
      location: "",
      category: "",
      type: "",
      minSalary: "",
      maxSalary: "",
    });
  };

  const MobileFilterOverlay = () => (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${
        showMobileFilters ? "" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => setShowMobileFilters(false)}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="font-bold text-gray-900 text-lg">Filters</h3>
          <button
            onClick={() => setShowMobileFilters(false)}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-full pb-20">
          {/* Filters go here */}
          <FilterContent
            toggleSection={toggleSection}
            clearAllFilters={clearAllFilters}
            expandedSections={expandedSections}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </div>
    </div>
  );

  const toggleSaveJob = async (jobId, isSaved) => {

    try {
      if (isSaved) {
        await axiosInstance.delete(API_PATHS.JOBS.UNSAVE_JOB(jobId));
        toast.success("Job removed successfully");
      } else {
        await axiosInstance.post(API_PATHS.JOBS.SAVE_JOB(jobId));
        toast.success("Job saved successfully");
      }

      fetchJobs();
    } catch (err) {
      console.log("Error:", err);
      toast.error("Failed to update saved jobs. Please try again.");
    }
  };

  const applyToJob = async (jobId) => {

    try {
      if (jobId) {
        await axiosInstance.post(API_PATHS.APPLICATIONS.APPLY_TO_JOB(jobId));
        toast.success("Applied to job successfully");
      }

      fetchJobs();
    } catch (err) {
      console.log("Error:", err);
      const errMsg = err?.response?.data?.message;
      toast.error(errMsg || "Failed to apply to job. Please try again.");
    }
  };

  if (jobs.length == 0 && loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      <div className="min-h-screen mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
          {/* Search Header */}
          <SearchHeader
            filters={filters}
            handleFilterChange={handleFilterChange}
          />

          <div className="">
            {/* Desktop Filters Sidebar */}
            <div className="">
              <div className="">
              <h3 className="">
                Filter Jobs
              </h3>
              <FilterContent
                toggleSection={toggleSection}
                clearAllFilters={clearAllFilters}
                expandedSections={expandedSections}
                filters={filters}
                handleFilterChange={handleFilterChange}
              />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="">
              {/* Result Header */}
              <div className="">
                <div>
                  <p className="">
                    Showing{" "}
                    <span className="">
                      {jobs.length}
                    </span>{" "}
                    Jobs
                  </p>
                </div>

                <div className="">
                  {/* Mobile Filter Button */}
                  <button
                  onClick={() => setShowMobileFilters(true)}
                  className=""
                >
                  <Filter className="" />
                  Filters
                </button>

                <div className="">
                  <div className="">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === "grid"
                          ? "bg-blue-500 text-white shasdow-sm"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <Grid className="" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === "list"
                          ? "bg-blue-500 text-white shadow-sm"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <List className="" />
                    </button>
                  </div>
                </div>
              </div>
              </div>


                </div>
                </div>
          </div>

          {/* Mobile Filters Overlay */}
          <MobileFilterOverlay />
          </div>
          </div>
  )
};

export default JobSeekerDashboard;
