const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be saved in the 'uploads' directory

// Handle file upload via POST request
app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = req.file.path; // Get the path of the uploaded file

    // Use absolute path for Python script and uploaded file
    const scriptPath = path.join(__dirname, 'ImportPDF.py');
    const pythonExecutable = 'python3'; // or 'python3' if that's the command for your environment
    

    // Execute a Python script using the uploaded file path
    exec(`${pythonExecutable} ${scriptPath} ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution error: ${error}`);
            return res.status(500).json({ message: "Error executing Python script", error: stderr });
        }
        try {
            const data = JSON.parse(stdout); // Make sure stdout is JSON-parseable
            res.json(data); // Use .json to send a JSON response
        } catch (parseError) {
            console.error(`Error parsing stdout: ${parseError}`);
            res.status(500).json({ message: "Error parsing Python script output", error: parseError.message });
        }
    });
});

// Specify the port to listen on
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
