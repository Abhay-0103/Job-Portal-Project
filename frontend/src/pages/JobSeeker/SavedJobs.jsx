// Global Imports
import React from 'react'
import {
  ArrowLeft,
  Bookmark,
  Grid,
  List,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

// Local Imports
import { useAuth } from '../../context/AuthContext'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import Navbar from '../../components/layout/Navbar'
import JobCard from '../../components/Cards/JobCard'

const SavedJobs = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [savedJobList, setSavedJobList] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const getSavedJobs = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.JOBS.GET_SAVED_JOBS);
      setSavedJobList(response.data);
    } catch (error) {
      console.error("Error fetching saved jobs:", error);
    }
  };

  const handelUnsaveJob = async (jobId) => {
    try {
      await axiosInstance.delete(API_PATHS.JOBS.UNSAVE_JOB(jobId));
      toast.success("Job removed successfully!");

      getSavedJobs();
    } catch (err) {
      toast.error("Something went wrong! Try again later.");
    }
  };

  useEffect(() => {
    if (user) {
      getSavedJobs();
    }
  }, [user]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      <div className='container mx-auto pt-24'>
        {savedJobList && (
          <div className='bg-white p-6 rounded-lg'>
            <div className='flex items-center justify-between mb-8'>
              <div className='flex items-center gap-4'>
                <button
                  onClick={() => navigate(-1)}
                  className='group flex items-center space-x-2 px-3.5 py-2.5 text-sm font-medium text-gray-600 hover:text-white bg-white/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 border border-gray-200 hover:border-transparent rounded-xl transition-all duration-300 shadow-lg shadow-gray-100 hover:shadow-xl transform hover:-translate-y-0.5'
                  >
                    <ArrowLeft className='h-4 w-4 transition-transform group-hover:-translate-x-1' />
                    </button>

                    <h1 className='text-lg lg:text-xl font-semibold text-gray-900'>
                      Saved Jobs
                      </h1>
                      </div>

                      <div className='flex items-center gap-3 lg:gap-4'>
                        <div className='flex items-center border border-gray-200 rounedd-xl p-1 bg-white'>
                          <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-colors ${
                              viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' 
                              : 'bg-gray-600 hover:text-gray-900 hover:bg-gray-100'
                              }`}
                          >
                            <Grid className='w-4 h-4' />
                          </button>
                          <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-colors ${
                              viewMode === 'list' 
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-gray-600 hover:text-gray-900 hover:bg-gray-100'
                              }`}
                          >
                            <List className='w-4 h-4' />
                          </button>
                        </div>
                      </div>
                      </div>

                      {/* Content Section */}
                      <div className='px-0 pb-8 space-y-8'>
                        {/* jobGrid */}
                        {savedJobList.length === 0 ? (
                          <div className='text-center py-16 lg:py-20 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/20'>
                            <div className='text-gray-300 mb-6'>
                              <Bookmark className='w-16 h-16 mx-auto' />
                            </div>
                            <h3 className='text-xl lg:text-2xl font-bold text-gray-900 mb-2'>
                              You haven't saved any jobs yet.
                            </h3>
                            <p className='text-gray-600 mb-6'>
                              Start saving jobs that interest you and find them here later.
                            </p>
                          <button
                            onClick={() => navigate('/find-jobs')}
                            className='bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors'
                          >
                            Browse Jobs
                          </button>
                          </div>
                        ) : (
                          <>
                            <div className={
                              viewMode === 'grid'
                                ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:grid-6'
                                : 'space-y-4 lg:space-y-6'
                            }
                            >
                              {savedJobList.map((savedJob) => (
                                <JobCard
                                  key={savedJob._id}
                                  job={savedJob?.job}
                                  onClick={() => navigate(`/job/${savedJob?.job._id}`)}
                                  onToggleSave={() => handelUnsaveJob(savedJob?.job._id)}
                                  isSaved={true}
                                />
                        ))}
                            </div>
                          </>
        )}
                      </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default SavedJobs