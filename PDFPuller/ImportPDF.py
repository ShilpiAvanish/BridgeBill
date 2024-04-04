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
    

