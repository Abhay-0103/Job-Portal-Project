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
    <div className=''>
      <Navbar />

      <div className=''>
        {savedJobList && (
          <div className=''>
            <div className=''>
              <div className=''>
                <button
                  onClick={() => navigate(-1)}
                  className=''
                  >
                    <ArrowLeft className='' />
                    </button>

                    <h1 className=''>
                      Saved Jobs
                      </h1>
                      </div>

                      <div className=''>
                        <div className=''>
                          <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-colors ${
                              viewMode === 'grid' ? 'bg-blue-600 text-white shadow-sm' 
                              : 'bg-gray-600 hover:text-gray-900 hover:bg-gray-100'
                              }`}
                          >
                            <Grid className='' />
                          </button>
                          <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-colors ${
                              viewMode === 'list' 
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'bg-gray-600 hover:text-gray-900 hover:bg-gray-100'
                              }`}
                          >
                            <List className='' />
                          </button>
                        </div>
                      </div>
                      </div>

                      {/* Content Section */}
                      <div className=''>
                        {/* jobGrid */}
                        {savedJobList.length === 0 ? (
                          <div className=''>
                            <div className=''>
                              <Bookmark className='' />
                            </div>
                            <h3 className=''>
                              You haven't saved any jobs yet.
                            </h3>
                            <p className=''>
                              Start saving jobs that interest you and find them here later.
                            </p>
                          <button
                            onClick={() => navigate('/find-jobs')}
                            className=''
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