from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

import requests
import os

# Load .env file
load_dotenv()

app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://news-fetcher-alpha.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Read API key from .env
API_KEY = os.getenv("NEWS_API_KEY")


@app.get("/news")
def get_news(topic: str):

    url = (
        f"https://newsapi.org/v2/everything?"
        f"q={topic}&apiKey={API_KEY}"
    )

    response = requests.get(url)

    data = response.json()

    return data