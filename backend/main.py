from fastapi import FastAPI

app = FastAPI(
    title="AI Resume Analyzer",
    version="0.2.0"
)

@app.get("/")
def root():
    return {
        "message": "AI Resume Analyzer API is running 🚀"
    }