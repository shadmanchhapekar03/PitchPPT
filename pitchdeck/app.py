from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
from crew_pitch import pptAssist
from crew_chat import ChatAssist
from fastapi.middleware.cors import CORSMiddleware

ppt_crew = pptAssist()
chat_crew = ChatAssist()

app = FastAPI()

from fastapi.staticfiles import StaticFiles
import os

origins = ["*"]

os.makedirs("generated_files", exist_ok=True)
app.mount("/generated_files", StaticFiles(directory="generated_files"), name="generated_files")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # List of allowed origins
    allow_credentials=True, # Allow credentials such as cookies and authorization headers
    allow_methods=["*"], # Allow all HTTP methods
    allow_headers=["*"], # Allow all HTTP headers
)

class Request(BaseModel):
    user_message: str
    mode: Optional[str] = "chat"

class Response(BaseModel):
    ai_message: str

@app.get("/")
def welcome():
    return {"Welcome I am ShadHero"}

@app.post("/chat",response_model=Response)
def chat(request: Request):

    if request.mode == "chat":
        result = chat_crew.crew().kickoff(inputs={"user_message": request.user_message})
        return Response(ai_message=str(result))
    elif request.mode == "ppt":
        result = ppt_crew.crew().kickoff(inputs={"user_message": request.user_message})
        return Response(ai_message=str(result))
    else:
        raise HTTPException(status_code=400, detail="Invalid Mode")