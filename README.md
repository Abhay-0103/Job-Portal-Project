
<div align="center">
 <h1>Job Portal</h1>

A **MERN stack job portal** where users can browse jobs, apply for jobs, and recruiters can post and manage listings. Includes full **authentication using Clerk**, error tracking via **Sentry**, and a modern responsive UI with Tailwind CSS.


## Live Preview :- https://job-portal-client-two-sand.vercel.app/

</div>


## 🚀 Features

- 👨‍💼 Job seeker and recruiter flows
- 🔐 Authentication using Clerk
- 📂 Post, apply, and manage job listings
- ⚙️ Real-time updates using React Context
- 📊 Error tracking with Sentry
- 🖥️ Responsive, modern UI (React + Tailwind CSS)
- 🌐 RESTful API using Express.js
- 💾 MongoDB for data storage

---

## 🛠 Tech Stack

**Frontend:**
- React.js (with Vite)
- Tailwind CSS
- React Router
- Axios
- Clerk for Auth

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv for env config
- CORS + Middleware

**Other Tools:**
- Sentry (Error Monitoring)
- Vercel (Frontend deployment)
- Render / Railway (Backend deployment)

---

## 📂 Folder Structure

```
Job-Portal-Project/
├── client/                     # Frontend
│   ├── public/                 # Static assets served directly
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── assets/             # Images, fonts, icons
│   │   │   ├── images/
│   │   │   │   └── logo.png
│   │   │   └── fonts/
│   │   │
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── JobCard.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── contexts/           # React Contexts for global state
│   │   │   ├── AuthContext.jsx
│   │   │   ├── UserContext.jsx
│   │   │   └── JobContext.jsx
│   │   │
│   │   ├── hooks/              # Custom React hooks
│   │   │   ├── useFetch.js
│   │   │   ├── useAuth.js
│   │   │   └── useDebounce.js
│   │   │
│   │   ├── pages/              # Route-based pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── JobDetails.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── services/           # API calls and utilities
│   │   │   ├── api.js          # Axios or fetch wrapper
│   │   │   └── authService.js  # Login/Register API calls
│   │   │
│   │   ├── store/              # Optional: Redux or Zustand store
│   │   │   └── index.js
│   │   │
│   │   ├── styles/             # Tailwind + global CSS
│   │   │   ├── tailwind.css
│   │   │   └── global.css
│   │   │
│   │   ├── App.jsx             # Main React App
│   │   └── main.jsx            # Entry point
│   │
│   ├── .env                    # Frontend environment variables
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend
│   ├── config/                 # Configuration files
│   │   ├── db.js               # MongoDB connection
│   │   ├── serverConfig.js     # Server port, CORS, etc.
│   │   └── logger.js           # Winston or any logging setup
│   │
│   ├── controllers/            # Route handlers
│   │   ├── authController.js   # Login, Register
│   │   ├── jobController.js    # CRUD jobs
│   │   ├── userController.js   # Profile, applications
│   │   └── applicationController.js # Apply/Manage applications
│   │
│   ├── middleware/             # Custom middlewares
│   │   ├── authMiddleware.js   # Auth check
│   │   ├── errorMiddleware.js  # Central error handling
│   │   └── rateLimiter.js      # Optional: security
│   │
│   ├── models/                 # Mongoose schemas
│   │   ├── User.js
│   │   ├── Job.js
│   │   └── Application.js
│   │
│   ├── routes/                 # Express routes
│   │   ├── authRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── userRoutes.js
│   │   └── applicationRoutes.js
│   │
│   ├── services/               # Business logic
│   │   ├── authService.js
│   │   ├── jobService.js
│   │   └── userService.js
│   │
│   ├── utils/                  # Utilities/helper functions
│   │   ├── tokenGenerator.js
│   │   └── emailSender.js
│   │
│   ├── .env                    # Backend environment variables
│   ├── app.js                  # Express app setup
│   └── server.js               # Server start
│
├── .gitignore
├── README.md
└── package.json                # Root dependencies and scripts

````

---

## ⚙️ Environment Variables

Create a `.env` file at the root with the following:

```bash
MONGODB_URI=your_mongo_db_connection_string
PORT=5000
CLERK_SECRET_KEY=your_clerk_backend_key
CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key
````

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js ≥ 18.x
* MongoDB Atlas account or local instance
* Clerk account ([https://clerk.dev](https://clerk.dev))
* Vercel account (for deployment)

---

### 📦 Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Abhay-0103/Job-Portal-Project.git
cd Job-Portal-Project
```

#### 2. Install backend dependencies

```bash
npm install
```

#### 3. Setup environment variables

```bash
cp .env.example .env
# Then fill in the actual values
```

#### 4. Start the backend server

```bash
npm run dev
```

#### 5. Set up the frontend

```bash
cd client
npm install
npm run dev
```

## ☁️ Deployment

### 🔹 Frontend - Vercel

1. Push the `/client` folder to a separate GitHub repo or subfolder
2. Connect to Vercel → Select React + Vite → Add env variables
3. Set `VITE_BACKEND_URL=https://your-backend-url.com`

### 🔹 Backend - Render or Railway

1. Connect your GitHub repo
2. Add env variables (`MONGODB_URI`, `PORT`, `CLERK_SECRET_KEY`)
3. Deploy server

---

## 🧠 Known Issues

* Error messages not always descriptive (improve validations)
* Recruiter login is simple (can be upgraded to Clerk multi-role support)
* Job filters can be improved using fuzzy search

---

## ✨ Future Enhancements

* Add pagination and filtering to job listings
* Role-based dashboards (admin, recruiter, seeker)
* Email notifications (SendGrid or Resend)
* Resume upload (Cloudinary or Firebase)
* Job recommendations using AI

---

## 🙌 Acknowledgements

* [Clerk.dev](https://clerk.dev) for seamless auth
* [Sentry.io](https://sentry.io) for error tracking
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [TailwindCSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)

---

## 👨‍💻 Author

**Abhay Singh**
📧 [abhay0103dev@gmail.com](mailto:abhay0103dev@gmail.com)
🔗 [GitHub](https://github.com/Abhay-0103) | [LinkedIn](https://linkedin.com/in/abhay0103)

---

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

```bash
git clone https://github.com/Abhay-0103/Job-Portal-Project
cd Job-Portal-Project
```
