import re
import pdfminer
import tabula
from pdfminer.high_level import extract_pages, extract_text

#potential code to get each 5 digit number
cpt_codes = []
pdf_path = "SampleMedicalBill.pdf"
text = extract_text(pdf_path)
five_digit_numbers = re.findall(r'\b\d{5}\b', text)

    # `pages='all'` scans the entire document, adjust as needed
    # tables = tabula.read_pdf(pdf_path, pages='all', multiple_tables=True)
    
    # If tables were found
    # if tables:
        # Assuming the table with the 'CPT' column is the first one found
        # table = tables[0]
        # Ensure the 'CPT' column exists
        # if 'CPT' in table.columns:
            # Extract 'CPT' column, convert to string to ensure consistency, then to list
            # cpt_codes = table['CPT'].astype(str).dropna().tolist()
            # Convert list elements to integers, assuming all CPT codes are numeric
            # cpt_codes = [int(code) for code in cpt_codes if code.isdigit()]
            # Print or return the list of CPT codes
print(five_digit_numbers)
        # else:
            # print("No 'CPT' column found in the table.")
    # else:
    #     print("No tables found in the PDF.")


    #Make all the code to llook like taking from table
    
    #Flask

import pandas as pd

def find_description_by_code(file_path, code):
    # Load the Excel file
    df = pd.read_excel(file_path)
    
    # Assuming the code is in the first column and the description in the second,
    # adjust the column indices [0] and [1] if this is not the case.
    code_column_index = 0
    description_column_index = 1

    # Search for the code
    row = df[df.iloc[:, code_column_index] == code]
    
    if not row.empty:
        # If the code is found, return the description
        return row.iloc[0, description_column_index]
    else:
        # If the code is not found, return a message stating that
        return "Code not found."

# Example usage
file_path = '/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/PDFPuller/ConsumerFriendlyDescriptor.xlsx'
for codes in five_digit_numbers:
    updatedCode = int(codes)
    description = find_description_by_code(file_path, updatedCode)
    print(description)


from flask import Flask, request, jsonify
from flask_cors import CORS
import PyPDF2
import os

app = Flask(__name__)
CORS(app)  # This enables CORS for all domains; adjust as necessary for production

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file:
        # Assuming the PDF file needs to be saved temporarily for processing
        temp_path = 'temp_uploaded.pdf'
        file.save(temp_path)

        # Open, read, and process the PDF file
        with open(temp_path, 'rb') as pdf_file:
            pdfReader = PyPDF2.PdfReader(pdf_file)
            pageObj = pdfReader.pages[0]
            text = pageObj.extract_text()

        # Remove the temporary file if no longer needed
        os.remove(temp_path)

        # Process your PDF data here (this example simply returns extracted text)
        return jsonify({'message': 'File processed successfully', 'data': text})
    return jsonify({'error': 'No file provided'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)


