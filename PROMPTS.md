\# ABTalks — Vibe Coding Prompts



This file documents the prompts and AI-assisted development process used while building ABTalks.



\## 1. Project Understanding



I wanted to build ABTalks as a platform where users can commit to a 60-day challenge, create an account, log in, track their progress, and upload proofs of their work.



The application needed:

\- User registration

\- User login

\- JWT authentication

\- Protected dashboard

\- Progress tracking

\- Proof submission

\- MongoDB database

\- Cloudinary integration

\- Responsive React frontend

\- Production deployment using Vercel



\## 2. Frontend Development



Prompt:



> Build a modern React frontend for ABTalks, a 60-day public building challenge platform. Create a clean landing page, signup page, login page, dashboard, challenge-day experience, progress tracking and proof submission UI.



\## 3. Authentication



Prompt:



> Implement user authentication for ABTalks using React on the frontend and Express on the backend. Add registration, login, JWT authentication, protected routes and a current-user endpoint.



The authentication flow was implemented using:

\- React state

\- Express routes

\- JWT

\- bcryptjs

\- MongoDB/Mongoose

\- Protected API endpoints



\## 4. Backend API



Prompt:



> Create a REST API for ABTalks using Node.js, Express and MongoDB. Organize the backend using routes, controllers, middleware, models and database configuration.



The backend contains API routes for authentication, progress and proofs.



\## 5. Database



Prompt:



> Connect the ABTalks Express backend to MongoDB Atlas using Mongoose. Store users and application data in MongoDB and use environment variables for database credentials.



\## 6. Dashboard



Prompt:



> Build an ABTalks dashboard where an authenticated user can see their challenge progress, streak and relevant challenge information.



\## 7. Challenge Progress



Prompt:



> Add progress tracking to ABTalks so users can track their 60-day challenge progress and submit evidence/proofs for their challenge activities.



\## 8. Proof Uploads



Prompt:



> Add proof submission functionality to ABTalks. Allow authenticated users to submit proof for their challenge progress and integrate Cloudinary for media storage.



\## 9. Production API Configuration



During local development the frontend initially used a localhost backend URL.



Prompt:



> Configure the React/Vite frontend so the backend API URL can be controlled through a VITE\_API\_URL environment variable instead of hardcoding localhost.



The frontend was changed to use:



```js

`${import.meta.env.VITE\_API\_URL}/api/v1/...`

