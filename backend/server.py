from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ContactInquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    projectType: str
    budget: Optional[str] = None
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class ContactInquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    projectType: str
    budget: Optional[str] = None
    message: str

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    image: str
    category: str
    location: str
    year: str

class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    image: str
    date: datetime
    readTime: int

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Oracle Project Group API"}

# Contact Routes
@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact_inquiry(input: ContactInquiryCreate):
    inquiry_dict = input.dict()
    inquiry_obj = ContactInquiry(**inquiry_dict)
    await db.contact_inquiries.insert_one(inquiry_obj.dict())
    
    # Mock email sending (in production, use Resend API)
    logger.info(f"Contact inquiry from {inquiry_obj.name} ({inquiry_obj.email})")
    logger.info(f"Project Type: {inquiry_obj.projectType}, Phone: {inquiry_obj.phone}")
    logger.info(f"Message: {inquiry_obj.message}")
    
    return inquiry_obj

@api_router.get("/contact", response_model=List[ContactInquiry])
async def get_contact_inquiries():
    inquiries = await db.contact_inquiries.find().sort("timestamp", -1).to_list(100)
    return [ContactInquiry(**inquiry) for inquiry in inquiries]

# Projects Routes
@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    projects = await db.projects.find().to_list(100)
    if not projects:
        # Return mock projects if none exist
        mock_projects = [
            {
                "id": str(uuid.uuid4()),
                "title": "Downtown Toronto Office Tower",
                "description": "Complete interior fit-out for a 50,000 sq ft commercial office space in Toronto's financial district.",
                "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85",
                "category": "Interior Fit-Out",
                "location": "Toronto, ON",
                "year": "2024"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Luxury Hotel Lobby Renovation",
                "description": "Premium marble installation and complete lobby transformation for a 5-star hotel in Mississauga.",
                "image": "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85",
                "category": "Marble & Stone",
                "location": "Mississauga, ON",
                "year": "2023"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Tech Campus Design-Build",
                "description": "End-to-end design and construction of a modern tech office campus in Vaughan.",
                "image": "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85",
                "category": "Design-Build",
                "location": "Vaughan, ON",
                "year": "2023"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Corporate Headquarters Renovation",
                "description": "Complete renovation and fit-out of a 30,000 sq ft corporate headquarters with custom marble features.",
                "image": "https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85",
                "category": "Interior Fit-Out",
                "location": "Markham, ON",
                "year": "2024"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Medical Center Construction",
                "description": "New medical center construction with specialized finishes and marble reception areas.",
                "image": "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85",
                "category": "Design-Build",
                "location": "Toronto, ON",
                "year": "2023"
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Retail Complex Fit-Out",
                "description": "High-end retail space interior construction with premium stone and marble installations.",
                "image": "https://images.unsplash.com/photo-1701541985163-0d0d49011bd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYxNjAyMzYxfDA&ixlib=rb-4.1.0&q=85",
                "category": "Marble & Stone",
                "location": "Mississauga, ON",
                "year": "2024"
            }
        ]
        return [Project(**project) for project in mock_projects]
    return [Project(**project) for project in projects]

# Blog Routes
@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts():
    posts = await db.blog_posts.find().sort("date", -1).to_list(100)
    if not posts:
        # Return mock blog posts if none exist
        mock_posts = [
            {
                "id": str(uuid.uuid4()),
                "title": "The Future of Commercial Construction in Toronto",
                "excerpt": "Explore the latest trends shaping commercial construction in the GTA, from sustainable building practices to innovative design solutions.",
                "image": "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85",
                "date": datetime(2024, 12, 15),
                "readTime": 5
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Why Marble & Stone Elevate Commercial Spaces",
                "excerpt": "Discover how premium marble and stone installations can transform ordinary commercial spaces into luxury environments that impress clients.",
                "image": "https://images.unsplash.com/photo-1701541985163-0d0d49011bd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzYxNjAyMzYxfDA&ixlib=rb-4.1.0&q=85",
                "date": datetime(2024, 12, 1),
                "readTime": 7
            },
            {
                "id": str(uuid.uuid4()),
                "title": "Design-Build: Streamlining Your Construction Project",
                "excerpt": "Learn how the design-build approach can save time, reduce costs, and deliver better results for your commercial construction project.",
                "image": "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjE2MDIzNTd8MA&ixlib=rb-4.1.0&q=85",
                "date": datetime(2024, 11, 20),
                "readTime": 6
            },
            {
                "id": str(uuid.uuid4()),
                "title": "5 Key Considerations for Office Fit-Outs",
                "excerpt": "Essential factors to consider when planning your commercial office fit-out to ensure functionality, aesthetics, and employee satisfaction.",
                "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxjb21tZXJjaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc2MTYwMjM1M3ww&ixlib=rb-4.1.0&q=85",
                "date": datetime(2024, 11, 5),
                "readTime": 8
            }
        ]
        return [BlogPost(**post) for post in mock_posts]
    return [BlogPost(**post) for post in posts]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()