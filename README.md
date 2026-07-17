# AI Resume ↔ JD Matcher

An AI-powered full-stack web application that analyzes how well a resume matches a given job description. Upload a PDF resume and paste a job description to receive an instant ATS-style match score, a list of missing keywords, and personalized suggestions for improvement — powered by the Groq LLM API.

---

## 🚀 Features

- 🔐 **User Authentication** — Secure registration and login using JWT-based authentication
- 📄 **Resume Upload** — Upload resumes in PDF format via a simple drag-and-drop style interface
- 🧠 **AI-Powered Analysis** — Uses the Groq LLM API to compare resume content against a job description
- 📊 **Match Score** — Get an instant percentage match score, visually displayed
- 🔍 **Missing Keywords Detection** — Identifies key skills/terms present in the JD but missing from the resume
- 💡 **Actionable Suggestions** — AI-generated tips to improve resume alignment with the job description
- 🕓 **Analysis History** — View past resume analyses saved to your account
- 🛡️ **Protected Routes** — Backend routes secured with JWT middleware; frontend routes guarded against unauthenticated access

---

## 🛠️ Tech Stack

**Frontend**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken) for authentication
- bcryptjs for password hashing
- Multer for file uploads
- pdf-parse for PDF text extraction
- Groq SDK (LLM API) for AI-powered resume analysis

---

## 📁 Project Structure

```
resume-jd-matcher/
├── client/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable UI components (e.g. Navbar)
│   │   ├── pages/              # Login, Register, Dashboard, History, NotFound
│   │   ├── services/           # Axios API instance
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Node/Express backend
│   ├── config/                 # Database connection config
│   ├── controllers/            # authController.js, resumeController.js
│   ├── middleware/             # authMiddleware, uploadMiddleware, errorMiddleware
│   ├── models/                 # User, ResumeAnalysis Mongoose schemas
│   ├── routes/                 # authRoutes.js, resumeRoutes.js
│   ├── services/               # analysisService.js, llmService.js, pdfParser.js
│   ├── uploads/                # Temporary storage for uploaded PDFs (gitignored)
│   ├── utils/
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local instance or MongoDB Atlas)
- A Groq API key ([console.groq.com](https://console.groq.com))

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/resume-jd-matcher.git
cd resume-jd-matcher
```

### 2. Install backend dependencies
```bash
cd server
npm install
```

### 3. Install frontend dependencies
```bash
cd ../client
npm install
```

### 4. Set up environment variables
See [Environment Variables](#-environment-variables) below.

### 5. Run the backend
```bash
cd server
npm run dev
```
Server runs on `http://localhost:5000`

### 6. Run the frontend
```bash
cd client
npm run dev
```
Frontend runs on `http://localhost:5173` (default Vite port)

---

## 🔑 Environment Variables

Create a `.env` file inside the `server/` directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GROQ_API_KEY=your_groq_api_key
```

> ⚠️ Never commit your `.env` file. It is excluded via `.gitignore`.

---

## 📸 Screenshots

| Login | Dashboard | Analysis Result |
|<img width="824" height="703" alt="image" src="https://github.com/user-attachments/assets/b9d193b6-26a3-4fad-9d53-bb59220e260b" />
|
| _add screenshot_ | <img width="1394" height="889" alt="image" src="https://github.com/user-attachments/assets/657301d6-a060-42e9-9942-b032f4909b79" />
 | <img width="1444" height="850" alt="image" src="https://github.com/user-attachments/assets/7ca878fa-ee09-466e-b5ff-10f0242103eb" />
 |

---

## 📡 API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint | Description | Protected |
|--------|----------|--------------|-----------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Log in and receive a JWT | No |

### Resume Routes (`/api/resume`)

| Method | Endpoint | Description | Protected |
|--------|----------|--------------|-----------|
| POST | `/api/resume/upload` | Upload a resume PDF + job description for AI analysis | Yes (JWT) |
| GET | `/api/resume/history` | Retrieve all past resume analyses | Yes (JWT) |

**Example: Upload Request**
```
POST /api/resume/upload
Headers: Authorization: Bearer <token>
Body: multipart/form-data
  - resume: <PDF file>
  - jobDescription: <string>
```

**Example: Upload Response**
```json
{
  "success": true,
  "message": "Resume analyzed successfully",
  "analysis": {
    "_id": "...",
    "matchScore": 92,
    "missingKeywords": ["Mongoose"],
    "suggestions": [
      "Highlight Mongoose experience.",
      "Emphasize MongoDB database management."
    ]
  }
}
```

---

## 🧩 How It Works

1. User registers/logs in and receives a JWT token
2. User uploads a resume PDF and pastes a job description
3. Backend extracts text from the PDF using `pdf-parse`
4. Extracted resume text + job description are sent to the Groq LLM API
5. The AI returns a structured match score, missing keywords, and suggestions
6. Results are saved to MongoDB and displayed on the dashboard
7. Users can revisit past analyses via the History page

---

## 🎯 Future Improvements

- Export analysis results as a downloadable PDF report
- Highlight matched keywords alongside missing ones
- Support for `.docx` resume uploads
- Resume version comparison over time

---

## 👤 Author

**Aarti Singh**
B.Tech Computer Science, Madan Mohan Malaviya University of Technology
[GitHub](https://github.com/an04jali) • [LinkedIn](https://www.linkedin.com/in/aarti-singh-355b7b1a3/) • [Portfolio](https://my-portfolio-or5g.vercel.app/)
