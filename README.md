# 🚀 Job Portal (MERN + DevOps)

A full-stack **Job Portal Web Application** built using the **MERN stack** and deployed using modern **DevOps practices** including Docker and Jenkins CI/CD on AWS EC2.

---

## 📌 Project Overview

This platform allows users to:

* 👤 Register and login securely
* 🔍 Browse available jobs
* 📄 Apply for jobs
* 🏢 Post job listings (for recruiters)
* ⚙️ Manage applications

The application is designed with scalability and deployment in mind, using containerization and automated pipelines.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML, CSS, JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Atlas)

### DevOps & Deployment

* Docker (Containerization)
* Jenkins (CI/CD Pipeline)
* AWS EC2 (Cloud Hosting)

---

## ⚙️ Features

* 🔐 Authentication & Authorization (JWT)
* 📦 RESTful APIs
* 🐳 Dockerized backend
* 🔄 CI/CD pipeline with Jenkins
* 🌍 Cloud deployment on AWS
* ⚡ Environment-based configuration

---

## 🚀 Deployment Architecture

```bash
GitHub → Jenkins → Docker Build → EC2 Deployment → Running Container
```

---

## 📂 Project Structure

```
Job-Portal/
│
├── main/              # Backend code
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── ...
│
├── frontend/          # React frontend (optional)
│
├── Dockerfile
├── Jenkinsfile
└── README.md
```

---

## 🐳 Docker Setup

### Build Image

```bash
docker build -t job-portal ./main
```

### Run Container

```bash
docker run -d -p 5000:3000 --name job-portal-app job-portal
```

---

## ⚙️ Environment Variables

Create a `.env` file inside `main/`:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=production
```

---

## 🔄 Jenkins CI/CD Pipeline

Pipeline stages:

* Clone GitHub repository
* Build Docker image
* Remove old container
* Run new container
* Cleanup unused images

---

## 🌐 Access Application

```
http://<your-ec2-public-ip>:5000
```

---

## 🧪 Common Issues & Fixes

### ❌ Port not accessible

✔ Ensure AWS Security Group allows port `5000`

### ❌ Container running but site not loading

✔ Check port mapping: `5000:3000`

### ❌ Permission denied (.env)

✔ Run:

```bash
sudo chmod 644 .env
```

---

## 📈 Future Improvements

* 🌐 Add custom domain + HTTPS
* 🧩 Deploy frontend separately (Vercel)
* 🐳 Use Docker Compose (multi-container setup)
* ☸️ Kubernetes deployment

---

## 📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Shikhar Singh Negi

GitHub: https://github.com/Shikhar-Singh-Negi
LinkedIn: https://www.linkedin.com/in/shikharsinghnegi/

---
## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🛠️ Contribute
