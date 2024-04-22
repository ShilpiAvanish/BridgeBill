import sys
import re
import json
import pandas as pd
from pdfminer.high_level import extract_text

def extract_cpt_codes(pdf_path):
    try:
        text = extract_text(pdf_path)
    except Exception as e:
        print(f"Error reading PDF: {e}")
        sys.exit(1)
    # Regex to find exactly five digit numbers
    five_digit_numbers = re.findall(r'\b\d{5}\b', text)
    return five_digit_numbers

def find_description_by_code(cpt_codes, file_path):
    try:
        df = pd.read_excel(file_path)
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        sys.exit(1)

    # Ensure the column for CPT codes is integer for correct merging
    df.iloc[:, 0] = df.iloc[:, 0].astype(str)

    # Filter descriptions by CPT codes
    descriptions = {}
    filtered_df = df[df.iloc[:, 0].isin(cpt_codes)]
    for code in cpt_codes:
        row = filtered_df[filtered_df.iloc[:, 0] == code]
        if not row.empty:
            descriptions[code] = row.iloc[0, 1]
        else:
            descriptions[code] = "Code not found."

    return descriptions

def import_PDF(pdf_path):
    # if len(sys.argv) < 2:
    #     print("Error: No file path provided.")
    #     sys.exit(1)

    # pdf_path = sys.argv[1]
    descriptor_file_path = '/home/avanish/code/ConvergentCloneCode/Convergent-Health-Hospital2.0/FlaskBackend/ConsumerFriendlyDescriptor.xlsx'

    cpt_codes = extract_cpt_codes(pdf_path)
    descriptions = find_description_by_code(cpt_codes, descriptor_file_path)
    
    # Output results as JSON
    return(json.dumps(descriptions, indent=2))
