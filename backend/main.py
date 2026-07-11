from fastapi import FastAPI
from app.api.upload import router as upload_router

app = FastAPI(
    title="AI Resume Analyzer",
    version="0.4.0"
)

app.include_router(upload_router)