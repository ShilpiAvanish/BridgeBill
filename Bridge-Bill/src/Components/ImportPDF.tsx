import React, { useState } from "react";
import "/src/CompenentsCSS/PDFPopup.css";

interface PDFPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDFPopup: React.FC<PDFPopupProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      // Here you would handle the file upload
      console.log("Submitting file:", selectedFile.name);
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
            style={{ display: "none" }}
          />
          <div
            className="upload-icon"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
          <div>
            <img 
              src="cloud-upload.jpeg" 
              width="48" 
              height="48" 
              alt="Upload Icon"
            />
          </div>
          <p>Drag and Drop here</p>
          <span>or</span>
          <button
            className="select-file-btn"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            Select File
          </button>
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        {/* Optionally, you can add a submit button if needed */}
        <button className="upload-btn" onClick={handleFileSubmit}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default PDFPopup;
