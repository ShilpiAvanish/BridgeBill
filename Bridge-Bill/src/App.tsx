// App.tsx
import React, { useState } from "react";
import "./styles.css";
import ImportPdf from "./Components/ImportPDF";
import Dropdown from "./Components/DropDown";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const options = ["English", "Spanish", "Mandarin", "Arabic"];

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  
  const handleLanguageChange = (newLanguage: string) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
    }
  };

  return (
    <div className={`container ${isPopupOpen ? 'blur' : ''}`}>
      <header>
        <div className="language-selector">
          <Dropdown options={options} selected={language} onSelect={handleLanguageChange} />
        </div>
      </header>
      <div className="make-bigger">
        <main>
          <h1>
            The billing assistant your <br /> health deserves.
          </h1>
          <p>Your Guide to Clear and Accurate Medical Billing</p>
          <button className="get-started-btn" onClick={openPopup}>
            Get Started
          </button>
        </main>
      </div>
      {isPopupOpen && <ImportPdf isOpen={isPopupOpen} onClose={closePopup} />}
    </div>
  );
}

export default App;
