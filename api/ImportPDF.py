import sys
import re
from pdfminer.high_level import extract_text

def extract_cpt_codes(pdf_path):
    text = extract_text(pdf_path)
    five_digit_numbers = re.findall(r'\b\d{5}\b', text)
    return five_digit_numbers

def find_description_by_code(cpt_codes, file_path):
    import pandas as pd
    
    # Load the Excel file
    df = pd.read_excel(file_path)
    
    # Search for the codes and return their descriptions
    descriptions = {}
    for code in cpt_codes:
        row = df[df.iloc[:, 0] == int(code)]
        if not row.empty:
            descriptions[code] = row.iloc[0, 1]
        else:
            descriptions[code] = "Code not found."
    return descriptions

if __name__ == "__main__":
    # Check if the script receives the file path argument
    if len(sys.argv) < 2:
        print("Error: No file path provided.")
        sys.exit(1)

    pdf_path = sys.argv[1]
    descriptor_file_path = '../api/ConsumerFriendlyDescriptor.xlsx'

    cpt_codes = extract_cpt_codes(pdf_path)
    descriptions = find_description_by_code(cpt_codes, descriptor_file_path)
    
    # Output results as JSON
    import json
    print(json.dumps(descriptions))
