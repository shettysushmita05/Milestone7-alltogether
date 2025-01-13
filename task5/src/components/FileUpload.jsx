import React, { useState } from 'react';
import SingleFileUpload from './SingleFileUpload';
import MultipleFileUpload from './MultipleFileUpload';
import '../styles/FileUpload.css';

function FileUpload() {
  const [uploadType, setUploadType] = useState(null);

  return (
    <div className="file-upload-container">
      {!uploadType && (
        <div className="upload-options">
          <button onClick={() => setUploadType('single')}>Single File Upload</button>
          <button onClick={() => setUploadType('multiple')}>Multiple File Upload</button>
        </div>
      )}
      {uploadType === 'single' && <SingleFileUpload onBack={() => setUploadType(null)} />}
      {uploadType === 'multiple' && <MultipleFileUpload onBack={() => setUploadType(null)} />}
    </div>
  );
}

export default FileUpload;

