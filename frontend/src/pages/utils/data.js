import {
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus,
} from "lucide-react";

export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description:
            "AI-driven algorithms to match you with jobs that fit your skills and preferences.",
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description:
            "Create a professional resume with our easy-to-use builder and templates.",
    },
    {
        icon: MessageSquare,
        title: "Direct Messaging",
        description:
            "Communicate directly with employers through our integrated messaging system.",
    },
    {
        icon: Award,
        title: "Skill Assessments",
        description:
            "Take skill tests to showcase your abilities to potential employers.",
    },
];

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description:
            " Browse a vast database of qualified candidates to find the perfect fit for your job openings.",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description:
            " Gain insights into your job postings' performance and candidate engagement with our analytics tools.",
    },
    {
        icon: Shield,
        title: "Secure Hiring Process",
        description:
            " Ensure a safe and compliant hiring process with our security features and guidelines.",
    },
    {
        icon: Clock,
        title: "Efficient Workflow",
        description:
            " Streamline your recruitment process with tools designed to save you time and effort.",
    },
];

// Navigation items Configuration
export const NAVIGATION_MENU = [
    { id: "employers-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-job", name: "Post a Job", icon: Plus },
    { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
    { id: "company-profile", name: "Company Profile", icon: Building2 },

];

// categories data and job types
export const CATEGORIES = [
    { value: "Engineering", label: "Engineering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Customer Support", label: "Customer Support" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Finance", label: "Finance" },
    { value: "Operations", label: "Operations" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Education", label: "Education" },
];

export const JOB_TYPES = [
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
    { value: "Remote", label: "Remote" },
];

export const SALARY_RANGES = [
    "Less then $1000",
    "$1000 - $3000",
    "More then $15,000",
];