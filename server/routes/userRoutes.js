import express from 'express'
import {
  applyForJob,
  getUserData,
  getUserApplications,
  updateUserResume,
} from '../controllers/userController.js'
import { protectRoute } from '../middleware/authMiddleware.js'
import upload from '../config/multer.js'

const router = express.Router()

// Get User Data - support GET and POST
router.get('/user', protectRoute, getUserData)
router.post('/user', protectRoute, getUserData)

// Apply for a Job
router.post('/apply', protectRoute, applyForJob)

// Get User Applications
router.get('/applications', protectRoute, getUserApplications)

// Update User Resume
router.post('/update-resume', protectRoute, upload.single('resume'), updateUserResume)

export default router