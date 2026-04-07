# 💼 Job Portal — MERN Stack Web Application

A full-stack Job Portal web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
The platform connects job seekers with recruiters, allowing users to search and apply for jobs while employers can post and manage job listings.

---

## 🚀 Features

### 👨‍💼 Job Seekers
- User registration & login
- Browse and search jobs
- Filter jobs by role, skills, or location
- Apply for jobs
- View applied jobs
- Update profile

### 🏢 Recruiters / Employers
- Recruiter authentication
- Post new job openings
- Edit or delete job listings
- View applicants
- Manage company details

### 🔐 Security
- JWT Authentication
- Password hashing using bcrypt
- Protected routes
- Role-based access control

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS / Tailwind / Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- bcrypt.js

---
## 🚀 Deployment — DevOps (Docker + Jenkins + AWS)

This application is deployed using industry-standard DevOps practices including containerization, CI/CD automation, and cloud hosting.

---

### 🐳 Containerization — Docker

The application is containerized using Docker to ensure consistent environments across development and production.

#### Build Docker Images

```bash
# Backend
cd server
docker build -t job-portal-backend .
```
# Frontend
```bash
cd ../client
docker build -t job-portal-frontend .
```
📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Shikhar Singh Negi

GitHub: https://github.com/Shikhar-Singh-Negi
LinkedIn: https://www.linkedin.com/in/shikharsinghnegi/

