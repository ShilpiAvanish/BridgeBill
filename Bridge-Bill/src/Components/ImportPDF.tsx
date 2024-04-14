import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/Bridge-Bill/src/CompenentsCSS/PDFPopup.css"; // Make sure this path is correct

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
        const response = await fetch('http://localhost:5173/upload', {
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
            {/* SVG or Upload Icon here */}
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
