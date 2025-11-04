// Global Imports
import React from "react";
import { Bookmark, Building, Building2, Calendar, MapPin } from "lucide-react";
import moment from "moment";

// Local Imports
import { useAuth } from "../../context/AuthContext";
import StatusBadge from "../StatusBadge";

const JobCard = ({ job, onClick, onToggleSave, onApply, saved, hideApply }) => {

    const formatSalary = (min, max) => {
    const formatNumber = (num) => {
        if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
        return `$${num}`;
    };
    return `${formatNumber(min)}/m`;
    };

  return <div 
  className=""
    onClick={onClick}
    >
        <div className="">
            <div className="">
                {job?.company?.companyLogo ? (
                    <img
                src={job?.company?.companyLogo}
                alt="Company Logo"
                className=""
                />
                ) : (
                    <div className="">
                        <Building2 className="" />
                    </div>
                )}

                <div className="">
                    <h3 className="">
                        {job.title}
                        </h3>
                    <p className="">
                        <Building className="" />
                        {job?.company?.companyName}
                        </p>
                </div>
            </div>
            {user && (
                <button
                className=""
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave();
                }}
            >
                <Bookmark
                className={`w-5 h-5 hover:text-blue-600 ${ job?.isSaved || saved ? "text-blue-600" : "text-gray-400"
                     }`}
                />
            </button>
            )}
        </div>

        <div className="">
            <div className="">
                <span className="">
                    <MapPin className="" />
                    {job?.location}
                </span>
                <span
                    className={`px-3 py-1 rounded-full font-medium ${
                        job?.type === "Full-Time"
                            ? "bg-green-100 text-green-800"
                        : job.type === "Part-Time"
                            ? "bg-yellow-100 text-yellow-800"
                        : job.type === "Contract" 
                         ?"bg-purple-100 text-purple-800"
                         : "bg-blue-100 text-blue-800"
                         }`}
                >
                    {job?.type}
                </span>
                <span className="">
                    {job?.category}
                </span>
            </div>
            </div>

        <div className="">
            <div className="">
                <span className="">
                    <Calendar className="" />
                    {job?.createdAt
                        ? moment(job.createdAt).format("DD MMM YYYY")
                        : "N/A"}
                </span>
                </div>
                </div>

                <div className="">
            <div className="">
                {formatSalary(job?.salaryMin, job?.salaryMax)}
                </div>
                {!saved && (
                    <>
                    {job?.applicationStatus ? (
                        <StatusBadge status={job?.applicationStatus} />
                    ) : (
                        !hideApply && (
                            <button
                                className=""
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onApply();
                                }}
                            >
                                Apply Now
                            </button>
                        )
                    )}
                    </>
                )}
        </div>
    </div>;
};

export default JobCard;
