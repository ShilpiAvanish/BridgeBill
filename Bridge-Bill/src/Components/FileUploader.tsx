import React, { useState } from 'react';
import axios from 'axios';

function FileUploader() {
  const [file, setFile] = useState(null);

  const onFileChange = event => {
    setFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post("http://localhost:5000/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      alert('File uploaded and processed successfully!');
      console.log(response.data);
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>
        Upload!
      </button>
    </div>
  );
}

export default FileUploader;
