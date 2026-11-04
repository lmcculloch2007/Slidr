from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()

@app.get("/")
def home():
    return{
        "message": "Slidr python server is working"
    }


class ReviewRequest(BaseModel):
    review: str

@app.post("/analyze")
def analyze_review(data: ReviewRequest):
    return{
        "message": "Review received successfully",
        "review": data.review
    }