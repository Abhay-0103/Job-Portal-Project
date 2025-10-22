// Validation Functions
export const validateEmail = (email) => {
    if (!email.trim()) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    return "";
};

export const validatePassword = (password) => {
    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    if (!/(?=.*[A-Z])/.test(password))
        return "return Password must contain at least one Uppercase letter.";
    if (!/(?=.*[a-z])/.test(password))
        return "Password must contain at least one Lowercase letter.";
    if (!/(?=.*\d)/.test(password))
        return "Password must contain at least one Digit.";
    if (!/(?=.*[@$!%*?&])/.test(password))
        return "Password must contain at least one Special character.";
    if (!/(?=.*\d)/.test(password))
        return "Password must contain at least one Digit.";
    return "";
};

export const validateAvatar = (file) => {
    if (!file) return ""; // "optional field"

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
        return "Only JPEG, JPG and PNG files are allowed.";
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        return "Avatar size must be less than 5MB.";
    }

    return "";
};
