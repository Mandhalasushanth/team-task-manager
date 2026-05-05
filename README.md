# 🚀 Team Task Manager

A modern full-stack Team Task Manager web application built for managing projects, assigning tasks, tracking progress, and improving team collaboration with role-based access.

This project was developed as an internship assignment to demonstrate full-stack development skills using modern technologies.

---

# 🌐 Live Application

## Frontend (Vercel)
https://your-frontend-url.vercel.app

## Backend API (Railway)
https://team-task-manager-production-2c2a.up.railway.app

---

# 📌 Project Overview

The Team Task Manager helps teams and organizations manage daily workflow efficiently.

Users can:
- Create projects
- Manage tasks
- Track project progress
- Update task status
- Organize team work
- Monitor dashboard analytics

The application provides a clean SaaS-style UI with responsive layouts and dynamic functionality.

---

# ⚙️ How The Project Works

## 1️⃣ Authentication System

Users can:
- Register new accounts
- Login securely
- Access protected pages

JWT Authentication is used for secure login sessions.

After successful login:
- User token is stored
- Protected routes become accessible
- Dashboard loads dynamically

---

## 2️⃣ Dashboard Module

The dashboard provides a complete overview of:
- Total Projects
- Total Tasks
- Completed Tasks
- Pending Tasks
- Recent Activity

Dashboard data updates automatically when:
- Tasks are created
- Tasks are updated
- Projects are added
- Projects are deleted

This gives real-time workflow visibility.

---

## 3️⃣ Project Management Module

Users can:
- Create projects
- Edit project details
- Delete projects
- Track project status

Each project contains:
- Project Title
- Description
- Status

Project statuses:
- Active
- Completed
- Pending

Projects are displayed using responsive cards with interactive actions.

---

## 4️⃣ Task Management Module

Users can:
- Create tasks
- Edit tasks
- Delete tasks
- Update task status
- Set priorities
- Set due dates

Task statuses:
- Pending
- In Progress
- Completed

Priority levels:
- High
- Medium
- Low

Tasks are displayed in dynamic tables with color-coded status indicators.

---

# 🛠️ Technologies Used

# Frontend Technologies

| Technology | Purpose |
|---|---|
| React.js | Frontend UI |
| Vite | Fast React Build Tool |
| Tailwind CSS | Styling |
| React Router DOM | Routing |
| Axios | API Requests |

---

# Backend Technologies

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |

---

# ☁️ Deployment Technologies

| Platform | Usage |
|---|---|
| Railway | Backend Deployment |
| Vercel | Frontend Deployment |
| MongoDB Atlas | Cloud Database |
| GitHub | Code Repository |

---

# 🧠 System Architecture

```text
Frontend (React + Vite)
        ↓
REST API (Express.js)
        ↓
MongoDB Database










# Team Task Manager

## Run Backend

cd server
npm install
npm run dev

## Run Frontend

cd client
npm install
npm run dev
