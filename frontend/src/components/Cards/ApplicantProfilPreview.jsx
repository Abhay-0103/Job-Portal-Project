// AI Code 
// Global Imports
import React, { useState } from "react";
import { Download, X } from "lucide-react";
import moment from "moment";
import toast from "react-hot-toast";

// Local Imports
import { getInitials } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import StatusBadge from "../StatusBadge";

const statusOptions = ["Applied", "In Review", "Rejected", "Accepted"];

const ApplicantProfilPreview = ({
  selectedApplicant,
  setSelectedApplicant,
  handleDownloadResume,
  handleClose,
}) => {
  const [currentStatus, setCurrentStatus] = useState(selectedApplicant?.status || "Applied");
  const [loading, setLoading] = useState(false);

  const applicant = selectedApplicant?.applicant || {};
  const job = selectedApplicant?.job || {};

  const onChangeStatus = async (e) => {
    const newStatus = e.target.value;
    setCurrentStatus(newStatus);
    setLoading(true);

    try {
      const response = await axiosInstance.put(
        API_PATHS.APPLICATIONS.UPDATE_STATUS(selectedApplicant._id),
        { status: newStatus }
      );

      if (response.status === 200) {
        setSelectedApplicant({ ...selectedApplicant, status: newStatus });
        toast.success("Application Status Updated Successfully");
      }
    } catch (err) {
      console.error("Error updating status:", err);
      setCurrentStatus(selectedApplicant?.status || "Applied");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Applicant Profile
          </h3>
          <button
            onClick={() => handleClose()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            {applicant?.avatar ? (
              <img
                src={applicant.avatar}
                alt={applicant?.name || "Applicant"}
                className="h-20 w-20 rounded-full object-cover mx-auto"
              />
            ) : (
              <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                <span className="text-blue-600 font-semibold text-xl">
                  {getInitials(applicant?.name || "A")}
                </span>
              </div>
            )}

            <h4 className="mt-4 text-xl font-semibold text-gray-900">
              {applicant?.name || "Unknown Applicant"}
            </h4>
            <p className="text-gray-600">{applicant?.email || "No email provided"}</p>
          </div>

          <div className="space-y-4">
            {/* Job Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Applied Position</h5>
              <p className="text-gray-700">{job?.title || "N/A"}</p>
              <p className="text-gray-600 text-sm mt-1">
                {job?.location || "Unknown"} • {job?.type || "N/A"}
              </p>
            </div>

            {/* Application Details */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-medium text-gray-900 mb-2">Application Details</h5>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status: </span>
                  <StatusBadge status={currentStatus} />
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Applied Date: </span>
                  <span className="text-gray-900">
                    {moment(selectedApplicant?.createdAt)?.format("DD MMM YYYY")}
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            {applicant?.resume ? (
              <button
                onClick={() => handleDownloadResume(applicant.resume)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            ) : (
              <p className="text-sm text-gray-500 text-center">
                No resume uploaded.
              </p>
            )}

            {/* Status Update */}
            <div className="mt-4">
              <label className="block mb-1 text-sm text-gray-700 font-medium">
                Change Application Status
              </label>
              <select
                value={currentStatus}
                onChange={onChangeStatus}
                disabled={loading}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              {loading && (
                <p className="text-xs text-gray-500 mt-1">Updating status...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfilPreview;
