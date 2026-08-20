# 🚀 ABTalks -- 60-Day Build Challenge

### Build in Public. Stay Consistent. Become Better.

ABTalks is a **60-day build-in-public platform** designed to help users stay consistent with their goals, document their progress, and build accountability through daily challenges.

The platform provides user authentication, protected user areas, daily challenge functionality, and a clean modern interface focused on consistency and personal growth.

---

## 🌐 Live Demo

**Live Website:**  
https://abtalks-teal.vercel.app/

**Dashboard:**  
https://abtalks-teal.vercel.app/dashboard

**GitHub Repository:**  
https://github.com/rocky62077/Abtalks

---

## 🎯 Problem Statement

Many people start personal projects, learning journeys, fitness goals, and other long-term challenges but struggle to remain consistent.

ABTalks addresses this problem by providing a simple environment where users can:

- Create an account
- Log in securely
- Access a personalized dashboard
- Follow a 60-day challenge
- Track daily progress
- Build consistency
- Stay accountable
- Document their journey

The core idea is simple:

> **Don't wait for motivation. Build consistency.**

---

# ✨ Features

### 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Protected routes
- Current-user authentication
- Password hashing with bcrypt
- Logout functionality
- Persistent authentication

### 🏠 Dashboard

Authenticated users can:

- Access their personal dashboard
- View their journey
- Continue their challenge
- Access daily progress
- Manage their session
- Logout from the application

### 📅 60-Day Challenge

The central concept of ABTalks is the **60-day building journey**.

Users can work through daily challenges and maintain consistency throughout the journey.

```text
Day 1
  ↓
Day 2
  ↓
Day 3
  ↓
...
  ↓
Day 60
```

### 🛡️ Protected Routes

Private pages are protected from unauthenticated users.

If a user does not have a valid authentication token, protected pages redirect the user toward authentication.

---

# 🧱 Tech Stack

## Frontend

- React 19
- Vite
- React Router
- JavaScript
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- Helmet
- Morgan
- dotenv

## Deployment & Services

- Vercel
- GitHub
- MongoDB Atlas
- Cloudinary

---

# 🏗️ Architecture

```text
                         ABTalks
                            │
             ┌──────────────┴──────────────┐
             │                             │
        Frontend                        Backend
             │                             │
       React + Vite                  Express.js
             │                             │
             │                       API Routes
             │                             │
             │                       Controllers
             │                             │
             │                       Middleware
             │                             │
             └──────────────┬──────────────┘
                            │
                         MongoDB
                            │
                       MongoDB Atlas
```

---

# 📁 Project Structure

```text
abtalks/
│
├── backend/
│   ├── api/
│   │   └── index.js
│   │
│   ├── src/
│   │   ├── config/
│   │   │   └── env.js
│   │   │
│   │   ├── controllers/
│   │   │   └── auth.controller.js
│   │   │
│   │   ├── database/
│   │   │   └── db.js
│   │   │
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── models/
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   └── auth.routes.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── dist/
│
├── PROMPTS.md
├── vercel.json
├── vite.config.js
├── package.json
└── README.md
```

---

# 🔑 Authentication Flow

ABTalks uses JWT-based authentication.

### Registration

```text
User
 │
 │ POST /api/v1/auth/register
 ↓
Express API
 │
 ↓
Validate User
 │
 ↓
Hash Password
 │
 ↓
MongoDB
 │
 ↓
Create User
 │
 ↓
Return Authentication Data
```

### Login

```text
User
 │
 │ POST /api/v1/auth/login
 ↓
Express API
 │
 ↓
Find User
 │
 ↓
Verify Password
 │
 ↓
Generate JWT
 │
 ↓
Return Token
```

### Protected Request

```text
Frontend
   │
   │ Authentication Token
   ↓
Backend
   │
   ↓
JWT Middleware
   │
   ↓
Verify Token
   │
   ↓
Protected Controller
```

---

# 🔌 API Endpoints

## Register

```http
POST /api/v1/auth/register
```

Request:

```json
{
  "fullName": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
```

---

## Login

```http
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

---

## Current User

```http
GET /api/v1/auth/me
```

This endpoint requires authentication.

---

# ⚙️ Environment Variables

Environment variables are used to keep sensitive configuration outside the source code.

## Frontend

Create:

```text
.env
```

Example:

```env
VITE_API_URL=https://abtalks-teal.vercel.app
```

## Backend

Create:

```text
backend/.env
```

Example:

```env
PORT=5001

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

NODE_ENV=production
```

> **Never commit real API keys, database credentials, JWT secrets, or `.env` files to GitHub.**

---

# 💻 Local Development

## 1. Clone the repository

```bash
git clone https://github.com/rocky62077/Abtalks.git
cd Abtalks
```

## 2. Install frontend dependencies

```bash
npm install
```

## 3. Install backend dependencies

```bash
cd backend
npm install
```

## 4. Configure environment variables

Create the required `.env` files and add your configuration.

## 5. Start the backend

From the `backend` directory:

```bash
npm run dev
```

Backend:

```text
http://localhost:5001
```

## 6. Start the frontend

Open another terminal:

```bash
cd abtalks
npm run dev
```

Vite will provide the local development URL.

---

# 🧪 Production Build

Create the production frontend build:

```bash
npm run build
```

The generated files are placed inside:

```text
dist/
```

---

# 🚀 Deployment

ABTalks is deployed using Vercel.

```text
                         GitHub
                            │
                            ↓
                          Vercel
                            │
              ┌─────────────┴─────────────┐
              │                           │
         React/Vite                  Express API
          Frontend                    Serverless
              │                           │
              └─────────────┬─────────────┘
                            │
                            ↓
                       MongoDB Atlas
```

### Production URL

https://abtalks-teal.vercel.app/

---

# 🔒 Security

The application includes several security practices:

- Password hashing using bcryptjs
- JWT authentication
- Protected API routes
- Helmet security middleware
- CORS configuration
- Environment variables for secrets
- MongoDB authentication
- Authentication validation
- Protected frontend routes

Sensitive credentials are not included in the repository.

---

# 🤖 AI-Assisted Development

ABTalks was developed using an AI-assisted, iterative development workflow.

AI assistance was used throughout different stages of development, including:

- Project planning
- UI development
- Backend architecture
- Authentication implementation
- Database integration
- API development
- Debugging
- Vercel deployment
- Error resolution
- Production testing
- Code refinement

The prompts and development process are documented separately for transparency.

### Prompt Documentation

👉 [View PROMPTS.md](./PROMPTS.md)

---

# 📸 Product Highlights

### Landing Page

A focused landing experience introducing the 60-day building journey.

### Authentication

A simple registration and login experience for users.

### Dashboard

A protected dashboard where authenticated users can continue their journey.

### Daily Challenge

The core experience revolves around building consistently over 60 days.

---

# 🛣️ Future Improvements

Planned improvements include:

- Email verification
- Password reset
- Improved session management
- Challenge streak analytics
- Public builder profiles
- Leaderboard
- Notifications
- Automated testing
- API documentation
- Social sharing
- Progress visualization

---

# 🎯 Core Philosophy

ABTalks is built around three simple principles:

### 1. Build

Turn ideas into real projects.

### 2. Document

Share the process instead of only showing the final result.

### 3. Stay Consistent

Small progress every day compounds into meaningful results.

---

# 📊 Project Status

| Component | Status |
|---|---|
| Frontend | ✅ Complete |
| Backend | ✅ Complete |
| Authentication | ✅ Complete |
| MongoDB Integration | ✅ Complete |
| Protected Routes | ✅ Complete |
| Vercel Deployment | ✅ Complete |
| Production API | ✅ Working |
| Prompt Documentation | ✅ Included |
| README | ✅ Complete |

---

# 👨‍💻 Developer

Built as part of a **60-day build-in-public journey**.

## ABTalks

> **Build something every day.**  
> **Document the journey.**  
> **Become better.**

---

# 🔗 Important Links

| Resource | Link |
|---|---|
| 🌐 Live Website | https://abtalks-teal.vercel.app/ |
| 📊 Dashboard | https://abtalks-teal.vercel.app/dashboard |
| 💻 GitHub Repository | https://github.com/rocky62077/Abtalks |
| 🤖 AI Prompts | [PROMPTS.md](./PROMPTS.md) |

---

## ⭐ Support

If you find ABTalks interesting, consider giving the repository a ⭐ on GitHub.

**Build. Document. Stay Consistent. 🚀**
