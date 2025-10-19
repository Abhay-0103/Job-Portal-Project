import jwt from 'jsonwebtoken'

// Protect routes that require authentication
export const protectRoute = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not authorized, no token' })
    }
    const token = authHeader.split(' ')[1]
    const decoded = jwt.decode(token)
    if (!decoded || !decoded.sub) {
      return res.status(401).json({ success: false, message: 'Invalid token' })
    }
    req.userId = decoded.sub
    req.body.userId = decoded.sub
    next()
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Not authorized, token failed' })
  }
}

// Protect company routes
export const protectCompanyRoute = (req, res, next) => {
  try {
    const token = req.headers.token

    if (!token) {
      console.log('❌ No company token provided')
      return res.status(401).json({ success: false, message: 'Not authorized, no token' })
    }

    // Verify JWT token with your secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    if (!decoded || !decoded.id) {
      console.log('❌ Invalid company token payload')
      return res.status(401).json({ success: false, message: 'Invalid token' })
    }

    console.log('✅ Company authenticated:', decoded.id)
    req.companyId = decoded.id
    req.body.companyId = decoded.id
    next()
  } catch (error) {
    console.error('❌ Company auth middleware error:', error.message)
    res.status(401).json({ success: false, message: 'Not authorized, token failed' })
  }
}