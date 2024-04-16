import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../CompenentsCSS/PDFPopup.css"; // Make sure this path is correct

interface PDFPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDFPopup: React.FC<PDFPopupProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate(); // Hook to get access to the navigate function

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await fetch('http://localhost:8080/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Server processing result:", result);
          alert('File processed successfully');
          navigate('/BillAnalysis'); // Redirect to the /BillAnalysis route
        } else {
          const errorText = await response.text();
          throw new Error(errorText);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error uploading file');
      }
    } else {
      alert('No file selected');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="upload-area">
          <input
            id="fileInput"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="fileInput" className="upload-icon">
            {<svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M53.6459 47.5654C53.5692 47.4674 53.4712 47.3881 53.3592 47.3336C53.2473 47.279 53.1245 47.2507 53 47.2507C52.8754 47.2507 52.7526 47.279 52.6407 47.3336C52.5287 47.3881 52.4307 47.4674 52.354 47.5654L40.8696 62.0952C40.7749 62.2161 40.7162 62.3612 40.7001 62.5139C40.684 62.6666 40.7112 62.8208 40.7786 62.9588C40.8459 63.0968 40.9508 63.213 41.0811 63.2942C41.2115 63.3754 41.362 63.4183 41.5156 63.418H49.0932V88.2734C49.0932 88.7246 49.4624 89.0938 49.9135 89.0938H56.0659C56.517 89.0938 56.8862 88.7246 56.8862 88.2734V63.4282H64.4843C65.1713 63.4282 65.5507 62.6387 65.1303 62.1055L53.6459 47.5654Z" fill="black"/>
<path d="M83.7002 38.1011C79.0039 25.7144 67.0376 16.9062 53.0205 16.9062C39.0034 16.9062 27.0371 25.7041 22.3408 38.0908C13.5532 40.3979 7.0625 48.4062 7.0625 57.9219C7.0625 69.2524 16.2397 78.4297 27.5601 78.4297H31.6719C32.123 78.4297 32.4922 78.0605 32.4922 77.6094V71.457C32.4922 71.0059 32.123 70.6367 31.6719 70.6367H27.5601C24.1045 70.6367 20.854 69.2627 18.4341 66.771C16.0244 64.2896 14.7427 60.9468 14.8555 57.481C14.9478 54.7739 15.8706 52.231 17.542 50.0879C19.2544 47.9038 21.6538 46.3145 24.3198 45.6069L28.2061 44.5918L29.6313 40.8389C30.5132 38.501 31.7437 36.3169 33.292 34.3379C34.8206 32.3764 36.6312 30.6521 38.665 29.2212C42.8794 26.2578 47.8423 24.689 53.0205 24.689C58.1987 24.689 63.1616 26.2578 67.376 29.2212C69.4165 30.6567 71.2212 32.3794 72.749 34.3379C74.2974 36.3169 75.5278 38.5112 76.4097 40.8389L77.8247 44.5815L81.7007 45.6069C87.2583 47.104 91.1445 52.1592 91.1445 57.9219C91.1445 61.3159 89.8218 64.5151 87.4224 66.9146C86.2457 68.0981 84.8459 69.0365 83.304 69.6755C81.7622 70.3144 80.1089 70.6411 78.4399 70.6367H74.3281C73.877 70.6367 73.5078 71.0059 73.5078 71.457V77.6094C73.5078 78.0605 73.877 78.4297 74.3281 78.4297H78.4399C89.7603 78.4297 98.9375 69.2524 98.9375 57.9219C98.9375 48.4165 92.4673 40.4185 83.7002 38.1011Z" fill="black"/>
</svg>
}
          </label>
          <p className="dragdrop">Drag and Drop</p>
          <span>or</span>
          <label htmlFor="fileInput" className="select-file-btn">
            Select File
          </label>
        </div>
        <div className="popup-actions">
          <button className="close-btn" onClick={onClose}>Close</button>
          <button className="upload-btn" onClick={handleFileSubmit}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFPopup;
