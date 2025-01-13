// import React, { useState } from 'react';
// // import { uploadFileToS3 } from '../utils/s3';
// import { uploadFileToS3 } from '../../utils/s3';

// function MultipleFileUpload() {
//   const [files, setFiles] = useState([]);
//   const [progress, setProgress] = useState({});
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     if (e.target.files) {
//       setFiles(Array.from(e.target.files));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (files.length === 0) {
//       setMessage('Please select at least one file');
//       return;
//     }

//     setMessage('');
//     const uploadPromises = files.map(file => 
//       uploadFileToS3(file, (p) => setProgress(prev => ({ ...prev, [file.name]: p })))
//     );

//     try {
//       await Promise.all(uploadPromises);
//       setMessage('All files uploaded successfully');
//     } catch (error) {
//       setMessage(`Error uploading files: ${error.message}`);
//     }

//     setProgress({});
//     setFiles([]);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           multiple
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         disabled={files.length === 0}
//       >
//         Upload
//       </button>
//       {Object.entries(progress).map(([fileName, p]) => (
//         <div key={fileName} className="space-y-1">
//           <p className="text-sm">{fileName}</p>
//           <div className="w-full bg-gray-200 rounded-full h-2.5">
//             <div
//               className="bg-blue-600 h-2.5 rounded-full"
//               style={{ width: `${p}%` }}
//             ></div>
//           </div>
//         </div>
//       ))}
//       {message && <p className="text-sm">{message}</p>}
//     </form>
//   );
// }

// export default MultipleFileUpload;

