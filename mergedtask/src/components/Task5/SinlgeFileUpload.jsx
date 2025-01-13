// import React, { useState } from 'react';
// import { uploadFileToS3 } from '../../utils/s3';

// function SingleFileUpload() {
//   const [file, setFile] = useState(null);
//   const [progress, setProgress] = useState(0);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setMessage('Please select a file');
//       return;
//     }

//     try {
//       await uploadFileToS3(file, setProgress);
//       setMessage('File uploaded successfully');
//     } catch (error) {
//       setMessage(`Error uploading file: ${error.message}`);
//     }

//     setProgress(0);
//     setFile(null);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="border border-gray-300 rounded px-3 py-2 w-full"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         disabled={!file}
//       >
//         Upload
//       </button>
//       {progress > 0 && (
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div
//             className="bg-blue-600 h-2.5 rounded-full"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       )}
//       {message && <p className="text-sm">{message}</p>}
//     </form>
//   );
// }

// export default SingleFileUpload;

