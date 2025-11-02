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

  return <div className="">
    <div className="">
        {/* Modal Header */}
        <div className="">
            <h3 className="">
                Applicant Profile
            </h3>
            <button
            onClick={() => handleClose()}
            className=""
            >
                <X className="" />
            </button>
        </div>

        {/* Modal Content */}
        <div className="">
            <div className="">
                {selectedApplicant.applicant.avatar ? (
                    <img
                    src={selectedApplicant.applicant.avatar}
                    alt={selectedApplicant.applicant.name}
                    className=""
                    />
                ) : (
                    <div className="">
                        <span className="">{getInitials(selectedApplicant.applicant.name)}</span>
                    </div>
                )}
                <h4 className="">
                    {selectedApplicant.applicant.name}
                </h4>
                <p className="">{selectedApplicant.applicant.email}</p>
                </div>


                </div>
                </div>
                </div>
};

export default ApplicantProfilPreview;
