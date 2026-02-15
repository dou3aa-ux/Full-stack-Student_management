# 🎓 Student Management System

A simple full-stack CRUD application for managing student records. Built with React, Node.js, Express, and MySQL.

## ✨ Features

- View all students in a table
- Add new students
- Edit student information
- View student details
- Delete students
- Responsive design with Bootstrap

## 🛠️ Tech Stack

**Frontend:** React.js, React Router, Axios, Bootstrap  
**Backend:** Node.js, Express.js, MySQL, CORS

## 📦 Prerequisites

- Node.js (v14+)
- MySQL (v5.7+)
- npm

## 🚀 Quick Start

### 1. Database Setup

```sql
CREATE DATABASE students;
USE students;

CREATE TABLE student_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender VARCHAR(20) NOT NULL
);
```

### 2. Backend Setup

```bash
# Install dependencies
npm install express mysql cors

# Update database credentials in server.js
# Then start server
node server.js
```

Server runs on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Install dependencies
npm install react-router-dom axios bootstrap

# Start React app
npm start
```

App runs on `http://localhost:3000`

## 📁 Project Structure

```
├── backend/
│   ├── server.js          # Express API
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Routes
│   │   ├── elements/
│   │   │   ├── Home.js    # Student list
│   │   │   ├── Create.js  # Add student
│   │   │   ├── Edit.js    # Edit student
│   │   │   └── Read.js    # View student
│   └── package.json
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/students` | Get all students |
| GET | `/get_student/:id` | Get single student |
| POST | `/add_user` | Add new student |
| POST | `/edit_user/:id` | Update student |
| DELETE | `/delete/:id` | Delete student |

## 🎯 Usage

1. **View Students:** Home page displays all students
2. **Add Student:** Click "Add Student" button, fill form, submit
3. **Edit Student:** Click "Edit" on any student row, modify data, update
4. **View Details:** Click "View" to see full student information
5. **Delete Student:** Click "Delete" to remove student record

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Change port in server.js from 5000 to 5001
# Or kill the process using port 5000
```

**Database connection error:**
- Check MySQL is running
- Verify credentials in `server.js`
- Ensure database `students` exists

**CORS error:**
- Make sure backend has `app.use(cors())` 
- Backend must be running on port 5000


---

Made with ❤️ using React and Node.js
