from flask import Flask, render_template, request, redirect, session, url_for
from csv_handler import load_users

app = Flask(__name__)
app.secret_key = "CSPCSIAS"

# Fake user database (you should use a real database in production)
users = load_users()

# Function to reload users from CSV file
def reload_users():
    global users
    users = load_users()

@app.route('/')
def home():
    reload_users()
    if 'student_number' in session:
        return redirect(url_for('dashboard'))
    return render_template('index.html')

@app.route('/loginStudent')
def login():
    reload_users()
    if 'student_number' in session:
        return redirect(url_for('dashboard'))
    return render_template('StudentLogin.html')

@app.route('/StudentLogin', methods=['POST'])
def StudentLogin():
    if request.method == 'POST':
        student_number = request.form['student_number']
        password = request.form['password']
        
        # Check if student_number and password are correct
        if student_number in users and users[student_number]['password'] == password:
            session['student_number'] = student_number
            return redirect(url_for('dashboard'))
        else:
            return render_template('StudentLogin.html')

    return render_template('StudentLogin.html')

@app.route('/dashboard')
def dashboard():
    if 'student_number' in session:
        student_number = session['student_number']
        full_name = users[student_number]['full_name']
        address = users[student_number]['address']
        reload_users() # this is to reload the CSV
        return render_template('User_Dashboard.html', student_number=student_number, full_name=full_name, address=address)
    else:
        return redirect('/StudentLogin')

@app.route('/Forgot-Password')
def forgot_password():
    return render_template('ForgotPassword.html')

@app.route('/logout')
def logout():
    session.pop('student_number', None)
    return redirect('/')

@app.route('/test')
def test123():
    return render_template('ForgotPassword.html')

@app.route('/print')
def print():
    return render_template('print.html')
if __name__ == '__main__':
    app.run(debug=True)
