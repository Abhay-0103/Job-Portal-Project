// global imports
import React, { Children, useEffect, useState } from "react";
import {
  Plus,
  Briefcase,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

// local imports
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LoadingSpinner from "../../components/LoadingSpinner";

const Card =({title, headerAction, subtitle, className, children}) => {
  return <div
  className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
  >
    {(title || headerAction) && (
      <div className="flex items-center justify-between p-6 pb-4">
        <div>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        {headerAction}
      </div>
    )}
    <div className={title ? "px-6 pb-6" : "p-6"}>{children}</div>
  </div>;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  color = "blue",
}) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-violet-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  };

  return (
    <Card
className={`bg-gradient-to-br ${colorClasses[color]} text-white border-0`}
  >
<div className="flex items-center justify-between">
  <div>
    <p className="text-white/80 text-sm font-medium">{title}</p>
    <p className="text-3xl font-bold mt-1">{value}</p>
    {trend && (
      <div className="flex items-center mt-2 text-sm">
        <TrendingUp className="h-4 w-4 mr-1" />
        <span className="font-medium">{trendValue}</span>
      </div>
    )}
  </div>
  <div className="bg-white/10 p-3 rounded-xl">
    <Icon className="h-6 w-6" />
  </div>
</div>
  </Card>
  );
};

const EmployerDashboard = () => {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDashboardOverView = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.OVERVIEW);
      if (response.status === 200) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDashboardOverView();
    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="employer-dashboard">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="max-w-7xl mx-auto space-y-8 mb-96">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Active Jobs"
              value={dashboardData?.counts?.totalActiveJobs || 0}
              icon={Briefcase}
              trend={true}
              trendValue={`${dashboardData?.counts?.trends?.activeJobs || 0}%`}
              color="blue"
            />

            <StatCard
              title="Total Applicants"
              value={dashboardData?.counts?.totalApplications || 0}
              icon={Users}
              trend={true}
              trendValue={`${
                dashboardData?.counts?.trends?.totalApplicants || 0
              }%`}
              color="green"
            />

            <StatCard
              title="Hired"
              value={dashboardData?.counts?.totalHired || 0}
              icon={CheckCircle2}
              trend={true}
              trendValue={`${dashboardData?.counts?.trends?.totalHired || 0}%`}
              color="purple"
            />
          </div>


        </div>
      )}
    </DashboardLayout>
  );
};

export default EmployerDashboard;
