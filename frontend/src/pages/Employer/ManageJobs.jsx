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
    let filtered = jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || job.status === statusFilter;
      return matchesSearch && matchesStatus;
    });

    // sort jobs
    filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === "applicants") {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

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
      await axiosInstance.put(API_PATHS.JOBS.TOGGLE_CLOSE(jobId));

      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job.id === jobId
            ? { ...job, status: job.status === "Active" ? "Closed" : "Active" }
            : job
        )
      );

      toast.success("Job Status Updated!");
    } catch (error) {
      console.error("Error toggling job status", error);
      toast.error("Failed to update job status");
    }
  };

  // Delete spefifc job
  const handleDeleteJob = async (jobId) => {
    try {
      await axiosInstance.delete(API_PATHS.JOBS.DELETE_JOB(jobId));
      setJobs(jobs.filter((job) => job.id !== jobId));
      toast.success("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job", error);
    }
  };

  // decide which icon to show based on sort direction
  const SortIcon = ({ field }) => {
    if (sortField !== field)
      return <ChevronUp className="w-4 h-4 text-gray-400" />;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4 text-blue-600" />
    ) : (
      <ChevronDown className="w-4 h-4 text-blue-600" />
    );
  };

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
  );

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
    <DashboardLayout activeMenu="manage-jobs">
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
                <Plus className="w-5 h-5 mr-2" />
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
                Showing {paginatedJobs.length} of {filteredAndSortedJobs.length}{" "}
                jobs
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
                    No Jobs Found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filter to find what you're
                    looking for.
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
                            <tr
                              key={job.id}
                              className="hover:bg-blue-50/30 transition-all duration-200 border-b border-gray-100/60"
                            >
                              <td className="px-6 py-5 whitespace-nowrap min-w-[200px] sm:min-w-0">
                                <div>
                                  <div className="text-sm font-semibold text-gray-900">
                                    {job.title}
                                  </div>
                                  <div className="text-xs text-gray-500 font-medium">
                                    {job.company}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap min-w-[120px] sm:min-w-0">
                                <span
                                  className={`inline-flex px-3 py-1.5 text-xs font-semibold rounded-full ${
                                    job.status === "Active"
                                      ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                      : "bg-gray-100 text-gray-700 border border-gray-200"
                                  }`}
                                >
                                  {job.status}
                                </span>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap min-w-[130px] sm:min-w-0">
                                <button
                                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 hover:bg-blue-50 px-2 py-1 rounded-lg"
                                  onClick={() =>
                                    navigate("/applicants", {
                                      state: { jobId: job.id },
                                    })
                                  }
                                >
                                  <Users className="w-4 h-4 mr-1.5" />
                                  {job.applicants}
                                </button>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium min-w-[180px] sm:min-w-0">
                                <div className="flex space-x-2">
                                  <button
                                    className="text-blue-600 hover:text-blue-800 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                                    onClick={() =>
                                      navigate("/post-job", {
                                        state: { jobId: job.id },
                                      })
                                    }
                                  >
                                    <Edit className="w-4 h-4" />
                                  </button>

                                  {job.status === "Active" ? (
                                    <button
                                      onClick={() => handleStatusChange(job.id)}
                                      className="flex items-center gap-2 text-xs text-orange-600 hover:text-orange-800 p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                                    >
                                      <X className="w-4 h-4" />
                                      <span className="hidden sm:inline">
                                        Close
                                      </span>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleStatusChange(job.id)}
                                      className="flex items-center gap-2 text-xs text-green-600 hover:text-green-800 p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
                                    >
                                      <Plus className="w-4 h-4" />
                                      <span className="hidden sm:inline">
                                        Activate
                                      </span>
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDeleteJob(job.id)}
                                    className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Pagination  */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{""}
                      <span className="font-medium">
                        {startIndex + 1}
                      </span> to{" "}
                      <span className="font-medium">
                        {Math.min(
                          startIndex + itemsPerPage,
                          filteredAndSortedJobs.length
                        )}
                      </span>{" "}
                      of{" "}
                      <span className="font-medium">
                        {filteredAndSortedJobs.length}
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                      <button
                        onClick={() =>
                          setCurrentPage(Math.max(1, currentPage - 1))
                        }
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              currentPage === page
                                ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                                : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}
                      <button
                        onClick={() =>
                          setCurrentPage(Math.min(totalPages, currentPage + 1))
                        }
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManageJobs;
