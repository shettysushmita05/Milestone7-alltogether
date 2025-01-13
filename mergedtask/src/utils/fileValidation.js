// src/utils/fileValidation.js
export const validateFile = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'text/plain'];
    const maxSize = 10 * 1024 * 1024; // 10MB
  
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, PDF, and TXT files are allowed.');
    }
  
    if (file.size > maxSize) {
      throw new Error('File size exceeds 10MB limit.');
    }
  };