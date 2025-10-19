import 'dotenv/config'
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { clerkWebhooks } from "./controllers/webhooks.js"
import jobRoutes from "./routes/jobRoutes.js"
import companyRoutes from "./routes/companyRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

// CORS
app.use(cors())

// Trust proxy
app.set('trust proxy', 1)

// Webhook route FIRST - before JSON parsing
app.post("/webhooks/clerk", express.json({ limit: '10mb' }), clerkWebhooks)

// Body parsers
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// MongoDB Connection
let cachedDb = null

const connectDB = async () => {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('Using cached MongoDB connection')
    return cachedDb
  }

  try {
    const uri = process.env.MONGODB_URI
    
    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not defined')
    }

    console.log('Creating new MongoDB connection...')
    
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    }

    const conn = await mongoose.connect(uri, opts)
    cachedDb = conn
    console.log('✅ MongoDB connected successfully')
    console.log('📊 Database:', mongoose.connection.name)
    return cachedDb
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    cachedDb = null
    throw error
  }
}

// Initialize DB connection
connectDB().catch(err => {
  console.error('Failed to connect to MongoDB:', err)
})

// Health check
app.get("/", (req, res) => {
  res.json({ 
    status: 'ok',
    message: 'Job Portal API',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  })
})

app.get("/health", (req, res) => {
  res.json({ 
    ok: true, 
    mongodb: mongoose.connection.readyState === 1,
    env: process.env.NODE_ENV
  })
})

// API Routes
app.use("/api/jobs", jobRoutes)
app.use("/api/company", companyRoutes)
app.use("/api/users", userRoutes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: "Route not found",
    path: req.path,
    method: req.method
  })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err)
  res.status(500).json({ 
    success: false, 
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  })
})

// Export for Vercel
export default app

// Local server
const PORT = process.env.PORT || 5000
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`)
  })
}
