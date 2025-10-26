// global imports
import React, { useEffect, useState } from "react";
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

  return <DashboardLayout activeMenu="employer-dashboard">
    {isLoading ? <LoadingSpinner /> :
    <div className="max-w-7xl mx-auto space-y-8"></div>
    }
  </DashboardLayout>
};

export default EmployerDashboard;
