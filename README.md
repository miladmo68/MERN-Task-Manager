
# MERN Task Manager Portfolio Project

A modern full-stack task manager built with the MERN stack and styled with TailwindCSS and daisyUI.

---

## 🔧 Tech Stack

**Front-end**
- React 18 (with Vite)
- TailwindCSS 3
- DaisyUI
- Axios

**Back-end**
- Node.js & Express
- MongoDB with Mongoose
- dotenv, CORS

---

## 📁 Folder Structure

```
mern-portfolio-project/
├── front/      # React frontend (Vite)
└── back/       # Express + Mongo backend
```

---

## ✅ Prerequisites

- Node.js ≥ 18 installed
- MongoDB (running locally or MongoDB Atlas)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd mern-portfolio-project
```

### 2. Set up the Back-end

```bash
cd back
cp .env.example .env  # Replace with your Mongo URI if needed
npm install           # Install dependencies
npm run dev           # Start the Express server (default: http://localhost:5000)
```

### 3. Set up the Front-end

```bash
cd ../front
npm install           # Install dependencies
npm run dev           # Start Vite dev server (default: http://localhost:5173)
```

---

## 🧪 Environment Variables

In the `/back` folder, create a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/mern_portfolio_tasks
PORT=5000
```

---

## 🔒 .gitignore

Add the following to `.gitignore` in both `front/` and `back/`:

```
node_modules/
.env
dist/
```

---

## 🌐 Visit App

Once both servers are running:

- Front-end: http://localhost:5173
- Back-end API: http://localhost:5000/api/tasks

---

## 🛰 Deployment Tips

- Front-end → Vercel or Netlify
- Back-end → Render, Fly.io, or Railway
- Make sure to set environment variables in deployment dashboards

---

## 🙌 Features

- Create & delete tasks
- Responsive UI with daisyUI
- RESTful API
- MongoDB for persistence

---

## 📸 Preview

Coming soon: Add a screenshot or link to deployed demo.

Happy coding!
