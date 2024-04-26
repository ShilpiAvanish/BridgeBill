import React, { useState } from 'react';
import '/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/Bridge-Bill/src/CompenentsCSS/Analysis.css';
type CostBreakdownType = {
  title: string;
  description: string;
  payment?: string;
  averagePayment?: string;
  paymentWithinRange?: boolean;
  duplicate?: boolean;
  showPayment?: boolean; // You need to add this to the type if you're using it in your state
};
const App: React.FC = () => {
  const [costBreakdowns, setCostBreakdowns] = useState<CostBreakdownType[]>([
    {
      title: "ROUTINE VENIPUNCTURE - 36415",
      description: "This procedure involves the insertion of a sterile needle into a vein, typically located in the arm, to collect a blood sample for diagnostic or monitoring purposes, which can provide vital information about a patient's health status.",
      payment: "$49",
      averagePayment: "$65",
      paymentWithinRange: true,
      duplicate: false,
    },
    {
      title: "GLOBULIN BLOOD TEST - 82784",
      description: "This medical laboratory test known as the \"Gammaglobulin (immune system protein) measurement,\" commonly referred to as the Globulin Blood Test. This test specifically measures the levels of gamma globulins in the blood, which are a class of proteins predominantly involved in the immune response.",
      payment: "$109",
      averagePayment: "$29",
      paymentWithinRange: true,
      duplicate: false,
    },
    // Add more cost breakdown items here...
    {
      title: "COMPREHENSIVE METABOLIC PANEL - 80053",
      description: "\"Blood test, comprehensive group of blood chemicals,\" better known as the Comprehensive Metabolic Panel (CMP) test. This test is a crucial diagnostic tool used extensively in medicine to provide a significant amount of information about the current status of an individual's metabolism, including kidney function, liver function, acid/base balance, and levels of blood glucose and electrolytes.",
      payment: "$358",
      averagePayment: "$420",
      paymentWithinRange: true,
      duplicate: false,
    },
    {
      title: "VITAMIN D-3 LEVEL TEST - 82306",
      description: "This is a medical laboratory test for assessing Vitamin D-3 levels, which is the specific measurement of the 25-hydroxyvitamin D3 concentration in the blood. This form of vitamin D is known as cholecalciferol, which is the natural type of vitamin D that the body synthesizes from sunlight exposure and also absorbs from certain dietary sources, such as fatty fish and egg yolks. ",
      payment: "$109",
      averagePayment: "$29",
      paymentWithinRange: false,
      duplicate: false,
    },
    {
      title: "COMPREHENSIVE METABOLIC PANEL - 80053",
      description: "\"Blood test, comprehensive group of blood chemicals,\" better known as the Comprehensive Metabolic Panel (CMP) test. This test is a crucial diagnostic tool used extensively in medicine to provide a significant amount of information about the current status of an individual's metabolism, including kidney function, liver function, acid/base balance, and levels of blood glucose and electrolytes.",
      payment: "$358",
      averagePayment: "$380",
      paymentWithinRange: false,
      duplicate: true,
    },
  ]);
  const togglePayment = (index: number) => {
    setCostBreakdowns(
      costBreakdowns.map((item, i) =>
        i === index ? { ...item, showPayment: !item.showPayment } : item
      )
    );
  };
  return (
    <div className="analysis-container">
      <div className="bill-summary-section">
        <h1 className="bill-summary-title">Your Bill Summary</h1>
        <div className="status-indicators">
          <p className="status-item">
            <span className="status-icon check">✅</span>
            No errors found in Cost
          </p>
          <p className="status-item">
            <span className="status-icon alert">❌</span>
            2 Potential Errors in Cost
          </p>
        </div>
        <h2 className="cost-breakdown-title">Cost Breakdown</h2>
      </div>
      <div className="cost-breakdown">
        {costBreakdowns.map((item, index) => (
          <div className="cost-breakdown-item" key={index} onClick={() => togglePayment(index)}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.showPayment && (
              <div className={`payment-info ${item.paymentWithinRange ? 'check' : 'alert'}`}>
                <p>Your Payment: {item.payment}</p>
                <p>Average Payment: {item.averagePayment}</p>
                {item.paymentWithinRange
                  ? <span className="status-icon check">✅</span>
                  : <span className="status-icon alert">❌</span>
                }
                {
                  <p>
                  {item.duplicate
                    ? "CPT code detected twice, the charge is repeated on the bill"
                    : item.paymentWithinRange
                      ? "This procedure was within the range of a typical procedure in the United States."
                      : "This procedure was very off of a typical procedure in the United States."
                  }
                </p>
                
                
                
                /* <p>{
                  if(item.paymentWithinRange)
                    {

                    }
                
                item.paymentWithinRange ? "This procedure was within the range of a typical procedure in the United States." : "This procedure was very off of a typical procedure in the United States."
                
                }</p> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;