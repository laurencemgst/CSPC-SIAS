import csv

# Path to your CSV file
CSV_FILE = "CSV/users.csv"

# Load users from CSV into a dictionary
def load_users():
    with open(CSV_FILE, mode='r') as f:
        reader = csv.DictReader(f)
        users = {row['student_number']: {'password': row['password'], 'full_name': row['full_name'], 'address': row['address']} for row in reader}
    return users

# Save users to CSV file
def save_users(users):
    with open(CSV_FILE, mode='w', newline='') as f:
        fieldnames = ['student_number', 'password', 'full_name', 'address']
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for student_number, user_info in users.items():
            writer.writerow({'student_number': user_info['student_number'], 'password': user_info['password'], 'full_name': user_info['full_name'], 'address': user_info['address']})
