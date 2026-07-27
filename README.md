# PitchPPT - AI Presentation Generator

PitchPPT is an AI-powered web application with two core features:

1. **Chat with Agent** — Talk directly with an AI agent to ask questions, brainstorm, or get help.
2. **AI PPT Generator** — Give the AI a topic, and it will automatically generate a presentation (PPT) for you.

🔗 **Live App:** [PitchPPT - AI Presentation Generator](https://pitch-ppt-nine.vercel.app/)

---

## ✨ Features

- 💬 **Conversational AI Agent** — Chat interface powered by CrewAI agents for natural, helpful conversations.
- 📊 **Topic-to-PPT Generation** — Enter any topic and get a ready-to-use presentation generated automatically.
- ⚡ **Fast, lightweight backend** — Built with FastAPI for quick request handling.
- 🎨 **Modern UI** — React-based frontend for a smooth, responsive user experience.

---

## 🛠️ Tech Stack

| Layer      | Technology       |
|------------|------------------|
| Frontend   | React            |
| Backend    | FastAPI (Python) |
| AI Agents  | CrewAI           |
| Hosting    | Vercel (Frontend) |

---

## 🏗️ Architecture

```
[React UI] --HTTP request--> [FastAPI Backend] --calls--> [CrewAI Agents] --response--> [FastAPI] --JSON--> [React UI]
```

- The **frontend** sends user input (chat message or PPT topic) to the backend.
- The **backend** (FastAPI) routes the request to the appropriate CrewAI agent/task.
- CrewAI processes the request and returns a result (chat reply or generated presentation content).
- The backend sends the result back to the frontend as JSON, which is rendered in the UI.

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- UV / npm

### Backend Setup

```bash
# Clone the repository
git clone https://github.com/shadmanchhapekar03/PitchPPT/
cd <your-repo-folder>

# Install dependencies
pip install -r requirements.txt --break-system-packages

# Run the FastAPI server
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`, with interactive docs at `http://localhost:8000/docs`.

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

---

## 📡 API Endpoints

| Endpoint      | Method | Description                              |
|---------------|--------|-------------------------------------------|
| `/chat`       | POST   | Send a message and get an AI agent reply  |
| `/chat`       | POST | Send a topic and get a generated presentation |

---

## 📬 Contact / Server Access

If you need to access, deploy on, or manage the backend server for this project, please reach out:

📧 **Email:** shadmannc0516@gmail.com

---

## 📄 License

This project is open for personal and educational use. Please contact the author before using it for commercial purposes.
