import User from "../models/User.js"
import JobApplication from "../models/JobApplication.js"
import Job from "../models/Job.js"
import cloudinary from "../config/cloudinary.js"

// Get User Data
export const getUserData = async (req, res) => {
  try {
    const userId = req.userId || req.body.userId
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID required' })
    }

    let user = await User.findById(userId).select('-password').lean()

    // If user doesn't exist yet (webhook failed), fetch from Clerk and create
    if (!user) {
      try {
        if (!process.env.CLERK_SECRET_KEY) {
          throw new Error('CLERK_SECRET_KEY not configured')
        }

        const resp = await fetch(`https://api.clerk.com/v1/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`
          }
        })

        if (!resp.ok) {
          throw new Error(`Clerk fetch failed: ${resp.status}`)
        }

        const data = await resp.json()
        const newUser = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || '',
          name: [data.first_name, data.last_name].filter(Boolean).join(' ') || 'User',
          image: data.image_url || '',
          resume: ''
        }

        await User.create(newUser)
        user = newUser
        console.log('✅ User auto-created from Clerk:', newUser.email)
      } catch (e) {
        console.error('Auto-create user failed:', e.message)
        return res.status(404).json({ success: false, message: 'User not found' })
      }
    }

    return res.status(200).json({ success: true, user })
  } catch (error) {
    console.error('getUserData error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Apply for a Job
export const applyForJob = async (req, res) => {
  try {
    const userId = req.body.userId || req.userId
    const { jobId } = req.body

    if (!userId || !jobId) {
      return res.status(400).json({ success: false, message: 'User ID and Job ID required' })
    }

    const job = await Job.findById(jobId)
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' })
    }

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    if (!user.resume) {
      return res.status(400).json({ success: false, message: 'Please upload your resume first' })
    }

    const existing = await JobApplication.findOne({ userId, jobId })
    if (existing) {
      return res.status(400).json({ success: false, message: 'Already applied to this job' })
    }

    const newApplication = new JobApplication({
      userId,
      jobId,
      companyId: job.companyId,
      status: 'pending',
      date: new Date()
    })
    await newApplication.save()

    res.status(201).json({ success: true, message: 'Applied successfully' })
  } catch (error) {
    console.error('applyForJob error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Get User Applied Applications
export const getUserApplications = async (req, res) => {
  try {
    const userId = req.body.userId || req.userId
    if (!userId) return res.status(400).json({ success: false, message: 'User ID required' })

    const applications = await JobApplication.find({ userId })
      .populate({ path: 'jobId', populate: { path: 'companyId', select: '-password' } })
      .sort({ date: -1 })
      .lean()

    res.status(200).json({ success: true, applications })
  } catch (error) {
    console.error('getUserApplications error:', error)
    res.status(500).json({ success: false, message: error.message })
  }
}

// Update User Resume
export const updateUserResume = async (req, res) => {
  try {
    const userId = req.body.userId || req.userId
    const file = req.file

    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID required' })
    }

    if (!file) {
      return res.status(400).json({ success: false, message: 'Resume file required (field name: resume)' })
    }

    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    // Prefer buffer upload (memoryStorage)
    let uploadRes
    if (file.buffer) {
      const b64 = file.buffer.toString('base64')
      const dataUri = `data:${file.mimetype};base64,${b64}`
      uploadRes = await cloudinary.uploader.upload(dataUri, {
        resource_type: 'auto',
        folder: 'resumes'
      })
    } else if (file.path) {
      // Fallback if using disk storage
      uploadRes = await cloudinary.uploader.upload(file.path, {
        resource_type: 'auto',
        folder: 'resumes'
      })
    } else {
      return res.status(400).json({ success: false, message: 'Invalid file upload' })
    }

    user.resume = uploadRes.secure_url
    await user.save()

    return res.status(200).json({
      success: true,
      message: 'Resume updated successfully',
      resumeUrl: uploadRes.secure_url
    })
  } catch (error) {
    console.error('updateUserResume error:', error)
    return res.status(500).json({ success: false, message: error.message })
  }
}