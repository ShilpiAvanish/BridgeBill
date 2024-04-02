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
              {/* Replace this SVG with your upload icon */}
              <svg
              viewBox="0 0 24 24"
              width="48"
              height="48"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
            </svg>
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
