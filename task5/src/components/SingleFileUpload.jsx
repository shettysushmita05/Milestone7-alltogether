import React, { useState } from 'react';
import { uploadFileToS3 } from '../utils/s3Utils';
import ProgressBar from './ProgressBar';

function SingleFileUpload({ onBack }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
      setMessage('');
    } else {
      setFile(null);
      setMessage('Please select a file smaller than 10MB.');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    try {
      await uploadFileToS3(file, (progress) => setProgress(progress));
      setMessage('File uploaded successfully!');
      setFile(null);
      setProgress(0);
    } catch (error) {
      setMessage(`Error uploading file: ${error.message}`);
    }
  };

  return (
    <div className="upload-section">
      <h2>Single File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
      <button onClick={onBack}>Back</button>
      {progress > 0 && <ProgressBar progress={progress} />}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default SingleFileUpload;

