import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";
import ImportPdf from "./Components/ImportPDF";
import Dropdown from "./Components/DropDown";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const options = ["English", "Spanish", "Mandarin", "Arabic"];

  const location = useLocation();
  const backgroundClass = location.pathname === '/' ? 'body-frontpage' : 'body-otherpages';


  // const [backgroundImage, setBackgroundImage] = useState('');
  
  // useEffect(() => {
  //   console.log("Setting background image for path:", location.pathname);
  //   switch (location.pathname) {
  //       case '/Subscriptions':
  //           setBackgroundImage('/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/Bridge-Bill/src/images/backgroundimg.png');
  //           break;
  //       default:
  //           setBackgroundImage('url(/path/to/default-image.jpg)');
  //           break;
  //       }
  //   }, [location.pathname]);

  const translations = {
    English: {
      title: 
      <>
      The billing assistant your <br /> health deserves.
      </>,
      subtitle: "Your Guide to Clear and Accurate Medical Billing",
      getStarted: "Get Started"
    },
    Spanish: {
      title: 
      <>
      El asistente de facturación <br /> que su salud merece.
      </>,
      subtitle: "Su guía para una facturación médica clara y precisa",
      getStarted: "Empezar"
    },
    Mandarin: {
      title: "您的健康应得的结算助手。",
      subtitle: "您的清晰准确医疗账单指南",
      getStarted: "开始"
    },
    Arabic: {
      title: "مساعد الفوترة الذي تستحقه صحتك.",
      subtitle: "دليلك للفوترة الطبية الواضحة والدقيقة",
      getStarted: "ابدأ"
    }
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleLanguageChange = (newLanguage: string) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
    }
  };

  // Convert the selected language to a lowercase string to be used as a CSS class
  const languageClass = language.toLowerCase();

  return (
    <div className={backgroundClass} style={{ minHeight: '100vh', minWidth: '200vh'}}>
        <div className={`container ${languageClass} ${isPopupOpen ? 'blur' : ''}`}>
          <header className={`header ${languageClass}`}>
            <div className="language-selector">
              <Dropdown options={options} selected={language} onSelect={handleLanguageChange} />
            </div>
          </header>
          <div className="size">
            <div className={`make-bigger ${languageClass}`}>
              <main className={`main-content ${languageClass}`}>
                <h1 className={`title ${languageClass}`}>
                  {translations[language].title}
                </h1>
                <p className={`subtitle ${languageClass}`}>
                  {translations[language].subtitle}
                </p>
                <button className={`get-started-btn ${languageClass}`} onClick={openPopup}>
                  {translations[language].getStarted}
                </button>
              </main>
            </div>
          </div>
          </div>
          {isPopupOpen && <ImportPdf isOpen={isPopupOpen} onClose={closePopup} />}
        </div>
    
  );
}

export default App;
