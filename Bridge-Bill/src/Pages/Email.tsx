import React from 'react'
import '/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/Bridge-Bill/src/CompenentsCSS/Email.css'
import { useLocation } from "react-router-dom";
<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>


const Email: React.FC = () => {


  const location = useLocation();
  const backgroundClass = location.pathname === '/' ? 'body-frontpage' : 'body-otherpages';



  return (
    // <div className={backgroundClass} style={{ minHeight: '110vh', minWidth: '210vh' }}>
      <div className="size">
        <div className="billing-notice" style={{ fontFamily: 'inherit', letterSpacing: 1}}>
          <div className="billing-header" style={{ lineHeight: 1}}>
            <p>[HOSPITAL/BILLING COMPANY NAME]</p>
            <p>[HOSPITAL/BILLING COMPANY ADDRESS]</p>
          </div>
          <div className="patient-info" style={{ lineHeight: 1}}>
            <p>[PATIENT NAME]</p>
            <p>[PATIENT SERVICE]</p>
            <p>[ACCOUNT NUMBER]</p>
            <p>[BALANCE DUE]</p>
          </div>
          <div className="invoice-info" style={{ lineHeight: 1.5}}>
            <p>To Whom It May Concern,</p>
            <p>I'm writing regarding the services I received from [HOSPITAL NAME] on [HOSPITAL DATE]. The amount due for services is [AMOUNT DUE] on the bill [BILL/INVOICE #].</p>
            <p>I am writing to negotiate the above medical bills because I have some unexplained questions. </p>
              <ul>
                <li>CPT CODE: 80053</li>
                <ul>
                  <li className="indented">The bill appears to reflect a duplicated charge for a single CPT code.</li>
                </ul>
              </ul>
              <ul>
                <li>CPT CODE: 82306</li>
                <ul>
                  <li className="indented">The bill appears to reflect a procedure cost more expensive than the average provider.</li>
                </ul>
              </ul>
          </div>
          <div className="footer-info">
            <p>Thank you for considering my proposal, and I look forward to hearing from you soon.</p>
            <p>   </p>
            <p>   </p>
            <p>   </p>
            <p>Sincerely,</p>
            <p>[NAME]</p>
            <p>[ADDRESS]</p>
            <p>[PHONE NUMBER]</p>
            <p>[EMAIL]</p>
          </div>
          <button id="copyButton" className="copy-button" style={{ fontFamily: 'inherit'}}>Copy Text</button>
          </div>
       </div>
   
  
  );
};

export default Email;