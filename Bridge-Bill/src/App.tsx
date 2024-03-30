import "./styles.css"
import React, { useState } from 'react';
import ImportPdf from './ImportPDF.tsx'

function App() {

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  return(
    <body>
        <div className="container">
            <header>
                <div className="language-selector">
                    <span>English</span>
                </div>
            </header>
            <main>
                <h1>The billing assistant your <br></br> health deserves.</h1>
                <p>Your Guide to Clear and Accurate Medical Billing</p>
                <div>
                  <button className="get-started-btn"onClick={openPopup}>Get Started</button>
                  <ImportPdf isOpen={isPopupOpen} onClose={closePopup} />
                </div>
            </main>
        </div>
    </body>
  );

  // return (
  //   <div className="App">
  //     <header className="Title">
  //       <a className="language-chooser">English</a>
  //       <p className="Title">
  //         The billing assistant<br></br> your health deserves.
  //       </p>
  //       <a className="subheading">
  //         Your Guide to Clear and Accurate Medical Billing
  //       </a>
  //       <div>
  //         <button onClick={openPopup}>Insert PDF</button>
  //         <ImportPdf isOpen={isPopupOpen} onClose={closePopup} />
  //       </div>
  //     </header>
  //   </div>
  // );
}

export default App;
