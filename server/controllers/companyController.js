import Company from "../models/Company.js"
import Job from "../models/Job.js"
import JobApplication from "../models/JobApplication.js"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import { generateToken } from "../utils/generateToken.js"

// Register Company
export const registerCompany = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const imageFile = req.file

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields required' })
    }

    // Check if company already exists
    const existingCompany = await Company.findOne({ email })
    if (existingCompany) {
      return res.status(400).json({ success: false, message: 'Company already exists' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Upload image to cloudinary
    let imageUrl = ''
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        folder: 'companies'
      })
      imageUrl = imageUpload.secure_url
    }

    // Create company
    const company = await Company.create({
      name,
      email,
      password: hashedPassword,
      image: imageUrl
    })

    // Generate token
    const token = generateToken(company._id)

    res.status(201).json({
      success: true,
      message: 'Company registered successfully',
      token,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image
      }
    })
  } catch (error) {
    console.error('registerCompany error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Login Company
export const loginCompany = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' })
    }

    // Find company
    const company = await Company.findOne({ email })
    if (!company) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, company.password)
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    // Generate token
    const token = generateToken(company._id)

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image
      }
    })
  } catch (error) {
    console.error('loginCompany error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Get Company Data
export const getCompanyData = async (req, res) => {
  try {
    const companyId = req.body.companyId || req.companyId

    if (!companyId) {
      return res.status(400).json({ success: false, message: 'Company ID required' })
    }

    const company = await Company.findById(companyId).select('-password').lean()

    if (!company) {
      return res.status(404).json({ success: false, message: 'Company not found' })
    }

    res.status(200).json({ success: true, company })
  } catch (error) {
    console.error('getCompanyData error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Post a Job
export const postJob = async (req, res) => {
  try {
    const companyId = req.body.companyId || req.companyId
    const { title, description, location, salary, level, category } = req.body

    if (!companyId) {
      return res.status(400).json({ success: false, message: 'Company ID required' })
    }

    if (!title || !description || !location || !salary || !level) {
      return res.status(400).json({ success: false, message: 'All fields required' })
    }

    const job = await Job.create({
      title,
      description,
      location,
      salary: Number(salary),
      level,
      category: category || 'Other',
      companyId,
      visible: true
    })

    res.status(201).json({ success: true, message: 'Job posted successfully', job })
  } catch (error) {
    console.error('postJob error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Get Company Job Applications
export const getCompanyJobApplications = async (req, res) => {
  try {
    const companyId = req.body.companyId || req.companyId

    if (!companyId) {
      return res.status(400).json({ success: false, message: 'Company ID required' })
    }

    // Get all jobs by this company
    const jobs = await Job.find({ companyId }).select('_id')
    const jobIds = jobs.map(job => job._id)

    // Get all applications for these jobs
    const applications = await JobApplication.find({ jobId: { $in: jobIds } })
      .populate({ path: 'jobId' })
      .populate({ path: 'userId', select: '-password' })
      .sort({ date: -1 })
      .lean()

    res.status(200).json({ success: true, applications })
  } catch (error) {
    console.error('getCompanyJobApplications error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Get Company Posted Jobs List
export const getCompanyJobList = async (req, res) => {
  try {
    const companyId = req.body.companyId || req.companyId

    if (!companyId) {
      return res.status(400).json({ success: false, message: 'Company ID required' })
    }

    const jobs = await Job.find({ companyId })
      .sort({ date: -1 })
      .lean()

    res.status(200).json({ success: true, jobs })
  } catch (error) {
    console.error('getCompanyJobList error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Change Application Status
export const changeApplicationStatus = async (req, res) => {
  try {
    const { applicationId, status } = req.body
    const companyId = req.body.companyId || req.companyId

    if (!companyId) {
      return res.status(400).json({ success: false, message: 'Company ID required' })
    }

    if (!applicationId || !status) {
      return res.status(400).json({ success: false, message: 'Application ID and status required' })
    }

    // Find application
    const application = await JobApplication.findById(applicationId).populate('jobId')

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' })
    }

    // Verify the job belongs to this company
    if (application.jobId.companyId.toString() !== companyId.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' })
    }

    // Update status
    application.status = status
    await application.save()

    res.status(200).json({ success: true, message: 'Application status updated' })
  } catch (error) {
    console.error('changeApplicationStatus error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Change Job Visibility
export const changeJobVisibility = async (req, res) => {
  try {
    const { jobId, visible } = req.body
    const companyId = req.body.companyId || req.companyId

    if (!companyId) {
      return res.status(400).json({ success: false, message: 'Company ID required' })
    }

    if (!jobId || visible === undefined) {
      return res.status(400).json({ success: false, message: 'Job ID and visibility required' })
    }

    // Find job
    const job = await Job.findById(jobId)

    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' })
    }

    // Verify the job belongs to this company
    if (job.companyId.toString() !== companyId.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized' })
    }

    // Update visibility
    job.visible = visible
    await job.save()

    res.status(200).json({ success: true, message: 'Job visibility updated' })
  } catch (error) {
    console.error('changeJobVisibility error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}