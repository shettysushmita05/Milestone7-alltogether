import React, { useState } from 'react';
import { uploadFileToS3 } from '../utils/s3Utils';
import ProgressBar from './ProgressBar';

function MultipleFileUpload({ onBack }) {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(
      file => file.size <= 10 * 1024 * 1024
    );
    setFiles(selectedFiles);
    setMessage(selectedFiles.length === e.target.files.length
      ? ''
      : 'Some files were skipped because they exceed 10MB.');
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setMessage('Please select files to upload.');
      return;
    }

    setMessage('');
    setProgress({});
    
    for (const file of files) {
      try {
        await uploadFileToS3(file, (progress) => {
          setProgress(prev => ({ ...prev, [file.name]: progress }));
        });
      } catch (error) {
        setMessage(prev => `${prev}Error uploading ${file.name}: ${error.message}\n`);
      }
    }

    if (!message) {
      setMessage('All files uploaded successfully!');
    }
    setFiles([]);
  };

  return (
    <div className="upload-section">
      <h2>Multiple File Upload</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={files.length === 0}>
        Upload
      </button>
      <button onClick={onBack}>Back</button>
      {files.map(file => (
        <div key={file.name}>
          <p>{file.name}</p>
          <ProgressBar progress={progress[file.name] || 0} />
        </div>
      ))}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default MultipleFileUpload;

