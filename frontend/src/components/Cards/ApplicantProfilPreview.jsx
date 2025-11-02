// Global Imports
import React from "react";
import { Download, X } from "lucide-react"
import { useState } from "react";
import moment from "moment";
import toast from "react-hot-toast";

// Local Imports
import { getInitials } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import StatusBadge from "../layout/StatusBadge";

const statusOptions = ['Applied', 'In Review', 'Rejected', 'Accepted'];

const ApplicantProfilPreview = ({
  selectedApplicant,
  setSelectedApplicant,
  handleDownloadResume,
  handleClose,
}) => {

    const [currentStatus, setCurrentStatus] = useState(selectedApplicant.status);
    const [loading, setLoading] = useState(false);

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
                // Update local state after successful update
                setSelectedApplicant({ ...selectedApplicant, status: newStatus });
                toast.success("Application Status Updated Successfully");
            }
        } catch (err) {
            console.error("Error updating status:", err);
            // Optionally revert status on error
            setCurrentStatus(selectedApplicant.status);
        } finally {
            setLoading(false);
        }
    };

  return <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] bg-opacity-50 flex items-center justify-center p-4 z-50">
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
                {selectedApplicant.applicant.avatar ? (
                    <img
                    src={selectedApplicant.applicant.avatar}
                    alt={selectedApplicant.applicant.name}
                    className="h-20 w-20 rounded-full object-cover mx-auto"
                    />
                ) : (
                    <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                        <span className="text-blue-600 font-semibold text-xl">{getInitials(selectedApplicant.applicant.name)}</span>
                    </div>
                )}
                <h4 className="mt-4 text-xl font-semibold text-gray-900">
                    {selectedApplicant.applicant.name}
                </h4>
                <p className="text-gray-600">{selectedApplicant.applicant.email}</p>
                </div>

                


                </div>
                </div>
                </div>
};

export default ApplicantProfilPreview;
