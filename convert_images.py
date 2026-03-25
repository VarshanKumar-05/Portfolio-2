import os
from PIL import Image

def convert_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png') or file.lower().endswith('.jpg'):
                file_path = os.path.join(root, file)
                target_path = os.path.splitext(file_path)[0] + '.webp'
                print(f"Converting {file_path} to {target_path}")
                try:
                    with Image.open(file_path) as img:
                        # Convert RGBA to RGB if needed, or maintain for webp
                        img.save(target_path, 'webp', optimize=True, quality=80)
                except Exception as e:
                    print(f"Error converting {file_path}: {e}")

if __name__ == '__main__':
    convert_to_webp(r'c:\Users\varsh\Downloads\protfolio\public')
