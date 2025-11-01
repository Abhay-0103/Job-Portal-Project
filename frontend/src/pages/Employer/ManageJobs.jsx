// Global imports
import React from "react";
import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Plus,
  Edit,
  X,
  Trash2,
  ChevronUp,
  ChevronDown,
  Users,
} from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

// local imports
import DashboardLayout from "../../components/layout/DashboardLayout";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState("title");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;

  // Sample job data
  const [jobs, setJobs] = useState([]);

  // Filter and sort jobs
  const filteredAndSortedJobs = useMemo(() => {
    let filtered = [];

    return filtered;
  }, [jobs, searchTerm, statusFilter, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = filteredAndSortedJobs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Toggle job status
  const handleStatusChange = async (jobId) => {
    try {
      const response = await axiosInstance.put(
        API_PATHS.JOBS.TOGGLE_CLOSE(jobId)
      );
    } catch (error) {
      console.error("Error toggling job status", error);
    }
  };

  // Delete spefifc job
  const handleDeleteJob = async (jobId) => {};

  // decide which icon to show based on sort direction
  const SortIcon = ({ field }) => {};

  // Loading state with animation
  const LoadingRow = () => (
    <tr className="animate-pulse">
      <td className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
        </td>
        <td className="px-6 py-4">
          <div className="h-6  bg-gray-200 rounded-full w-16"></div>
        </td>
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-200 rounded-full w-16"></div>
        </td>
        <td className="px-6 py-4">
          <div className="flex space-x-2">
            <div className="h-8 bg-gray-200 rounded w-16"></div>
            <div className="h-8 bg-gray-200 rounded w-16"></div>
            <div className="h-8 bg-gray-200 rounded w-16"></div>
          </div>
        </td>
        </tr>
        
  )

  const getPostedJobs = async (disableLoader) => {
    setIsLoading(!disableLoader);
    try {
      const response = await axiosInstance.get(
        API_PATHS.JOBS.GET_JOBS_EMPLOYER
      );

      if (response.status === 200 && response.data?.length > 0) {
        const formattedJobs = response.data?.map((job) => ({
          id: job._id,
          title: job?.title,
          company: job?.company?.name,
          status: job?.isClosed ? "Closed" : "Active",
          applicants: job?.applicationCount || 0,
          datePosted: moment(job?.createdAt).format("DD-MM-YYYY"),
          logo: job?.company?.companyLogo,
        }));

        setJobs(formattedJobs);
      }
    } catch (error) {
      if (error.response) {
        // handle Api-specicifc error messages
        console.error(error.response.data.message);
      } else {
        console.error("Error posting job. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

    useEffect(() => {
      getPostedJobs();
      return () => {};
    }, []);

    return (
    <DashboardLayout>
      <div className="min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Job Management
                  </h1>
                  <p className="text-sm text-gray-600 mt-1">
                    Manage your job posting and track applications
                  </p>
              </div>

              <button
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap"
              onClick={() => navigate("/post-job")}
              >
                <Plus className="w-5 h-5 mr-2"/>
                Add New Job
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl shadow-black/5 border border-white/20 p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                  </div>

                  <input
                    type="text"
                    placeholder="Search Jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-0 transition-all duration-200 bg-gray-50/50 placeholder-gray-400"
                  />
                </div>
              
              {/* Status Filter */}
              <div className="sm:w-48">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block w-full px-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Closed">Closed</option>
                  </select>
              </div>
            </div>


            {/* Results summary */}
            <div className="my-4">
              <p className="text-sm text-gray-600">
                Showing {paginatedJobs.length} of {filteredAndSortedJobs.length}{" "} jobs
              </p>
            </div>


            {/* Table */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
              {filteredAndSortedJobs.length === 0 && !isLoading ? (
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No jobs found
                    </h3>
                    <p className="text-gray-500">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                  </div>
              ) : (
                <div className="w-[75vw] md:w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-gray-50 to-gray-100/50">
                      <tr>
                        <th
                          className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100/60 transition-all duration-200 min-w-[200px] sm:min-w-0"
                          onClick={() => handleSort("title")}
                        >
                          <div className="flex items-center space-x-1">
                            <span>Job Title</span>
                            <SortIcon field="title" />
                            </div>
                            </th>
                            <th
                            className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer
                            hover:bg-gray-100/60 transition-all duration-200 min-w-[120px] sm:min-w-0"
                            onClick={() => handleSort("status")}
                            >
                              <div className="flex items-center space-x-1">
                                <span>Status</span>
                                <SortIcon field="status" />
                                </div>
                                </th>
                                <th
                                className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100/60 transition-all duration-200 min-w-[130px] sm:min-w-0"
                                onClick={() => handleSort("applicants")}
                                >
                                  <div className="flex items-center space-x-1">
                                    <span>Applicants</span>
                                    <SortIcon field="applicants" />
                                    </div>
                                    </th>
                                    <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider min-w-[180px] sm:min-w-0">
                                      Actions
                                    </th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                      {isLoading
                                      ? Array.from({ length: 5 }).map((_, index) => (
                                        <LoadingRow key={index} />
                                      ))
                                      : paginatedJobs.map((job) => (
                                        <></>
                                      ))}
                                      </tbody>
                                      </table>
                                      </div>
              )}
              </div>

            </div>
          </div>
        </div>
    </DashboardLayout>
    )
  };


export default ManageJobs;
