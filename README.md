<div align="center">

# 🎯 Job Portal

### A Modern Full-Stack Job Management Platform

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-5.1-000000.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.19-47A248.svg)](https://mongodb.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Job Portal** is a comprehensive full-stack MERN application designed to revolutionize the job search and recruitment process. Built as part of the BTI College Project, this platform seamlessly connects job seekers with employers, offering an intuitive interface and powerful features for modern hiring needs.

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

---

## ✨ Features

### For Job Seekers 👨‍💼
- 🔍 **Browse & Search** - Explore comprehensive job listings with advanced filters
- ⭐ **Save Jobs** - Bookmark favorite opportunities for quick access
- 📄 **Apply with Resume** - Submit applications with document uploads
- 📊 **Track Applications** - Monitor application status in real-time
- 👤 **Profile Management** - Create and customize professional profiles
- 🖼️ **Image Upload** - Add profile pictures and company logos
- 🔔 **Notifications** - Get instant feedback on actions

### For Employers 🏢
- ➕ **Post Jobs** - Create detailed job listings with rich descriptions
- ✏️ **Manage Listings** - Edit, delete, or close job postings
- 👥 **Review Applications** - Access and evaluate candidate applications
- 📈 **Analytics Dashboard** - Gain insights into recruitment metrics
- 🎯 **Applicant Tracking** - Organize and filter candidates efficiently
- 🏢 **Company Profile** - Showcase your organization professionally
- 🔄 **Job Status Control** - Toggle job postings between open/closed states

---

## 🛠 Tech Stack

### Backend 🔧
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | Latest | JavaScript runtime environment |
| **Express.js** | 5.1.0 | Web application framework |
| **MongoDB** | - | NoSQL database |
| **Mongoose** | 8.19.2 | MongoDB object modeling |
| **JWT** | 9.0.2 | Authentication & authorization |
| **Bcrypt.js** | 3.0.2 | Password hashing |
| **Multer** | 2.0.2 | File upload handling |
| **Cors** | 2.8.5 | Cross-origin resource sharing |
| **Dotenv** | 17.2.3 | Environment variable management |
| **Nodemon** | 3.1.10 | Development auto-restart |

### Frontend 💻
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI library |
| **Vite** | 7.1.7 | Build tool & dev server |
| **TailwindCSS** | 4.1.14 | Utility-first CSS framework |
| **React Router DOM** | 7.7.0 | Client-side routing |
| **Axios** | 1.10.0 | HTTP client |
| **Framer Motion** | 12.23.24 | Animation library |
| **Lucide React** | 0.546.0 | Icon library |
| **React Hot Toast** | 2.6.0 | Toast notifications |
| **Moment.js** | 2.30.1 | Date/time formatting |
| **ESLint** | 9.36.0 | Code linting |

### Architecture 🏗️
- **Pattern**: MVC (Model-View-Controller)
- **API**: RESTful API
- **Authentication**: JWT with HTTP-only cookies
- **State Management**: React Context API
- **Styling Approach**: Utility-first with TailwindCSS
- **File Structure**: Feature-based organization

---

## 📁 Project Structure

```
BTI-College-Project/
│
├── 📂 backend/                         # Backend API Server (Node.js + Express)
│   ├── 📄 .env                         # Environment variables (not in repo)
│   ├── 📄 .gitignore                   # Git ignore rules
│   ├── 📄 package.json                 # Backend dependencies
│   ├── 📄 server.js                    # Entry point - Express server setup
│   │
│   ├── 📂 config/                      # Configuration Files
│   │   └── 📄 db.js                    # MongoDB connection setup
│   │
│   ├── 📂 controllers/                 # Request Handlers & Business Logic
│   │   ├── 📄 analyticsController.js   # Analytics data management
│   │   ├── 📄 applicationController.js # Job application operations
│   │   ├── 📄 authController.js        # Register, login, authentication
│   │   ├── 📄 jobController.js         # Job CRUD operations
│   │   ├── 📄 savedJobController.js    # Saved jobs functionality
│   │   └── 📄 userController.js        # User profile management
│   │
│   ├── 📂 middlewares/                 # Custom Middleware Functions
│   │   ├── 📄 authMiddleware.js        # JWT verification & protection
│   │   └── 📄 uploadMiddleware.js      # Multer file upload config
│   │
│   ├── 📂 models/                      # Mongoose Data Models
│   │   ├── 📄 Analytics.js             # Analytics schema
│   │   ├── 📄 Application.js           # Job application schema
│   │   ├── 📄 Job.js                   # Job posting schema
│   │   ├── 📄 SavedJob.js              # Saved jobs schema
│   │   └── 📄 User.js                  # User account schema
│   │
│   ├── 📂 routes/                      # API Route Definitions
│   │   ├── 📄 analyticsRoutes.js       # /api/analytics endpoints
│   │   ├── 📄 applicationRoutes.js     # /api/applications endpoints
│   │   ├── 📄 authRoutes.js            # /api/auth endpoints
│   │   ├── 📄 jobRoutes.js             # /api/jobs endpoints
│   │   ├── 📄 savedJobsRoutes.js       # /api/save-jobs endpoints
│   │   └── 📄 userRoutes.js            # /api/user endpoints
│   │
│   └── 📂 uploads/                     # User Uploaded Files Storage
│
│
├── 📂 frontend/                        # Frontend Application (React + Vite)
│   ├── 📄 .gitignore                   # Git ignore rules
│   ├── 📄 eslint.config.js             # ESLint configuration
│   ├── 📄 index.html                   # HTML entry point
│   ├── 📄 package.json                 # Frontend dependencies
│   ├── 📄 vite.config.js               # Vite build configuration
│   ├── 📄 README.md                    # Frontend documentation
│   │
│   ├── 📂 public/                      # Static Public Assets
│   │
│   └── 📂 src/                         # Source Code
│       ├── 📄 App.jsx                  # Root application component
│       ├── 📄 main.jsx                 # React entry point
│       ├── 📄 index.css                # Global TailwindCSS styles
│       │
│       ├── 📂 assets/                  # Images, Logos, Media Files
│       │
│       ├── 📂 components/              # Reusable UI Components
│       │   ├── 📄 LoadingSpinner.jsx   # Loading state component
│       │   │
│       │   ├── 📂 Cards/               # Card Components
│       │   │   ├── 📄 ApplicantDashboardCard.jsx
│       │   │   ├── 📄 JobDashboardCard.jsx
│       │   │   └── 📄 JobPostingPreview.jsx
│       │   │
│       │   ├── 📂 Input/               # Form Input Components
│       │   │   ├── 📄 InputField.jsx   # Text input with validation
│       │   │   ├── 📄 SelectField.jsx  # Dropdown select field
│       │   │   └── 📄 TextareaField.jsx # Multiline text input
│       │   │
│       │   └── 📂 layout/              # Layout Components
│       │       ├── 📄 DashboardLayout.jsx   # Dashboard wrapper
│       │       └── 📄 ProfileDropdown.jsx   # User menu dropdown
│       │
│       ├── 📂 context/                 # React Context Providers
│       │   └── 📄 AuthContext.jsx      # Global auth state management
│       │
│       ├── 📂 pages/                   # Page Components (Routes)
│       │   │
│       │   ├── 📂 Auth/                # Authentication Pages
│       │   │   ├── 📄 Login.jsx        # Login page
│       │   │   └── 📄 SignUp.jsx       # Registration page
│       │   │
│       │   ├── 📂 Employer/            # Employer Dashboard Pages
│       │   │   ├── 📄 ApplicationViewer.jsx    # View applicants
│       │   │   ├── 📄 EditProfileDetails.jsx   # Edit company profile
│       │   │   ├── 📄 EmployerDashboard.jsx    # Main employer dashboard
│       │   │   ├── 📄 EmployerProfilePage.jsx  # View company profile
│       │   │   ├── 📄 JobPostingForm.jsx       # Create/edit job form
│       │   │   └── 📄 ManageJobs.jsx           # Job listings management
│       │   │
│       │   ├── 📂 JobSeeker/           # Job Seeker Pages
│       │   │   ├── 📄 JobDetails.jsx           # Individual job view
│       │   │   ├── 📄 JobSeekerDashboard.jsx   # Main job seeker dashboard
│       │   │   ├── 📄 SavedJobs.jsx            # Bookmarked jobs
│       │   │   ├── 📄 UserProfile.jsx          # User profile page
│       │   │   └── 📂 components/              # Job seeker specific components
│       │   │
│       │   └── 📂 LandingPage/         # Public Landing Page
│       │       ├── 📄 LandindPage.jsx  # Main landing page
│       │       └── 📂 components/      # Landing page sections
│       │           ├── 📄 Analytics.jsx    # Statistics section
│       │           ├── 📄 Features.jsx     # Features showcase
│       │           ├── 📄 Footer.jsx       # Footer component
│       │           ├── 📄 Header.jsx       # Navigation header
│       │           └── 📄 Hero.jsx         # Hero section
│       │
│       ├── 📂 routes/                  # Route Configuration
│       │   └── 📄 ProtectedRoute.jsx   # Auth-protected route wrapper
│       │
│       └── 📂 utils/                   # Utility Functions & Helpers
│           ├── 📄 apiPaths.js          # API endpoint constants
│           ├── 📄 axiosInstance.js     # Configured Axios instance
│           ├── 📄 data.js              # Static data & constants
│           ├── 📄 helper.js            # Helper functions
│           └── 📄 uploadImage.js       # Image upload utilities
│
└── 📄 README.md                        # Project documentation
```

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
git clone https://github.com/Abhay-0103/BTI-College-Project.git
cd BTI-College-Project
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

- [ ] Real-time chat between employers and job seekers
- [ ] Email notifications for application updates
- [ ] Advanced search filters and sorting
- [ ] Resume builder tool
- [ ] Video interview integration
- [ ] Mobile application (React Native)
- [ ] AI-powered job recommendations
- [ ] Salary insights and comparison
- [ ] Company reviews and ratings
- [ ] Interview scheduling system

---

## 🐛 Known Issues

- None at the moment. Report issues [here](https://github.com/Abhay-0103/BTI-College-Project/issues)

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
   git clone https://github.com/YOUR_USERNAME/BTI-College-Project.git
   cd BTI-College-Project
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

**Repository:** [BTI-College-Project](https://github.com/Abhay-0103/BTI-College-Project)

</div>

---

## 🙏 Acknowledgments

- 🎓 **BTI College** - For providing the opportunity and resources.
- 💻 **Open Source Community** - For amazing tools and libraries.
- 📚 **Documentation** - React, Express, MongoDB, and TailwindCSS teams.
- 🎨 **Design Inspiration** - Modern job portal interfaces.
- 👥 **Contributors** - Thanks to everyone who has contributed to this project.

### Built With

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## 📞 Support

If you have any questions or need help with the project:

- 📧 **Email**: [Abhay Singh](ab0321054@gmail.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/Abhay-0103/BTI-College-Project/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Abhay-0103/BTI-College-Project/discussions)

---

## 📊 Project Status

![Development Status](https://img.shields.io/badge/Status-Active%20Development-success?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/Abhay-0103/BTI-College-Project?style=for-the-badge)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

### 🔗 Connect & Collaborate

**Pull requests are welcome!** For major changes, please open an issue first to discuss what you would like to change.

---

Made with ❤️ by [Abhay Singh](https://github.com/Abhay-0103)

**© 2025 Job Portal - BTI College Project. All Rights Reserved.**

</div>
