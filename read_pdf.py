import sys
try:
    import fitz
    doc = fitz.open("public/certificates/Varshan.pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    print("PDF_TEXT_START:\n" + text[:4000])
except Exception as e:
    print(e)
