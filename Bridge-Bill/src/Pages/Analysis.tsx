import React from 'react'
import '/src/CompenentsCSS/Analysis.css'; // Make sure the CSS file is correctly imported.




const Analysis = () => {
   // This could be a list coming from state or props.
   const costBreakdowns = [
     {
       title: "HEMOGLOBIN VENIPUNCTURE BLOOD TEST",
       description: "Venipuncture is the collection of blood from a vein..."
     },
     {
       title: "COMPLETE BLOOD COUNT",
       description: "A complete blood count is a common blood test that's done for a variety of reasons..."
     },
     // Add more cost breakdown items here...
     {
       title: "EXAMPLE",
       description: "EXAMPLE SUMMARY..."
     },
     {
       title: "EXAMPLE",
       description: "EXAMPLE SUMMARY..."
     },
     {
       title: "EXAMPLE",
       description: "EXAMPLE SUMMARY..."
     },
     {
       title: "EXAMPLE",
       description: "EXAMPLE SUMMARY..."
     },
   ];
    return (
       <div className="analysis-container">
         <div className="bill-summary-section">
           <h1 className="bill-summary-title">Your Bill Summary</h1>
           <div className="status-indicators">
             <p className="status-item">
               <span className="status-icon check">✔</span>
               No errors found in Cost
             </p>
             <p className="status-item">
               <span className="status-icon alert">⚠</span>
               2 Potential Errors in Cost
             </p>
           </div>
           <h2 className="cost-breakdown-title">Cost Breakdown</h2>
         </div>
        
         <div className="cost-breakdown">
           {costBreakdowns.map((item, index) => (
             <div className="cost-breakdown-item" key={index}>
               <h3>{item.title}</h3>
               <p>{item.description}</p>
             </div>
           ))}
         </div>
       </div>
     );
   };
  
   export default Analysis;