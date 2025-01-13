// src/components/FileUploader/FileUploader.jsx
import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload } from 'lucide-react';
import './FileUploader.css';

const FileUploader = () => {
  const [singleFile, setSingleFile] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateFile = (file) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'text/plain'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, PDF, and TXT files are allowed.');
    }

    if (file.size > maxSize) {
      throw new Error('File size exceeds 10MB limit.');
    }
  };

  const getPresignedUrl = async (file) => {
    try {
      const response = await fetch('http://your-backend-url/generate-presigned-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          bucket: process.env.REACT_APP_S3_BUCKET,
          region: process.env.REACT_APP_AWS_REGION
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get pre-signed URL');
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Error getting pre-signed URL: ${error.message}`);
    }
  };

  const uploadFileWithPresignedUrl = async (file, presignedUrl) => {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      return response;
    } catch (error) {
      throw new Error(`Upload error: ${error.message}`);
    }
  };

  const handleSingleUpload = async (e) => {
    e.preventDefault();
    if (!singleFile) return;

    try {
      validateFile(singleFile);
      setUploadProgress(0);
      setError('');

      const { url } = await getPresignedUrl(singleFile);
      
      // Start upload
      setUploadProgress(10);
      await uploadFileWithPresignedUrl(singleFile, url);
      
      setMessage('File uploaded successfully!');
      setUploadProgress(100);
      setSingleFile(null);
    } catch (err) {
      setError(err.message);
      setUploadProgress(0);
    }
  };

  const handleMultipleUpload = async (e) => {
    e.preventDefault();
    if (multipleFiles.length === 0) return;

    try {
      setUploadProgress(0);
      setError('');
      let completed = 0;

      for (const file of multipleFiles) {
        validateFile(file);
        const { url } = await getPresignedUrl(file);
        await uploadFileWithPresignedUrl(file, url);
        
        completed++;
        setUploadProgress((completed / multipleFiles.length) * 100);
      }

      setMessage('All files uploaded successfully!');
      setMultipleFiles([]);
    } catch (err) {
      setError(err.message);
      setUploadProgress(0);
    }
  };

  return (
    <div className="file-uploader">
      <h1 className="text-2xl font-bold mb-6">S3 File Uploader</h1>

      {/* Single File Upload Section */}
      <div className="upload-section">
        <h2 className="text-xl font-semibold mb-4">Single File Upload</h2>
        <form onSubmit={handleSingleUpload} className="space-y-4">
          <div className="file-input-wrapper">
            <input
              type="file"
              onChange={(e) => setSingleFile(e.target.files[0])}
              className="file-input"
            />
          </div>
          <Button 
            type="submit" 
            disabled={!singleFile}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload File
          </Button>
        </form>
      </div>

      {/* Multiple Files Upload Section */}
      <div className="upload-section">
        <h2 className="text-xl font-semibold mb-4">Multiple Files Upload</h2>
        <form onSubmit={handleMultipleUpload} className="space-y-4">
          <div className="file-input-wrapper">
            <input
              type="file"
              multiple
              onChange={(e) => setMultipleFiles(Array.from(e.target.files))}
              className="file-input"
            />
          </div>
          <Button 
            type="submit" 
            disabled={multipleFiles.length === 0}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload Files
          </Button>
        </form>
      </div>

      {/* Progress Bar */}
      {uploadProgress > 0 && (
        <div className="progress-container">
          <Progress value={uploadProgress} className="w-full" />
          <p className="progress-text">
            Upload Progress: {Math.round(uploadProgress)}%
          </p>
        </div>
      )}

      {/* Messages */}
      {message && (
        <Alert className="message success">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert className="message error">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default FileUploader;