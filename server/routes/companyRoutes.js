import express from 'express'
import { 
  changeApplicationStatus, 
  changeJobVisibility, 
  getCompanyData, 
  getCompanyJobApplications, 
  getCompanyJobList, 
  loginCompany, 
  postJob, 
  registerCompany 
} from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompanyRoute } from '../middleware/authMiddleware.js'

const router = express.Router()

// Register Company
router.post('/register', upload.single('image'), registerCompany)

// Login Company
router.post('/login', loginCompany)

// Get Company Data
router.get('/company', protectCompanyRoute, getCompanyData)

// Post a Job
router.post('/post-job', protectCompanyRoute, postJob)

// Get Company Job Applicants
router.get('/applicants', protectCompanyRoute, getCompanyJobApplications)

// Get Company Posted Jobs List
router.get('/list-jobs', protectCompanyRoute, getCompanyJobList)

// Change Application Status
router.post('/change-status', protectCompanyRoute, changeApplicationStatus)

// Change Job Visibility
router.post('/change-visiblity', protectCompanyRoute, changeJobVisibility)

export default router