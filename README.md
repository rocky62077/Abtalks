\# 🚀 ABTalks — 60-Day Build Challenge



> \*\*Build every day. Make your progress impossible to ignore.\*\*



ABTalks is a full-stack web application designed around a \*\*60-day building challenge\*\*. The platform helps users create an account, authenticate securely, track their challenge progress, submit proof of their work, and build a visible record of consistent execution.



The goal is simple:



\*\*Don't just learn. Build. Track it. Prove it.\*\*



\---



\## 🌐 Live Demo



\*\*ABTalks:\*\*

https://abtalks-teal.vercel.app/



\*\*Dashboard:\*\*

https://abtalks-teal.vercel.app/dashboard



> The dashboard requires authentication. Create an account or log in to access it.



\---



\## 📦 Source Code



\*\*GitHub Repository:\*\*

https://github.com/rocky62077/Abtalks



The repository contains the complete frontend, backend, deployment configuration, and project documentation.



\---



\# ✨ Features



\## 🔐 Authentication



\* User registration

\* User login

\* JWT-based authentication

\* Protected routes

\* Current-user authentication

\* Persistent login state

\* Logout functionality



\## 📊 Dashboard



The authenticated dashboard provides users with a centralized place to view and manage their challenge activity.



Features include:



\* Challenge progress

\* User information

\* Daily progress

\* Challenge activity

\* Proof-related actions

\* Authentication-aware UI



\## 🎯 60-Day Challenge



ABTalks is designed around consistent daily building.



The challenge encourages users to:



1\. Build something every day

2\. Track their progress

3\. Submit proof of work

4\. Maintain consistency

5\. Create a visible record of their journey



\## 🧾 Proof Submission



Users can submit proof associated with their challenge progress.



The application is designed to support media-based proof using \*\*Cloudinary\*\*.



\## ☁️ Cloud Storage



Cloudinary is used for handling uploaded media and proof assets.



\## 📱 Responsive Interface



The frontend is designed to provide a clean experience across desktop and mobile screen sizes.



\---



\# 🏗️ System Architecture



```text

&#x20;                        ┌──────────────────────┐

&#x20;                        │      ABTalks UI      │

&#x20;                        │   React + Vite       │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                                   │ HTTPS

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │       Vercel         │

&#x20;                        │ Frontend + API       │

&#x20;                        └──────────┬───────────┘

&#x20;                                   │

&#x20;                                   ▼

&#x20;                        ┌──────────────────────┐

&#x20;                        │   Express Backend    │

&#x20;                        │   REST API           │

&#x20;                        └──────┬───────┬───────┘

&#x20;                               │       │

&#x20;                 ┌─────────────┘       └──────────────┐

&#x20;                 ▼                                    ▼

&#x20;       ┌──────────────────┐                 ┌──────────────────┐

&#x20;       │   MongoDB Atlas  │                 │    Cloudinary    │

&#x20;       │   Application DB │                 │   Media Storage  │

&#x20;       └──────────────────┘                 └──────────────────┘

```



\---



\# 🛠️ Tech Stack



\## Frontend



| Technology   | Purpose                                |

| ------------ | -------------------------------------- |

| React        | UI development                         |

| Vite         | Frontend tooling and production builds |

| React Router | Client-side routing                    |

| CSS          | Styling and responsive UI              |



\## Backend



| Technology    | Purpose                       |

| ------------- | ----------------------------- |

| Node.js       | JavaScript runtime            |

| Express.js    | REST API                      |

| Mongoose      | MongoDB object modeling       |

| JWT           | Authentication                |

| bcryptjs      | Password hashing              |

| dotenv        | Environment configuration     |

| Helmet        | Security-related HTTP headers |

| CORS          | Cross-origin API access       |

| Morgan        | HTTP request logging          |

| Cookie Parser | Cookie handling               |



\## Database \& Storage



| Technology    | Purpose             |

| ------------- | ------------------- |

| MongoDB Atlas | Database            |

| Cloudinary    | Image/media storage |



\## Deployment



| Technology | Purpose                            |

| ---------- | ---------------------------------- |

| Vercel     | Production deployment              |

| GitHub     | Source control and project hosting |



\---



\# 📁 Project Structure



```text

Abtalks/

│

├── backend/

│   ├── api/

│   │   └── index.js

│   │

│   └── src/

│       ├── config/

│       │   └── env.js

│       │

│       ├── controllers/

│       │   └── auth.controller.js

│       │

│       ├── database/

│       │   └── db.js

│       │

│       ├── middlewares/

│       │   └── auth.middleware.js

│       │

│       ├── models/

│       │

│       ├── routes/

│       │   └── auth.routes.js

│       │

│       ├── app.js

│       └── server.js

│

├── public/

│

├── src/

│   ├── components/

│   │   └── ProtectedRoute.jsx

│   │

│   ├── pages/

│   │   ├── Dashboard.jsx

│   │   ├── Login.jsx

│   │   ├── Signup.jsx

│   │   └── ChallengeDay.jsx

│   │

│   ├── App.jsx

│   ├── App.css

│   └── index.css

│

├── .gitignore

├── package.json

├── vite.config.js

├── vercel.json

├── README.md

└── PROMPTS.md

```



\---



\# 🔑 Authentication Flow



ABTalks uses JWT-based authentication.



\### Registration



```text

User

&#x20;│

&#x20;▼

Signup Form

&#x20;│

&#x20;▼

POST /api/v1/auth/register

&#x20;│

&#x20;▼

Express Controller

&#x20;│

&#x20;▼

Password Hashing

&#x20;│

&#x20;▼

MongoDB

&#x20;│

&#x20;▼

User Created

```



\### Login



```text

User

&#x20;│

&#x20;▼

Login Form

&#x20;│

&#x20;▼

POST /api/v1/auth/login

&#x20;│

&#x20;▼

Verify Credentials

&#x20;│

&#x20;▼

Generate JWT

&#x20;│

&#x20;▼

Frontend Stores Authentication State

&#x20;│

&#x20;▼

Dashboard

```



\### Protected Route



```text

Request

&#x20;  │

&#x20;  ▼

JWT Token

&#x20;  │

&#x20;  ▼

Authentication Middleware

&#x20;  │

&#x20;  ├── Invalid → Unauthorized

&#x20;  │

&#x20;  └── Valid

&#x20;        │

&#x20;        ▼

&#x20;     Controller

&#x20;        │

&#x20;        ▼

&#x20;     Response

```



\---



\# 🔌 API Endpoints



\## Authentication



\### Register



```http

POST /api/v1/auth/register

```



Example request:



```json

{

&#x20; "fullName": "John Doe",

&#x20; "email": "john@example.com",

&#x20; "password": "123456"

}

```



\### Login



```http

POST /api/v1/auth/login

```



Example request:



```json

{

&#x20; "email": "john@example.com",

&#x20; "password": "123456"

}

```



\### Current User



```http

GET /api/v1/auth/me

```



Requires authentication.



\### Progress



```http

GET /api/v1/progress

```



\### Proofs



```http

POST /api/v1/proofs

```



\---



\# ⚙️ Environment Variables



Create the required environment variables locally.



\### Backend



```env

PORT=5001



MONGODB\_URI=your\_mongodb\_connection\_string



JWT\_SECRET=your\_jwt\_secret



JWT\_EXPIRES\_IN=7d



CLOUDINARY\_CLOUD\_NAME=your\_cloudinary\_cloud\_name

CLOUDINARY\_API\_KEY=your\_cloudinary\_api\_key

CLOUDINARY\_API\_SECRET=your\_cloudinary\_api\_secret



NODE\_ENV=development

```



\### Frontend



```env

VITE\_API\_URL=http://localhost:5001

```



For production, the frontend uses the deployed API origin through:



```env

VITE\_API\_URL=https://abtalks-teal.vercel.app

```



> \*\*Never commit real credentials or secrets to GitHub.\*\*



\---



\# 🚀 Local Development



\## 1. Clone the repository



```bash

git clone https://github.com/rocky62077/Abtalks.git

cd Abtalks

```



\## 2. Install frontend dependencies



```bash

npm install

```



\## 3. Install backend dependencies



```bash

cd backend

npm install

cd ..

```



\## 4. Configure environment variables



Create the appropriate `.env` files and add your MongoDB, JWT, and Cloudinary configuration.



\## 5. Start the backend



```bash

cd backend

npm run dev

```



The backend runs locally on:



```text

http://localhost:5001

```



\## 6. Start the frontend



Open another terminal:



```bash

npm run dev

```



Vite will provide the local frontend URL.



\---



\# 🧪 Production Testing



The production API was tested directly against the deployed Vercel application.



Example registration request:



```http

POST /api/v1/auth/register

```



The production server successfully returned:



```json

{

&#x20; "success": true,

&#x20; "statusCode": 201,

&#x20; "message": "User registered successfully"

}

```



This verified the complete production flow:



```text

Frontend

&#x20;  ↓

Vercel

&#x20;  ↓

Express API

&#x20;  ↓

Authentication Controller

&#x20;  ↓

MongoDB Atlas

```



\---



\# 🐛 Deployment Challenges Solved



During deployment, several production issues were encountered and resolved.



\## 1. Localhost API in Production



Initially, the frontend attempted to call:



```text

http://localhost:5001

```



This works locally but cannot reach the developer's machine from a deployed website.



\### Solution



The frontend was changed to use:



```js

import.meta.env.VITE\_API\_URL

```



Production requests now target the deployed backend.



\---



\## 2. Vercel API Routing



The Express backend needed to be exposed through Vercel's serverless environment.



A Vercel configuration was added to route:



```text

/api/\*

```



to the backend API function.



\---



\## 3. MongoDB Connection Timeout



The deployed API initially produced:



```text

Operation `users.findOne()` buffering timed out after 10000ms

```



The database connection was adapted for the Vercel serverless environment.



The application now:



\* Reuses an existing Mongoose connection when available

\* Establishes a connection before processing API requests

\* Uses a connection timeout

\* Properly propagates connection errors



\---



\## 4. SPA Static Asset Routing



The Vercel routing configuration was also adjusted so that existing frontend assets are served correctly before falling back to the React application.



This prevented JavaScript assets from incorrectly receiving the application's HTML response.



\---



\# 🔒 Security



The project follows several basic security practices:



\* Passwords are hashed using bcrypt

\* Authentication uses JWT

\* Protected routes verify authentication

\* Sensitive configuration is stored in environment variables

\* Helmet is used for security-related HTTP headers

\* CORS is configured for API access

\* Secrets are excluded from source control



\### Never commit:



```text

.env

.env.\*

```



\---



\# 📈 Future Improvements



Potential future improvements include:



\* \[ ] HTTP-only cookie-based authentication

\* \[ ] Refresh-token rotation

\* \[ ] Email verification

\* \[ ] Password reset

\* \[ ] Better session management

\* \[ ] Challenge streak visualization

\* \[ ] Leaderboard

\* \[ ] Public builder profiles

\* \[ ] GitHub proof verification

\* \[ ] LinkedIn proof integration

\* \[ ] Notifications

\* \[ ] Admin dashboard

\* \[ ] Automated tests

\* \[ ] API documentation with Swagger/OpenAPI

\* \[ ] CI/CD checks with GitHub Actions



\---



\# 🤖 AI-Assisted Development



ABTalks was developed using an iterative AI-assisted development workflow.



AI assistance was used for:



\* Architecture planning

\* UI development

\* Backend API implementation

\* Authentication implementation

\* Debugging

\* Deployment configuration

\* MongoDB connection troubleshooting

\* Vercel configuration

\* Production debugging

\* Documentation



The development process was iterative:



```text

Idea

&#x20;↓

Architecture

&#x20;↓

Implementation

&#x20;↓

Local Testing

&#x20;↓

Deployment

&#x20;↓

Production Error

&#x20;↓

Debugging

&#x20;↓

Fix

&#x20;↓

Production Testing

```



The project's AI-development prompts and workflow are documented separately in:



```text

PROMPTS.md

```



\---



\# 🎯 Project Goal



ABTalks is built around one idea:



> \*\*Consistency creates proof.\*\*



A person can say they are learning to code.



A portfolio can say they know a technology.



But a visible history of things actually built provides much stronger evidence.



ABTalks aims to turn daily learning into a measurable and visible building journey.



\---



\# 📸 Project Highlights



\### Landing / Challenge



Users can understand the purpose of the 60-day challenge and begin their journey.



\### Authentication



Users can securely create an account and log in.



\### Dashboard



Authenticated users can view their challenge information and progress.



\### Challenge Day



Users can work through individual challenge days and submit proof.



\---



\# 🏆 Submission Links



| Resource      | Link                                                       |

| ------------- | ---------------------------------------------------------- |

| 🌐 Live Demo  | https://abtalks-teal.vercel.app/                           |

| 📊 Dashboard  | https://abtalks-teal.vercel.app/dashboard                  |

| 💻 GitHub     | https://github.com/rocky62077/Abtalks                      |

| 🤖 AI Prompts | https://github.com/rocky62077/Abtalks/blob/main/PROMPTS.md |



\---



\# 👨‍💻 Developer



\*\*Vicky Kumar\*\*



Built as a full-stack web development project using modern JavaScript technologies and AI-assisted development.



\---



\## ⭐ If you like the project



Give the repository a ⭐ on GitHub and feel free to explore, fork, and improve it.



\---



\*\*ABTalks — Build every day. Track your progress. Show your proof. 🚀\*\*



