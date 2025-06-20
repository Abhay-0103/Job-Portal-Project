# 🧑‍💼 Job Portal — MERN Stack Project

A full-featured job portal built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows recruiters to post jobs and job seekers to apply.

---

## 🔗 Live Demo

- 🌐 Frontend: 

---

## ⚙️ Tech Stack

| Technology      | Description                      |
|-----------------|----------------------------------|
| React + Vite    | Frontend                         |
| TailwindCSS     | Styling                          |
| Node.js + Express | Backend API                   |
| MongoDB Atlas   | Cloud Database                   |
| Clerk Auth      | Authentication & Authorization   |
| Axios           | API Communication                |
| Sentry          | Error Monitoring (Frontend & Backend) |

---

## 📁 Folder Structure

Job-Portal/
├── client/ # React Frontend (Vite)
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/ # All backend logic
├── middleware/ # Authentication middleware
├── models/ # Mongoose schemas
├── routes/ # Express routes
├── server.js # Server entry point
├── .env # Environment variables
└── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 Getting Started

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/Abhay-0103/Job-Portal-Project.git
cd Job-Portal
🔐 2. Setup Backend Environment Variables
Create a .env file in the root folder:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
Get your Clerk keys from: https://dashboard.clerk.com
Get MongoDB URI from: https://cloud.mongodb.com

📦 3. Install Backend Dependencies
bash
Copy
Edit
npm install
▶️ 4. Run the Backend Server
bash
Copy
Edit
npm start
Backend will start on: http://localhost:5000

💻 5. Setup Frontend (React + Vite)
bash
Copy
Edit
cd client
npm install
⚙️ 6. Setup Frontend Environment Variables
Create a .env file inside /client folder:

env
Copy
Edit
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
🚀 7. Run the Frontend
bash
Copy
Edit
npm run dev
Frontend will run on: http://localhost:5173

🔐 Authentication Flow
Clerk handles user authentication (sign-up/sign-in).

Backend validates Clerk session tokens using middleware.

Users can:

View jobs

Apply for jobs (must be logged in)

View applications

Recruiters can:

Login and post jobs

Manage applicants and job listings

🧑‍💻 Key Features
For Job Seekers:
Browse all jobs

Apply for jobs

View their applications

For Recruiters:
Login securely

Post new job listings

View/manage posted jobs

Track applicants for each job

🧪 Error Monitoring
Integrated with Sentry to track runtime errors and improve debugging experience.

🧹 Deployment Notes
✅ Vercel (Frontend):
Deployed via Vercel

Set the following environment variables in Vercel:

VITE_BACKEND_URL

VITE_CLERK_PUBLISHABLE_KEY

✅ MongoDB Atlas:
Whitelist your IP as 0.0.0.0/0 to allow access from Vercel.


💡 Contributing
Pull requests and suggestions are welcome!
