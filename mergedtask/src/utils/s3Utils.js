// src/utils/s3Utils.js
export const getSignedUrl = async (fileName, fileType) => {
  try {
    // In production, this should make an API call to your backend
    const response = await fetch('/api/get-signed-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName,
        fileType,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get signed URL');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Error getting signed URL: ' + error.message);
  }
};