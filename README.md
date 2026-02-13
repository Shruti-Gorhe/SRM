# 🚀 Backend Developer Intern Assignment

## Scalable REST API with Authentication & Role-Based Access

------------------------------------------------------------------------

## 📌 Project Overview

This project demonstrates the implementation of a **secure, scalable
backend system** with authentication, role-based authorization, CRUD
functionality, and a basic frontend for interaction.

The system follows REST principles and is designed with scalability and
security best practices in mind.

------------------------------------------------------------------------

## 🛠 Tech Stack

### Backend

-   Node.js + Express.js
-   MongoDB (Mongoose ODM)
-   JWT Authentication
-   bcrypt for password hashing
-   Swagger for API documentation

### Frontend

-   React.js
-   Axios for API communication

------------------------------------------------------------------------

## 🔐 Core Features

### ✅ Authentication

-   User Registration
-   User Login
-   Password hashing using bcrypt
-   JWT token generation & verification

### ✅ Role-Based Access Control

-   Two roles: `User` and `Admin`
-   Admin-only routes protected via middleware
-   Token-based authorization

### ✅ CRUD Operations (Example: Tasks)

-   Create Task
-   Read Tasks
-   Update Task
-   Delete Task
-   Protected routes (JWT required)

### ✅ API Standards

-   Proper HTTP status codes
-   Centralized error handling
-   Input validation
-   API versioning (`/api/v1/`)

------------------------------------------------------------------------

## 🗄 Database Schema Design

### User Schema

-   name (String)
-   email (Unique)
-   password (Hashed)
-   role (User/Admin)
-   createdAt

### Task Schema

-   title
-   description
-   status
-   userId (Reference to User)
-   createdAt

------------------------------------------------------------------------

## 🖥 Frontend Features

-   Register & Login UI
-   JWT token storage (secure handling)
-   Protected dashboard
-   Perform CRUD operations
-   Display success/error messages

------------------------------------------------------------------------

## 🔒 Security Practices

-   Password hashing (bcrypt)
-   JWT authentication with expiration
-   Role-based middleware authorization
-   Input validation & sanitization
-   Protected environment variables (.env)

------------------------------------------------------------------------

## 📈 Scalability Considerations

This project is structured to support scalability:

-   Modular folder structure (controllers, routes, middleware, models)
-   API versioning
-   Separation of concerns
-   Can be extended to microservices architecture
-   Ready for Docker containerization
-   Redis caching can be added for high traffic
-   Load balancing possible using Nginx

------------------------------------------------------------------------

## 📂 Project Structure

backend/ │ ├── controllers/ ├── routes/ ├── middleware/ ├── models/ ├──
config/ ├── app.js └── server.js

frontend/ │ ├── components/ ├── pages/ └── services/

------------------------------------------------------------------------

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

``` bash
git clone <repository_url>
cd project-folder
```

### 2️⃣ Backend Setup

``` bash
cd backend
npm install
```

Create `.env` file:

    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

Run backend:

``` bash
npm start
```

### 3️⃣ Frontend Setup

``` bash
cd frontend
npm install
npm start
```

------------------------------------------------------------------------

## 📘 API Documentation

-   Swagger available at: `/api-docs`
-   Postman Collection included in repository

------------------------------------------------------------------------

## 🧪 Testing

-   Tested authentication & CRUD endpoints using Postman
-   Verified role-based route protection
-   Validated error handling & status codes

------------------------------------------------------------------------

## 🎯 Evaluation Criteria Coverage

✔ RESTful API design\
✔ Secure authentication & authorization\
✔ Proper database schema design\
✔ Functional frontend integration\
✔ Scalable & modular backend architecture

------------------------------------------------------------------------

## 👩‍💻 Author

Shruti Gorhe\
Backend Developer Intern Candidate

------------------------------------------------------------------------

## 📌 Future Improvements

-   Docker deployment
-   Redis caching
-   Rate limiting
-   CI/CD pipeline integration
-   Unit & integration tests

------------------------------------------------------------------------

⭐ This project demonstrates strong backend fundamentals with security,
scalability, and clean architecture principles.
