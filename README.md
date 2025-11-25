<div align="center">

# 🎯 Job Portal

### A Modern Full-Stack Job Management Platform

*Connecting Job Seekers with Opportunities • Empowering Employers with Tools*

---

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.1-000000.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.19-47A248.svg)](https://mongodb.com/)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Maintained](https://img.shields.io/badge/Maintained-Yes-brightgreen.svg)](https://github.com/Abhay-0103/Job-Portal-Project/graphs/commit-activity)

[Features](#-features) • [Installation](#-installation) • [Documentation](#-api-documentation) • [Contributing](#-contributing)

</div>

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Abhay-0103/Job-Portal-Project.git
cd Job-Portal-Project

# Backend setup
cd backend
npm install
# Configure .env file (see Installation section)
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
npm run dev

# Access the app at http://localhost:5173
```

**Prerequisites:** Node.js v14+, MongoDB, npm v6+

---

## 📋 Table of Contents

- [Overview](#-overview)
  - [Project Goals](#-project-goals)
  - [Target Users](#-target-users)
- [Features](#-features)
  - [For Job Seekers](#for-job-seekers-)
  - [For Employers](#for-employers-)
  - [Common Features](#common-features-)
- [Tech Stack](#-tech-stack)
  - [Backend](#backend-)
  - [Frontend](#frontend-)
  - [Architecture & Design Patterns](#architecture--design-patterns-)
- [Project Structure](#-project-structure)
  - [File Count Summary](#-file-count-summary)
- [Core Features Breakdown](#-core-features-breakdown)
- [Dependencies](#-dependencies)
- [Design System](#-design-system)
- [Performance Optimizations](#-performance-optimizations)
- [Security Features](#-security-features)
- [Installation](#-installation)
  - [Prerequisites](#prerequisites)
  - [Step-by-Step Guide](#-step-1-clone-the-repository)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
  - [Development Mode](#development-mode)
  - [Production Build](#production-build)
  - [Available Scripts](#available-scripts)
- [API Documentation](#-api-documentation)
  - [Authentication Endpoints](#authentication-endpoints)
  - [Job Endpoints](#job-endpoints)
  - [Application Endpoints](#application-endpoints)
  - [User Endpoints](#user-endpoints)
- [Deployment Guide](#-deployment-guide)
- [Testing](#-testing-guide)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [FAQ](#-faq-frequently-asked-questions)
- [Additional Resources](#-additional-resources)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Support](#-support--contact)
- [Project Status](#-project-status--roadmap)

---

## 🌟 Overview

**Job Portal** is a comprehensive full-stack MERN (MongoDB, Express, React, Node.js) application designed to revolutionize the job search and recruitment process. Built as part of the BTI College Project, this platform seamlessly connects job seekers with employers, offering an intuitive interface and powerful features for modern hiring needs.

### 🎯 Project Goals

- Create a user-friendly platform for job seekers to find and apply for jobs
- Provide employers with efficient tools to manage job postings and applicants
- Implement secure authentication and role-based access control
- Build a scalable and maintainable codebase following industry best practices
- Deliver a responsive, modern UI that works across all devices

### 👥 Target Users

1. **Job Seekers** - Individuals searching for employment opportunities
2. **Employers** - Companies and recruiters posting job openings
3. **Administrators** - Platform managers (future enhancement)

### Key Highlights

- 🔐 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 📊 **Analytics Dashboard** - Real-time insights and metrics for employers
- 💼 **Job Management** - Full CRUD operations for job postings with status control
- 📝 **Application Tracking** - Comprehensive application management system
- ⭐ **Save Jobs** - Bookmark and organize favorite job opportunities
- 👤 **Profile Management** - Rich user profiles with image upload support
- 🎨 **Modern UI/UX** - Built with TailwindCSS and Framer Motion animations
- 📱 **Responsive Design** - Mobile-first approach for all devices
- 🚀 **Real-time Notifications** - Toast notifications for user actions
- 🔍 **Advanced Search** - Filter jobs by title, location, type, and more

---

## ✨ Features

### For Job Seekers 👨‍💼

#### Job Discovery & Application
- 🔍 **Smart Job Search** - Search jobs by title, keywords, location, and company
- 🎯 **Advanced Filters** - Filter by job type (Full-time, Part-time, Contract, Internship)
- 📋 **Job Details** - View comprehensive job descriptions, requirements, and salary
- 📄 **Easy Apply** - Submit applications with resume upload and cover letter
- 📊 **Application Tracking** - Monitor all your applications and their status in one place
- 🔔 **Status Updates** - Track application progress (Applied, In Review, Accepted, Rejected)

#### Profile & Preferences
- ⭐ **Save Jobs** - Bookmark favorite opportunities for quick access later
- 👤 **Profile Management** - Create and customize your professional profile
- 🖼️ **Profile Picture** - Upload and update your profile picture
- 📝 **Resume Upload** - Attach your resume to job applications
- 💼 **Experience & Skills** - Showcase your qualifications and expertise

#### User Experience
- 📱 **Responsive Dashboard** - Access your dashboard from any device
- 🔔 **Toast Notifications** - Get instant feedback on all actions
- 🎨 **Modern Interface** - Clean, intuitive design for better user experience
- ⚡ **Fast Loading** - Optimized performance for quick page loads

---

### For Employers 🏢

#### Job Management
- ➕ **Post Jobs** - Create detailed job listings with rich text descriptions
- ✏️ **Edit Listings** - Update job details anytime
- 🗑️ **Delete Jobs** - Remove outdated or filled positions
- 🔄 **Job Status Control** - Toggle job postings between open/closed states
- 📝 **Job Preview** - Preview how your job posting will appear to applicants
- 🏷️ **Categorize Jobs** - Add job type, location, salary range, and requirements

#### Applicant Management
- 👥 **Review Applications** - Access and evaluate all candidate applications
- � **Application Dashboard** - See all applicants in a centralized view
- 🎯 **Filter Applicants** - Sort by application date, status, or position
- 📄 **View Resumes** - Download and review applicant resumes
- ✅ **Update Status** - Change application status (Applied, In Review, Accepted, Rejected)
- 👤 **Applicant Profiles** - View detailed candidate information in modal

#### Analytics & Insights
- 📈 **Dashboard Analytics** - Comprehensive metrics and statistics
- 📊 **Key Metrics**:
  - Total jobs posted
  - Total applications received
  - Active vs closed jobs
  - Applications by status
  - Recent application trends
- 📉 **Visual Data** - Charts and graphs for better insights (future enhancement)

#### Company Profile
- 🏢 **Company Profile** - Showcase your organization professionally
- �️ **Company Logo** - Upload and display your company logo
- 📝 **About Company** - Add company description and information
- 🌐 **Contact Details** - Display company contact information

---

### Common Features 🌐

#### Authentication & Security
- 🔐 **Secure Login** - JWT-based authentication system
- 🆕 **User Registration** - Easy signup with role selection (Job Seeker / Employer)
- 🔒 **Password Security** - Bcrypt password hashing with salt rounds
- 🚪 **Logout** - Secure session termination
- 🛡️ **Protected Routes** - Role-based access control for different user types

#### Navigation & Layout
- 🧭 **Clean Navigation** - Intuitive navbar with quick access to key features
- 📱 **Mobile Responsive** - Seamless experience on all screen sizes
- 🎯 **Breadcrumbs** - Easy navigation tracking (future enhancement)
- 🔍 **Search Bar** - Global search functionality

#### Technical Features
- ⚡ **Fast Performance** - Optimized with Vite build tool
- 🎨 **Smooth Animations** - Framer Motion for delightful interactions
- 🔄 **Real-time Updates** - Instant UI updates without page refresh
- 💾 **Data Persistence** - Session management with localStorage
- 🎯 **Error Handling** - Comprehensive error messages and validation

---

## 🛠 Tech Stack

### Backend 🔧

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Node.js** | Latest | JavaScript runtime environment | [Docs](https://nodejs.org/docs/) |
| **Express.js** | 5.1.0 | Fast, minimalist web framework | [Docs](https://expressjs.com/) |
| **MongoDB** | - | NoSQL document database | [Docs](https://docs.mongodb.com/) |
| **Mongoose** | 8.19.2 | MongoDB object modeling & validation | [Docs](https://mongoosejs.com/) |
| **JWT** | 9.0.2 | Secure token-based authentication | [Docs](https://jwt.io/) |
| **Bcrypt.js** | 3.0.2 | Password hashing & encryption | [Docs](https://github.com/dcodeIO/bcrypt.js) |
| **Multer** | 2.0.2 | Multipart/form-data file upload | [Docs](https://github.com/expressjs/multer) |
| **Cors** | 2.8.5 | Cross-origin resource sharing | [Docs](https://github.com/expressjs/cors) |
| **Dotenv** | 17.2.3 | Environment variable loader | [Docs](https://github.com/motdotla/dotenv) |
| **Nodemon** | 3.1.10 | Development auto-restart utility | [Docs](https://nodemon.io/) |

### Frontend 💻

| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **React** | 19.1.1 | Component-based UI library | [Docs](https://react.dev/) |
| **Vite** | 7.1.7 | Next-gen frontend build tool | [Docs](https://vitejs.dev/) |
| **TailwindCSS** | 4.1.14 | Utility-first CSS framework | [Docs](https://tailwindcss.com/) |
| **React Router DOM** | 7.7.0 | Declarative routing for React | [Docs](https://reactrouter.com/) |
| **Axios** | 1.10.0 | Promise-based HTTP client | [Docs](https://axios-http.com/) |
| **Framer Motion** | 12.23.24 | Production-ready animations | [Docs](https://www.framer.com/motion/) |
| **Lucide React** | 0.546.0 | Beautiful & consistent icons (500+) | [Docs](https://lucide.dev/) |
| **React Hot Toast** | 2.6.0 | Lightweight toast notifications | [Docs](https://react-hot-toast.com/) |
| **Moment.js** | 2.30.1 | Parse, validate, manipulate dates | [Docs](https://momentjs.com/) |
| **ESLint** | 9.36.0 | Code quality & linting tool | [Docs](https://eslint.org/) |

### Architecture & Design Patterns 🏗️

| Aspect | Implementation | Description |
|--------|----------------|-------------|
| **Architecture Pattern** | MVC (Model-View-Controller) | Separates data, logic, and presentation |
| **API Design** | RESTful API | Standard HTTP methods & status codes |
| **Authentication** | JWT with HTTP-only cookies | Secure token-based auth |
| **State Management** | React Context API | Global state for user auth |
| **Database** | NoSQL (MongoDB) | Document-based flexible schema |
| **Styling Approach** | Utility-first CSS | TailwindCSS atomic classes |
| **File Structure** | Feature-based | Organized by functionality |
| **Code Organization** | Modular components | Reusable, maintainable code |
| **API Communication** | Axios with interceptors | Centralized HTTP requests |
| **Routing** | Client-side routing | React Router DOM |
| **Form Handling** | Controlled components | React state management |
| **Error Handling** | Try-catch with middleware | Graceful error responses |

### Development Tools 🛠️

| Tool | Purpose |
|------|---------|
| **VS Code** | Primary code editor |
| **Postman** | API testing & documentation |
| **MongoDB Compass** | Database GUI & management |
| **Git** | Version control system |
| **GitHub** | Code repository & collaboration |
| **Chrome DevTools** | Frontend debugging |
| **React DevTools** | Component debugging |

---

## 📁 Project Structure

<details>
<summary><strong>Click to expand complete project structure</strong></summary>

```
job-portal/
│
├── 📂 backend/                              # Backend API Server (Node.js + Express)
│   ├── 📄 .env                              # Environment variables (not in repo)
│   ├── 📄 .gitignore                        # Git ignore rules
│   ├── 📄 package.json                      # Backend dependencies & scripts
│   ├── 📄 server.js                         # Entry point - Express server setup
│   │
│   ├── 📂 config/                           # Configuration Files
│   │   └── 📄 db.js                         # MongoDB connection & database setup
│   │
│   ├── 📂 controllers/                      # Request Handlers & Business Logic
│   │   ├── 📄 analyticsController.js        # Analytics data & metrics management
│   │   ├── 📄 applicationController.js      # Job application CRUD operations
│   │   ├── 📄 authController.js             # User registration, login & authentication
│   │   ├── 📄 jobController.js              # Job posting CRUD & search operations
│   │   ├── 📄 savedJobController.js         # Saved/bookmarked jobs functionality
│   │   └── 📄 userController.js             # User profile & data management
│   │
│   ├── 📂 middlewares/                      # Custom Middleware Functions
│   │   ├── 📄 authMiddleware.js             # JWT token verification & route protection
│   │   └── 📄 uploadMiddleware.js           # Multer configuration for file uploads
│   │
│   ├── 📂 models/                           # Mongoose Database Schemas
│   │   ├── 📄 Analytics.js                  # Analytics data schema
│   │   ├── 📄 Application.js                # Job application schema with status tracking
│   │   ├── 📄 Job.js                        # Job posting schema with employer reference
│   │   ├── 📄 SavedJob.js                   # Saved jobs schema with user reference
│   │   └── 📄 User.js                       # User account schema (jobSeeker/employer)
│   │
│   ├── 📂 routes/                           # API Route Definitions
│   │   ├── 📄 analyticsRoutes.js            # GET /api/analytics/* endpoints
│   │   ├── 📄 applicationRoutes.js          # /api/applications/* endpoints
│   │   ├── 📄 authRoutes.js                 # POST /api/auth/register, /login endpoints
│   │   ├── 📄 jobRoutes.js                  # /api/jobs/* CRUD endpoints
│   │   ├── 📄 savedJobsRoutes.js            # /api/save-jobs/* endpoints
│   │   └── 📄 userRoutes.js                 # /api/user/profile endpoints
│   │
│   └── 📂 uploads/                          # Directory for user uploaded files
│       └── (resumes, images, documents)      # Multer storage location
│
│
├── 📂 frontend/                             # Frontend Application (React + Vite)
│   ├── 📄 .gitignore                        # Git ignore rules for frontend
│   ├── 📄 eslint.config.js                  # ESLint configuration & rules
│   ├── 📄 index.html                        # HTML entry point with Vite
│   ├── 📄 package.json                      # Frontend dependencies & scripts
│   ├── 📄 vite.config.js                    # Vite build & dev server configuration
│   ├── 📄 README.md                         # Frontend-specific documentation
│   │
│   ├── 📂 public/                           # Static Public Assets
│   │   └── (images, icons, fonts)           # Publicly accessible files
│   │
│   └── 📂 src/                              # Source Code Directory
│       ├── 📄 App.jsx                       # Root application component with routing
│       ├── 📄 main.jsx                      # React DOM entry point
│       ├── 📄 index.css                     # Global TailwindCSS styles & custom CSS
│       │
│       ├── 📂 assets/                       # Static Assets (Images, Icons, Media)
│       │   └── (logos, banners, icons)       # Project-specific images
│       │
│       ├── 📂 components/                   # Reusable UI Components
│       │   ├── 📄 LoadingSpinner.jsx        # Loading state spinner component
│       │   ├── 📄 StatusBadge.jsx           # Application status badge component
│       │   │
│       │   ├── 📂 Cards/                    # Card-based UI Components
│       │   │   ├── 📄 ApplicantDashboardCard.jsx     # Applicant info card for employer
│       │   │   ├── 📄 ApplicantProfilPreview.jsx     # Applicant profile modal/preview
│       │   │   ├── 📄 JobCard.jsx                    # Job listing card component
│       │   │   ├── 📄 JobDashboardCard.jsx           # Job metrics card for dashboard
│       │   │   └── 📄 JobPostingPreview.jsx          # Job posting preview card
│       │   │
│       │   ├── 📂 Input/                    # Form Input Components
│       │   │   ├── 📄 InputField.jsx        # Reusable text input with validation
│       │   │   ├── 📄 SalaryRangeSlider.jsx # Salary range slider component
│       │   │   ├── 📄 SelectField.jsx       # Dropdown select field component
│       │   │   └── 📄 TextareaField.jsx     # Multiline text input component
│       │   │
│       │   └── 📂 layout/                   # Layout & Structure Components
│       │       ├── 📄 DashboardLayout.jsx   # Dashboard page wrapper layout
│       │       ├── 📄 Navbar.jsx            # Top navigation bar with auth
│       │       └── 📄 ProfileDropdown.jsx   # User profile dropdown menu
│       │
│       ├── 📂 context/                      # React Context API Providers
│       │   └── 📄 AuthContext.jsx           # Global authentication state management
│       │
│       ├── 📂 pages/                        # Page-level Components (Routes)
│       │   │
│       │   ├── 📂 Auth/                     # Authentication Pages
│       │   │   ├── 📄 Login.jsx             # User login page
│       │   │   └── 📄 SignUp.jsx            # User registration page (role selection)
│       │   │
│       │   ├── 📂 Employer/                 # Employer-specific Pages
│       │   │   ├── 📄 ApplicationViewer.jsx         # View & manage job applicants
│       │   │   ├── 📄 EditProfileDetails.jsx        # Edit company/employer profile
│       │   │   ├── 📄 EmployerDashboard.jsx         # Employer analytics dashboard
│       │   │   ├── 📄 EmployerProfilePage.jsx       # View company profile page
│       │   │   ├── 📄 JobPostingForm.jsx            # Create/edit job posting form
│       │   │   └── 📄 ManageJobs.jsx                # Job listings management page
│       │   │
│       │   ├── 📂 JobSeeker/                # Job Seeker-specific Pages
│       │   │   ├── 📄 JobDetails.jsx                # Individual job detail page
│       │   │   ├── 📄 JobSeekerDashboard.jsx        # Job search & browse dashboard
│       │   │   ├── 📄 SavedJobs.jsx                 # Saved/bookmarked jobs page
│       │   │   ├── 📄 UserProfile.jsx               # Job seeker profile page
│       │   │   │
│       │   │   └── 📂 components/           # Job Seeker-specific Components
│       │   │       ├── 📄 FilterContent.jsx         # Advanced job search filters
│       │   │       └── 📄 SearchHeader.jsx          # Search bar with filters
│       │   │
│       │   └── 📂 LandingPage/              # Public Landing Page
│       │       ├── 📄 LandindPage.jsx       # Main landing page component
│       │       │
│       │       └── 📂 components/           # Landing Page Sections
│       │           ├── 📄 Analytics.jsx     # Platform statistics section
│       │           ├── 📄 Features.jsx      # Key features showcase
│       │           ├── 📄 Footer.jsx        # Footer with links & info
│       │           ├── 📄 Header.jsx        # Landing page header/navigation
│       │           └── 📄 Hero.jsx          # Hero section with CTA
│       │
│       ├── 📂 routes/                       # Route Configuration & Protection
│       │   └── 📄 ProtectedRoute.jsx        # HOC for authenticated route protection
│       │
│       └── 📂 utils/                        # Utility Functions & Helpers
│           ├── 📄 apiPaths.js               # Centralized API endpoint constants
│           ├── 📄 axiosInstance.js          # Pre-configured Axios instance with interceptors
│           ├── 📄 data.js                   # Static data & mock constants
│           ├── 📄 helper.js                 # Common helper functions (date, format, etc.)
│           └── 📄 uploadImage.js            # Image upload utility functions
│
└── 📄 README.md                             # Main project documentation (this file)
```

</details>

### 📊 File Count Summary

| Category | Count | Description |
|----------|-------|-------------|
| **Backend Controllers** | 6 | Business logic handlers |
| **Backend Models** | 5 | Database schemas |
| **Backend Routes** | 6 | API endpoint definitions |
| **Backend Middlewares** | 2 | Custom middleware functions |
| **Frontend Pages** | 13 | Main page components |
| **Frontend Components** | 18 | Reusable UI components |
| **Frontend Utilities** | 5 | Helper functions |
| **Configuration Files** | 7 | Project & build configs |
| **Total Files** | ~62+ | Excluding node_modules & uploads |

---

## 🚀 Installation

### Prerequisites

Ensure you have the following installed on your system:

| Software | Version | Download Link |
|----------|---------|---------------|
| **Node.js** | v14.0+ | [nodejs.org](https://nodejs.org/) |
| **npm** | v6.0+ | Included with Node.js |
| **MongoDB** | v4.4+ | [mongodb.com](https://www.mongodb.com/try/download/community) |
| **Git** | Latest | [git-scm.com](https://git-scm.com/) |

### Step 1: Clone the Repository

```bash
git clone https://github.com/Abhay-0103/Job-Portal-Project.git
cd Job-Portal-Project
```

### Step 2: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install all dependencies
npm install

# Create .env file in backend directory
touch .env  # On Windows: type nul > .env
```

**Configure your `.env` file:**

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/job-portal
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/job-portal

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here_change_this
JWT_EXPIRE=7d

# CORS Configuration (Optional)
CORS_ORIGIN=http://localhost:5173
```

```bash
# Start the backend server
npm start

# For development with auto-restart
npm run dev
```

✅ **Backend should be running on** `http://localhost:5000`

### Step 3: Frontend Setup

Open a **new terminal window/tab**, then:

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install all dependencies
npm install

# (Optional) Create .env file if you need custom API URL
touch .env  # On Windows: type nul > .env
```

**Configure your `.env` file (if needed):**

```env
# API Configuration
VITE_API_URL=http://localhost:5000
```

```bash
# Start the development server
npm run dev
```

✅ **Frontend should be running on** `http://localhost:5173`

### Step 4: Access the Application

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:5173 | React application |
| **Backend API** | http://localhost:5000 | Express API server |
| **Uploads** | http://localhost:5000/uploads | Static file serving |

### Quick Start Script (Optional)

Create a file `start.sh` (Linux/Mac) or `start.bat` (Windows) in the project root:

**start.sh (Linux/Mac):**
```bash
#!/bin/bash
cd backend && npm install && npm run dev &
cd ../frontend && npm install && npm run dev
```

**start.bat (Windows):**
```batch
@echo off
start cmd /k "cd backend && npm install && npm run dev"
start cmd /k "cd frontend && npm install && npm run dev"
```

---

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port number | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/job-portal` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key_here` |
| `JWT_EXPIRE` | Token expiration time | `7d` (7 days) |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Frontend (.env) - Optional

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` |

---

## 💻 Usage

### Development Mode

#### Backend Server

```bash
cd backend

# Start with Node
npm start
# or
node server.js

# Start with Nodemon (auto-restart on changes)
npm run dev
```

#### Frontend Application

```bash
cd frontend

# Start development server with hot reload
npm run dev

# Run ESLint
npm run lint
```

### Production Build

#### Backend
```bash
cd backend

# Set environment to production in .env
# NODE_ENV=production

# Start production server
npm start
```

#### Frontend
```bash
cd frontend

# Build for production
npm run build

# Preview production build locally
npm run preview

# Output will be in: frontend/dist/
```

### Available Scripts

#### Backend Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the server with Node |
| `npm run dev` | Start with Nodemon (auto-restart) |

#### Frontend Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Default Ports

- **Frontend Development**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`
- **MongoDB**: `mongodb://localhost:27017`

---

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register New User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "jobSeeker" // or "employer"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "token": "jwt_token_here",
  "user": { ... }
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer {token}
```

#### Upload Image
```http
POST /api/auth/upload-image
Content-Type: multipart/form-data
Authorization: Bearer {token}

Form Data:
  image: [file]

Response: {
  "imageUrl": "http://localhost:5000/uploads/filename.jpg"
}
```

---

### Job Endpoints

#### Get All Jobs
```http
GET /api/jobs
Query Parameters:
  - search: string (optional)
  - location: string (optional)
  - type: string (optional)
```

#### Get Jobs by Employer
```http
GET /api/jobs/get-jobs-employer
Authorization: Bearer {token}
```

#### Get Job by ID
```http
GET /api/jobs/:id
```

#### Create New Job (Employer Only)
```http
POST /api/jobs
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Full Stack Developer",
  "company": "Tech Corp",
  "location": "Remote",
  "type": "Full-time",
  "description": "Job description here",
  "requirements": ["Node.js", "React"],
  "salary": "80000-100000"
}
```

#### Update Job (Employer Only)
```http
PUT /api/jobs/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Updated Title",
  ...
}
```

#### Delete Job (Employer Only)
```http
DELETE /api/jobs/:id
Authorization: Bearer {token}
```

#### Toggle Job Status (Open/Closed)
```http
PUT /api/jobs/:id/toggle-close
Authorization: Bearer {token}
```

---

### Application Endpoints

#### Get User Applications
```http
GET /api/applications
Authorization: Bearer {token}
```

#### Submit Application
```http
POST /api/applications
Authorization: Bearer {token}
Content-Type: multipart/form-data

Form Data:
  jobId: string
  coverLetter: string
  resume: [file]
```

#### Get Application by ID
```http
GET /api/applications/:id
Authorization: Bearer {token}
```

#### Update Application Status
```http
PUT /api/applications/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "status": "accepted" // or "rejected", "pending"
}
```

---

### Saved Jobs Endpoints

#### Get All Saved Jobs
```http
GET /api/save-jobs
Authorization: Bearer {token}
```

#### Save a Job
```http
POST /api/save-jobs
Authorization: Bearer {token}
Content-Type: application/json

{
  "jobId": "job_id_here"
}
```

#### Remove Saved Job
```http
DELETE /api/save-jobs/:id
Authorization: Bearer {token}
```

---

### User Endpoints

#### Get User Profile
```http
GET /api/user/profile
Authorization: Bearer {token}
```

#### Update User Profile
```http
PUT /api/user/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Name",
  "bio": "User bio",
  "skills": ["JavaScript", "React"]
}
```

---

### Analytics Endpoints (Employer Only)

#### Get Analytics Data
```http
GET /api/analytics
Authorization: Bearer {token}

Response: {
  "totalJobs": 10,
  "totalApplications": 50,
  "activeJobs": 8,
  "pendingApplications": 20
}
```

---

### Response Status Codes

| Status Code | Description |
|-------------|-------------|
| `200` | Success |
| `201` | Created |
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `500` | Internal Server Error |

---

### Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

---

## 🎯 Future Enhancements

### Version 2.0 Roadmap 🚀

#### High Priority Features
- [ ] **Email Notifications** - Automated emails for application updates and job matches
  - Welcome emails for new users
  - Application submission confirmations
  - Status change notifications
  - Daily/weekly job recommendations

- [ ] **Real-time Chat** - WebSocket-based messaging between employers and candidates
  - One-on-one chat functionality
  - Message history and notifications
  - File sharing in chat
  - Online status indicators

- [ ] **Advanced Search & Filters** - Enhanced job discovery
  - Salary range filters
  - Experience level filtering
  - Skills-based matching
  - Company size preferences
  - Remote work options

- [ ] **Resume Builder** - Integrated resume creation tool
  - Multiple template options
  - PDF export functionality
  - Auto-fill from profile data
  - Preview before download

#### Medium Priority Features
- [ ] **Video Interview Integration** - Built-in video calling
  - Schedule video interviews
  - Zoom/Google Meet integration
  - Interview recording (with consent)
  - Automated reminders

- [ ] **AI-Powered Recommendations** - Machine learning job matching
  - Personalized job suggestions
  - Skills gap analysis
  - Career path recommendations
  - Salary predictions

- [ ] **Interview Scheduling** - Automated interview coordination
  - Calendar integration
  - Availability management
  - Time zone handling
  - Automated reminders

- [ ] **Mobile Application** - Native mobile apps
  - React Native implementation
  - iOS and Android support
  - Push notifications
  - Offline mode support

#### Low Priority / Future Enhancements
- [ ] **Salary Insights** - Market salary data and comparisons
- [ ] **Company Reviews** - Employee reviews and ratings
- [ ] **Skill Assessments** - Online coding challenges and tests
- [ ] **Referral System** - Employee referral bonuses
- [ ] **Job Alerts** - Custom email/SMS job notifications
- [ ] **Analytics Dashboard V2** - Advanced charts and insights
- [ ] **Multi-language Support** - Internationalization (i18n)
- [ ] **Dark Mode** - Theme switching capability
- [ ] **Social Login** - Google, LinkedIn OAuth integration
- [ ] **Application Templates** - Pre-filled application forms
- [ ] **Bulk Actions** - Mass application status updates
- [ ] **Export Data** - CSV/PDF export for jobs and applicants
- [ ] **Admin Panel** - Platform administration dashboard
- [ ] **Payment Integration** - Premium job postings
- [ ] **Job Expiry** - Automatic job closure after deadline

### Community Requested Features
- Performance monitoring dashboard
- Browser extension for job hunting
- Chrome extension for one-click applications
- Automated resume parsing
- Background verification integration
- API for third-party integrations

---

## 🚢 Deployment Guide

### Deploying Backend (Node.js + Express)

#### Option 1: Heroku

1. **Prepare for Deployment**
```bash
# Login to Heroku
heroku login

# Create new Heroku app
heroku create your-job-portal-api

# Add MongoDB Atlas
# (Set up MongoDB Atlas and get connection string)

# Set environment variables
heroku config:set JWT_SECRET=your_secret_key
heroku config:set MONGODB_URI=your_mongodb_atlas_uri
heroku config:set NODE_ENV=production
```

2. **Deploy**
```bash
# Deploy to Heroku
git push heroku main

# View logs
heroku logs --tail
```

#### Option 2: Railway

1. Connect GitHub repository to Railway
2. Add environment variables in Railway dashboard
3. Deploy automatically on git push

#### Option 3: DigitalOcean / AWS / Azure

1. **Set up server** (Ubuntu 20.04 recommended)
2. **Install dependencies:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MongoDB
# Or use MongoDB Atlas

# Install PM2 (Process Manager)
sudo npm install -g pm2
```

3. **Deploy Application:**
```bash
# Clone repository
git clone https://github.com/Abhay-0103/Job-Portal-Project.git
cd Job-Portal-Project/backend

# Install dependencies
npm install

# Set environment variables
nano .env
# Add all production environment variables

# Start with PM2
pm2 start server.js --name job-portal-api
pm2 save
pm2 startup
```

4. **Set up Nginx as reverse proxy:**
```bash
sudo apt install nginx

# Configure Nginx
sudo nano /etc/nginx/sites-available/job-portal

# Add configuration:
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/job-portal /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

5. **Set up SSL with Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Deploying Frontend (React + Vite)

#### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
cd frontend
vercel

# Production deployment
vercel --prod
```

3. **Configure Environment Variables:**
- Add `VITE_API_URL` in Vercel dashboard
- Point to your deployed backend URL

#### Option 2: Netlify

1. **Build the project:**
```bash
cd frontend
npm run build
```

2. **Deploy:**
- Drag and drop `dist` folder to Netlify
- Or connect GitHub repository
- Set build command: `npm run build`
- Set publish directory: `dist`

#### Option 3: GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "homepage": "https://yourusername.github.io/job-portal",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy:**
```bash
npm run deploy
```

---

### Production Checklist

#### Backend
- [ ] Set `NODE_ENV=production`
- [ ] Use strong `JWT_SECRET`
- [ ] Configure MongoDB Atlas (not local)
- [ ] Enable HTTPS/SSL
- [ ] Set up CORS properly
- [ ] Configure rate limiting
- [ ] Add helmet.js for security headers
- [ ] Set up logging (Winston/Morgan)
- [ ] Configure error tracking (Sentry)
- [ ] Enable GZIP compression
- [ ] Set up monitoring (PM2/New Relic)
- [ ] Database backups enabled
- [ ] Environment variables secured

#### Frontend
- [ ] Update API URLs to production
- [ ] Build optimized bundle (`npm run build`)
- [ ] Enable HTTPS
- [ ] Add Google Analytics (optional)
- [ ] Test on multiple browsers
- [ ] Optimize images and assets
- [ ] Configure CDN (optional)
- [ ] Set up error boundary
- [ ] Add meta tags for SEO
- [ ] Test mobile responsiveness

---

## 🧪 Testing Guide

### Running Tests

```bash
# Backend tests (when implemented)
cd backend
npm test

# Frontend tests (when implemented)
cd frontend
npm test

# E2E tests (when implemented)
npm run test:e2e
```

### Test Coverage

| Module | Coverage | Status |
|--------|----------|--------|
| Authentication | Manual | ✅ Tested |
| Job Management | Manual | ✅ Tested |
| Applications | Manual | ✅ Tested |
| User Profiles | Manual | ✅ Tested |
| File Uploads | Manual | ✅ Tested |
| Unit Tests | 0% | ⏳ Planned |
| Integration Tests | 0% | ⏳ Planned |
| E2E Tests | 0% | ⏳ Planned |

### Manual Testing Checklist

#### Authentication & Authorization
- [x] User can register as Job Seeker
- [x] User can register as Employer
- [x] User can login with valid credentials
- [x] User cannot login with invalid credentials
- [x] JWT token is stored and persists
- [x] User can logout successfully
- [x] Protected routes redirect to login
- [x] Role-based access works correctly

#### Job Seeker Workflows
- [x] Can browse all jobs
- [x] Can search jobs by keywords
- [x] Can filter jobs by type/location
- [x] Can view job details
- [x] Can apply to jobs with resume
- [x] Can save/unsave jobs
- [x] Can view saved jobs
- [x] Can track application status
- [x] Can update profile
- [x] Can upload profile picture

#### Employer Workflows
- [x] Can post new jobs
- [x] Can edit existing jobs
- [x] Can delete jobs
- [x] Can toggle job open/closed status
- [x] Can view all posted jobs
- [x] Can view applicants for each job
- [x] Can download applicant resumes
- [x] Can update application status
- [x] Can view analytics dashboard
- [x] Can update company profile

#### UI/UX Testing
- [x] Responsive on mobile devices
- [x] Responsive on tablets
- [x] Works on desktop browsers
- [x] Toast notifications appear
- [x] Loading states display correctly
- [x] Error messages are clear
- [x] Forms validate properly
- [x] Navigation is intuitive

---

## 🔧 Troubleshooting

### Common Issues & Solutions

<details>
<summary><strong>Backend won't start - Port already in use</strong></summary>

**Error:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**
```bash
# Windows - Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac - Find and kill process
lsof -ti:5000 | xargs kill -9

# Or change port in .env
PORT=5001
```
</details>

<details>
<summary><strong>MongoDB connection failed</strong></summary>

**Error:** `MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017`

**Solutions:**
1. **Check if MongoDB is running:**
   ```bash
   # Windows
   net start MongoDB
   
   # Linux
   sudo systemctl start mongod
   
   # Mac
   brew services start mongodb-community
   ```

2. **Verify connection string in .env:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/job-portal
   ```

3. **Check MongoDB status:**
   ```bash
   # Linux/Mac
   sudo systemctl status mongod
   ```

4. **Use MongoDB Atlas** if local connection fails
</details>

<details>
<summary><strong>JWT token not persisting</strong></summary>

**Issue:** User gets logged out on page refresh

**Solutions:**
1. Check if token is saved to localStorage in `AuthContext.jsx`
2. Verify axios interceptors are configured
3. Clear browser cache and cookies
4. Check browser console for errors
</details>

<details>
<summary><strong>File upload not working</strong></summary>

**Error:** File upload returns 500 error

**Solutions:**
1. Check `uploads` directory exists in backend
2. Verify file size limits in uploadMiddleware.js
3. Check file type validation
4. Ensure proper multipart/form-data headers
</details>

<details>
<summary><strong>CORS errors in browser</strong></summary>

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solutions:**
1. **Verify CORS configuration in server.js:**
   ```javascript
   app.use(cors({
     origin: 'http://localhost:5173',
     credentials: true
   }));
   ```

2. **Check CORS_ORIGIN in .env:**
   ```env
   CORS_ORIGIN=http://localhost:5173
   ```

3. **Ensure frontend URL matches allowed origin**
</details>

<details>
<summary><strong>Images not displaying</strong></summary>

**Issue:** Uploaded images show broken link

**Solutions:**
1. Verify uploads directory is served as static:
   ```javascript
   app.use('/uploads', express.static('uploads'));
   ```

2. Check image URL format in database
3. Verify file permissions on uploads directory
4. Check network tab for 404 errors
</details>

<details>
<summary><strong>npm install fails</strong></summary>

**Error:** `npm ERR! code ERESOLVE`

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete package-lock.json and node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Or use legacy peer deps
npm install --legacy-peer-deps
```
</details>

<details>
<summary><strong>Vite build fails</strong></summary>

**Error:** `Build failed with errors`

**Solutions:**
1. Check for TypeScript/ESLint errors
2. Update dependencies:
   ```bash
   npm update
   ```
3. Clear Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```
4. Rebuild:
   ```bash
   npm run build
   ```
</details>

---

## 📈 Performance Optimization Tips

### Backend Optimization
- Enable compression middleware
- Implement database indexing
- Use connection pooling
- Cache frequently accessed data
- Optimize database queries
- Use PM2 cluster mode

### Frontend Optimization
- Code splitting with React.lazy()
- Image optimization and lazy loading
- Implement service workers
- Use React.memo() for expensive components
- Optimize bundle size with tree shaking
- Enable Gzip compression

---

## 📞 FAQ (Frequently Asked Questions)

**Q: Can I use this project for commercial purposes?**
A: Yes, this project is open source under ISC license.

**Q: How do I add more user roles?**
A: Modify the User model in `backend/models/User.js` and add role-based logic in controllers.

**Q: Can I customize the UI design?**
A: Absolutely! All styling is in TailwindCSS - modify classes or update `index.css`.

**Q: How do I add email notifications?**
A: Integrate nodemailer in backend and create email templates.

**Q: Is this production-ready?**
A: Core features are stable. Add security enhancements (rate limiting, helmet.js) for production.

**Q: Can I contribute to this project?**
A: Yes! Please read the Contributing section and submit PRs.

---

---

## 🐛 Known Issues

- None at the moment. Report issues [here](https://github.com/Abhay-0103/Job-Portal-Project/issues)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Job-Portal-Project.git
   cd Job-Portal-Project
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your changes and commit**
   ```bash
   git add .
   git commit -m 'Add: AmazingFeature description'
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes
   - Submit the PR

### Contribution Guidelines

- ✅ Follow the existing code style and conventions
- ✅ Write clear, descriptive commit messages (use [Conventional Commits](https://www.conventionalcommits.org/))
- ✅ Test your changes thoroughly before submitting
- ✅ Update documentation for any new features
- ✅ Add comments for complex logic
- ✅ Keep pull requests focused on a single feature/fix
- ✅ Be respectful and constructive in discussions

### Commit Message Format

```
Type: Brief description

Examples:
- Add: User authentication feature
- Fix: Job application submission bug
- Update: TailwindCSS to version 4.1
- Refactor: Job controller logic
- Docs: API documentation updates
```

---

## 👨‍💻 Author

<div align="center">

### Abhay Singh

[![GitHub](https://img.shields.io/badge/GitHub-@Abhay--0103-181717?style=for-the-badge&logo=github)](https://github.com/Abhay-0103)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abhay-singh-16a492329)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](ab0321054@gmail.com)

**Repository:** [Job-Portal-Project](https://github.com/Abhay-0103/Job-Portal-Project)

</div>

---

## 🔧 Core Features Breakdown

### Backend Features

#### Authentication & Security
- ✅ JWT-based authentication with HTTP-only cookies
- ✅ Password hashing using bcrypt (10 salt rounds)
- ✅ Protected routes with middleware authorization
- ✅ Role-based access control (Job Seeker / Employer)
- ✅ Secure file upload with validation

#### Database Models & Relationships
- **User Model**: Authentication, profile data, role management
- **Job Model**: Job postings with employer reference
- **Application Model**: Job applications with status tracking
- **SavedJob Model**: Bookmarked jobs with user reference
- **Analytics Model**: Platform metrics and statistics

#### API Features
- RESTful API architecture
- CORS enabled for cross-origin requests
- Error handling middleware
- Request validation
- File upload support (Multer)
- Database connection pooling

### Frontend Features

#### UI/UX Components
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Animations**: Smooth transitions with Framer Motion
- **Loading States**: Spinner component for async operations
- **Status Badges**: Visual application status indicators
- **Toast Notifications**: Real-time user feedback
- **Modal Dialogs**: Applicant profile preview, confirmations

#### Page Components
- **Landing Page**: Hero, features, analytics, footer
- **Authentication**: Login, signup with role selection
- **Job Seeker Dashboard**: Job search, filters, saved jobs
- **Employer Dashboard**: Analytics, job management, applicants
- **Profile Pages**: User/company profiles with image upload
- **Job Management**: Create, edit, delete, toggle status

#### State Management
- React Context API for global auth state
- Local state management with hooks
- Persistent authentication with localStorage
- Axios interceptors for token management

---

## 📦 Dependencies

### Backend Dependencies (Production)

| Package | Version | Purpose |
|---------|---------|---------|
| `express` | ^5.1.0 | Web framework for Node.js |
| `mongoose` | ^8.19.2 | MongoDB ODM for data modeling |
| `jsonwebtoken` | ^9.0.2 | JWT token generation & validation |
| `bcryptjs` | ^3.0.2 | Password hashing & comparison |
| `cors` | ^2.8.5 | Enable CORS for API requests |
| `dotenv` | ^17.2.3 | Environment variable management |
| `multer` | ^2.0.2 | File upload middleware |

### Backend Dependencies (Development)

| Package | Version | Purpose |
|---------|---------|---------|
| `nodemon` | ^3.1.10 | Auto-restart server on file changes |

### Frontend Dependencies (Production)

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.1.1 | Core React library |
| `react-dom` | ^19.1.1 | React DOM rendering |
| `react-router-dom` | ^7.7.0 | Client-side routing |
| `axios` | ^1.10.0 | HTTP client for API requests |
| `tailwindcss` | ^4.1.14 | Utility-first CSS framework |
| `@tailwindcss/vite` | ^4.1.14 | TailwindCSS Vite plugin |
| `framer-motion` | ^12.23.24 | Animation library |
| `lucide-react` | ^0.546.0 | Icon library (500+ icons) |
| `react-hot-toast` | ^2.6.0 | Toast notification system |
| `moment` | ^2.30.1 | Date/time manipulation & formatting |

### Frontend Dependencies (Development)

| Package | Version | Purpose |
|---------|---------|---------|
| `vite` | ^7.1.7 | Next-gen build tool & dev server |
| `@vitejs/plugin-react` | ^5.0.4 | Vite plugin for React |
| `eslint` | ^9.36.0 | Code linting & quality |
| `eslint-plugin-react-hooks` | ^5.2.0 | ESLint rules for React hooks |
| `eslint-plugin-react-refresh` | ^0.4.22 | ESLint plugin for React Fast Refresh |
| `@eslint/js` | ^9.36.0 | ESLint JavaScript config |
| `globals` | ^16.4.0 | Global identifiers for ESLint |
| `@types/react` | ^19.1.16 | TypeScript definitions for React |
| `@types/react-dom` | ^19.1.9 | TypeScript definitions for React DOM |

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Blue** | `#2563EB` | Primary buttons, links, accents |
| **Secondary Purple** | `#9333EA` | Gradients, highlights |
| **Success Green** | `#10B981` | Success messages, hired status |
| **Warning Yellow** | `#F59E0B` | Pending, interview status |
| **Error Red** | `#EF4444` | Errors, rejected status |
| **Gray Scale** | `#111827` - `#F9FAFB` | Text, backgrounds, borders |

### Typography

- **Font Family**: System fonts (Inter, -apple-system, BlinkMacSystemFont)
- **Headings**: Bold, 1.5rem - 2.5rem
- **Body Text**: Regular, 1rem
- **Small Text**: 0.875rem

### Component Styling

- **Border Radius**: 0.5rem (rounded-lg)
- **Shadows**: Subtle box-shadows for elevation
- **Transitions**: 200-300ms ease-in-out
- **Spacing**: 4px increment system (Tailwind)

---

## 🚀 Performance Optimizations

### Backend
- ✅ Database indexing on frequently queried fields
- ✅ Connection pooling for MongoDB
- ✅ Efficient query design with Mongoose
- ✅ File size limits on uploads (5MB for images)
- ✅ GZIP compression for responses

### Frontend
- ✅ Code splitting with React.lazy()
- ✅ Vite's fast HMR (Hot Module Replacement)
- ✅ Optimized asset bundling
- ✅ TailwindCSS purging for smaller CSS
- ✅ Image optimization and lazy loading
- ✅ Memoization with React.memo() where needed

---

## 🔒 Security Features

### Implemented Security Measures

1. **Authentication Security**
   - JWT tokens with expiration (7 days default)
   - Secure password hashing with bcrypt
   - HTTP-only cookies (prevents XSS attacks)
   - Token validation on protected routes

2. **Data Validation**
   - Input sanitization on all forms
   - File type validation for uploads
   - Request payload size limits
   - Schema validation with Mongoose

3. **Access Control**
   - Role-based authorization
   - Route protection middleware
   - User-specific data access
   - Employer-only endpoints

4. **Best Practices**
   - Environment variables for sensitive data
   - CORS configuration for allowed origins
   - Error handling without exposing internals
   - Regular dependency updates

### Recommended Additional Security

- [ ] Rate limiting on API endpoints
- [ ] HTTPS in production
- [ ] CSRF protection
- [ ] Security headers (Helmet.js)
- [ ] Input sanitization library (express-validator)
- [ ] SQL injection prevention (already handled by Mongoose)

---

## 🧪 Testing

### Manual Testing Checklist

#### Authentication Flow
- [x] User registration (Job Seeker & Employer)
- [x] User login with valid credentials
- [x] Token persistence across sessions
- [x] Logout functionality
- [x] Protected route access

#### Job Seeker Features
- [x] Browse jobs with search/filters
- [x] View job details
- [x] Apply to jobs with resume upload
- [x] Save/unsave jobs
- [x] View application status
- [x] Update profile

#### Employer Features
- [x] Post new jobs
- [x] Edit existing jobs
- [x] Delete jobs
- [x] Toggle job open/closed status
- [x] View applicants
- [x] Update application status
- [x] View analytics dashboard

### Future Testing Plans
- [ ] Unit tests with Jest
- [ ] Integration tests for API endpoints
- [ ] E2E tests with Cypress/Playwright
- [ ] Performance testing
- [ ] Accessibility testing (WCAG compliance)

---

## 📱 Browser Support

| Browser | Minimum Version | Support Status |
|---------|----------------|----------------|
| **Chrome** | Latest 2 versions | ✅ Fully Supported |
| **Firefox** | Latest 2 versions | ✅ Fully Supported |
| **Safari** | Latest 2 versions | ✅ Fully Supported |
| **Edge** | Latest 2 versions | ✅ Fully Supported |
| **Opera** | Latest 2 versions | ✅ Fully Supported |
| **Mobile Safari** | iOS 12+ | ✅ Fully Supported |
| **Chrome Mobile** | Android 8+ | ✅ Fully Supported |

---

## 📚 Additional Resources

### Documentation Links

- 📘 [MongoDB Documentation](https://docs.mongodb.com/)
- 📗 [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- 📙 [React Documentation](https://react.dev/)
- 📕 [TailwindCSS Docs](https://tailwindcss.com/docs)
- 📓 [Vite Guide](https://vitejs.dev/guide/)
- 📔 [JWT Introduction](https://jwt.io/introduction)

### Helpful Tutorials

- [MERN Stack Tutorial](https://www.mongodb.com/languages/mern-stack-tutorial)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [TailwindCSS Components](https://tailwindui.com/)

---

## 🙏 Acknowledgments

- 🎓 **BTI College** - For providing the opportunity and resources
- 💻 **Open Source Community** - For amazing tools and libraries
- 📚 **Documentation Teams** - React, Express, MongoDB, and TailwindCSS
- 🎨 **Design Inspiration** - Modern job portal interfaces
- 👥 **Contributors** - Thanks to everyone who has contributed to this project
- 🌟 **Icons** - Lucide React icon library
- 🎭 **Animations** - Framer Motion team

### Built With

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

</div>

---

## 📞 Support & Contact

If you have any questions or need help with the project:

- 📧 **Email**: [ab0321054@gmail.com](mailto:ab0321054@gmail.com)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/Abhay-0103/Job-Portal-Project/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Abhay-0103/Job-Portal-Project/discussions)
- 💼 **LinkedIn**: [Abhay Singh](https://linkedin.com/in/abhay-singh-16a492329)

### Getting Help

1. **Check existing documentation** in this README
2. **Search closed issues** for similar problems
3. **Open a new issue** with detailed description
4. **Provide error logs** and steps to reproduce

---

## 📊 Project Status & Roadmap

![Development Status](https://img.shields.io/badge/Status-Active%20Development-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)
![Maintained](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge)

### Current Version: 1.0.0

**Release Date**: November 2025

### Roadmap

#### ✅ Completed (v1.0.0)
- Core authentication system
- Job posting and management
- Application submission and tracking
- User profiles with image upload
- Employer analytics dashboard
- Saved jobs functionality
- Responsive UI design
- RESTful API implementation

#### 🚧 In Progress (v1.1.0)
- Email notification system
- Advanced search and filters
- Performance optimizations
- Enhanced analytics

#### 📋 Planned (v2.0.0)
- Real-time chat feature
- Video interview integration
- AI-powered job recommendations
- Mobile application (React Native)
- Resume builder tool
- Company reviews and ratings
- Interview scheduling system

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

### 🔗 Connect & Collaborate

**Pull requests are welcome!** For major changes, please open an issue first to discuss what you would like to change.

---

### 📈 GitHub Stats

![GitHub stars](https://img.shields.io/github/stars/Abhay-0103/Job-Portal-Project?style=social)
![GitHub forks](https://img.shields.io/github/forks/Abhay-0103/Job-Portal-Project?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Abhay-0103/Job-Portal-Project?style=social)

---

Made with ❤️ by [Abhay Singh](https://github.com/Abhay-0103)

**© 2025 Job Portal - BTI College Project. All Rights Reserved.**

</div>
