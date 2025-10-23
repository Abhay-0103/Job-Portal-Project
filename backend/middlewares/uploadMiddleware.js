const multer = require('multer');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`) // Specify the file name
    },
});

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(new Error('Invalid file type. Only JPEG, PNG, JPG, and PDF are allowed.'), false);
    }   
};

// Initialize multer with the defined storage and file filter
const upload = multer({ storage, fileFilter });

module.exports = upload;