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

  const handleSort = (field) => {};

  // Toggle job status
  const handleStatusChange = async (jobId) => {};

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
          <div className="">
            <div className="">
              {/* Search */}
              <div className="">
                <div className="">
                  <Search className="" />
                  </div>

                  <input
                    type="text"
                    placeholder="Search Jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=""
                  />
                </div>
              
              {/* Status Filter */}
              <div className="">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className=""
                  >
                    <Option value="All">All Status</Option>
                    <Option value="Active">Active</Option>
                    <Option value="Closed">Closed</Option>
                  </select>
              </div>
            </div>


            {/* Results Table */}
            
          </div>
        </div>
    </DashboardLayout>
    )
  };


export default ManageJobs;
