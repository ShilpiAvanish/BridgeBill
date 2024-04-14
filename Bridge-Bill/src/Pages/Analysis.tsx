import React from 'react';
import { useLocation } from 'react-router-dom';

const Analysis = () => {
  const location = useLocation();
  
  // Make sure 'data' is the correct key where the server processing result is being stored.
  // If 'data' does not exist or if the structure is different, it won't work as expected.
  const analysisData = location.state?.data;

  console.log(analysisData);
  console.log(location);
  return (
    <div>
      <h1>Analysis Results</h1>
      {/* Ensure that analysisData contains the data you need to display */}
      {/* If analysisData is undefined or null, JSON.stringify will output an empty string */}
      <pre>{JSON.stringify(analysisData, null, 2)}</pre>
    </div>
  );
};

export default Analysis;
