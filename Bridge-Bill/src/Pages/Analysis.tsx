// import React from 'react'
// import '/src/CompenentsCSS/Analysis.css'; // Make sure the CSS file is correctly imported.




// const Analysis = () => {
//    // This could be a list coming from state or props.
//    const costBreakdowns = [
//      {
//        title: "HEMOGLOBIN VENIPUNCTURE BLOOD TEST",
//        description: "Venipuncture is the collection of blood from a vein..."
//      },
//      {
//        title: "COMPLETE BLOOD COUNT",
//        description: "A complete blood count is a common blood test that's done for a variety of reasons..."
//      },
//      // Add more cost breakdown items here...
//      {
//        title: "EXAMPLE",
//        description: "EXAMPLE SUMMARY..."
//      },
//      {
//        title: "EXAMPLE",
//        description: "EXAMPLE SUMMARY..."
//      },
//      {
//        title: "EXAMPLE",
//        description: "EXAMPLE SUMMARY..."
//      },
//      {
//        title: "EXAMPLE",
//        description: "EXAMPLE SUMMARY..."
//      },
//    ];
//     return (
//        <div className="analysis-container">
//          <div className="bill-summary-section">
//            <h1 className="bill-summary-title">Your Bill Summary</h1>
//            <div className="status-indicators">
//              <p className="status-item">
//                <span className="status-icon check">✔</span>
//                No errors found in Cost
//              </p>
//              <p className="status-item">
//                <span className="status-icon alert">⚠</span>
//                2 Potential Errors in Cost
//              </p>
//            </div>
//            <h2 className="cost-breakdown-title">Cost Breakdown</h2>
//          </div>
        
//          <div className="cost-breakdown">
//            {costBreakdowns.map((item, index) => (
//              <div className="cost-breakdown-item" key={index}>
//                <h3>{item.title}</h3>
//                <p>{item.description}</p>
//              </div>
//            ))}
//          </div>
//        </div>
//      );
//    };
  
//    export default Analysis;


// import React, { useState, useEffect } from 'react';

// const BillAnalysis = () => {
//   // Initialize state with null or an empty object if no data is available yet
//   const [testResults, setTestResults] = useState(null);

//   // Simulate fetching data from the server
//   useEffect(() => {
//     // You'll replace this with your actual server call
//     async function fetchData() {
//       const response = await fetch('http://localhost:5173/upload');
//       const data = await response.json();
//       setTestResults(data);
//     }

//     fetchData().catch(console.error);
//   }, []);

//   // Function to format the test results for display
//   const renderTestResults = () => {
//     if (!testResults) {
//       return <p>Loading test results...</p>;
//     }

//     return Object.entries(testResults).map(([code, description]) => (
//       <div key={code} className="test-result-item">
//         <h3>{description}</h3>
//         <p>Code: {code}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h1>Your Bill Summary</h1>
//       <div className="cost-breakdown">
//         <h2>Cost Breakdown</h2>
//         {renderTestResults()}
//       </div>
//     </div>
//   );
// };

// export default BillAnalysis;



import React, { useState, useEffect } from 'react';

const BillAnalysis = () => {
  // Initialize state with null to signify that no data has been loaded yet
//   const [testResults, setTestResults] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from the server
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:5173/');
//         // Check if the response was successful
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const text = await response.text();
//         try {
//           // Try to parse it as JSON
//           const data = JSON.parse(text);
//           setTestResults(data);
//         } catch (err) {
//           // If error, it was not JSON
//           throw new Error('Response was not JSON');
//         }
//       } catch (error) {
//         // Handle fetch error
//         console.error('Fetch error:', error.message);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   // Function to format the test results for display
//   const renderTestResults = () => {
//     if (loading) {
//       return <p>Loading test results...</p>;
//     }
//     if (error) {
//       return <p>Error loading results: {error}</p>;
//     }
//     if (!testResults) {
//       return <p>No test results found.</p>;
//     }

//     return Object.entries(testResults).map(([code, description]) => (
//       <div key={code} className="test-result-item">
//         <h3>{description}</h3>
//         <p>Code: {code}</p>
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h1>Your Bill Summary</h1>
//       <div className="cost-breakdown">
//         <h2>Cost Breakdown</h2>
//         {renderTestResults()}
//       </div>
//     </div>
//   );
// };
fetch('http://localhost:5173/upload')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // Use .text() to read the response body as plain text
  })
  .then(text => {
    try {
      const data = JSON.parse(text); // Try to manually parse the text as JSON
      console.log('Received JSON:', data);
    } catch (error) {
      console.error('Response was not JSON:', text);
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

export default BillAnalysis;

