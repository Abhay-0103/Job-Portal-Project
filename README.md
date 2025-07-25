# 💼 Job Portal Project

A **MERN stack job portal** where users can browse jobs, apply for jobs, and recruiters can post and manage listings. Includes full **authentication using Clerk**, error tracking via **Sentry**, and a modern responsive UI.


## live Preview :- [https://job-portal-client-umber.vercel.app/](https://job-portal-client-two-sand.vercel.app/)


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
├── client/                 # Frontend (React + Vite)
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── config/
│   └── db.js               # MongoDB connection setup
├── controllers/
│   └── jobController.js
├── models/
│   └── Job.js
├── routes/
│   └── jobRoutes.js
├── index.js                # Express server entry
├── .env.example            # Sample environment file
└── README.md

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
