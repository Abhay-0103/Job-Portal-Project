// global imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// local imports
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: "*", // Allow all origins (adjust as needed for security)
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
// app.use("/api/auth", authRoutes);

// serve uploads folder 
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), {}));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
