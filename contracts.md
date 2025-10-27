# Oracle Project Group - API Contracts & Implementation

## Overview
Full-stack commercial construction company website with multi-page routing, contact forms, project portfolio, and blog functionality.

## Backend API Endpoints

### 1. Root Endpoint
- **GET** `/api/`
- **Response**: `{ "message": "Oracle Project Group API" }`
- **Status**: 200 OK

### 2. Projects Endpoint
- **GET** `/api/projects`
- **Response**: Array of Project objects
- **Project Schema**:
  ```json
  {
    "id": "string (UUID)",
    "title": "string",
    "description": "string",
    "image": "string (URL)",
    "category": "string (Interior Fit-Out | Design-Build | Marble & Stone)",
    "location": "string",
    "year": "string"
  }
  ```
- **Mock Data**: Returns 6 construction projects when database is empty
- **Status**: 200 OK

### 3. Blog Endpoint
- **GET** `/api/blog`
- **Response**: Array of BlogPost objects
- **BlogPost Schema**:
  ```json
  {
    "id": "string (UUID)",
    "title": "string",
    "excerpt": "string",
    "image": "string (URL)",
    "date": "datetime",
    "readTime": "integer (minutes)"
  }
  ```
- **Mock Data**: Returns 4 blog posts when database is empty
- **Status**: 200 OK

### 4. Contact Form Submission
- **POST** `/api/contact`
- **Request Body**:
  ```json
  {
    "name": "string (required)",
    "email": "string (required, valid email)",
    "phone": "string (required)",
    "projectType": "string (required)",
    "budget": "string (optional)",
    "message": "string (required)"
  }
  ```
- **Response**: ContactInquiry object with id and timestamp
- **Validation**: Email format validation via Pydantic EmailStr
- **Status**: 200 OK (success), 422 (validation error)
- **Note**: Currently logs to backend console (mock). Ready for Resend API integration to sarangan@oracleprojectgroup.com

### 5. Contact Inquiries List
- **GET** `/api/contact`
- **Response**: Array of ContactInquiry objects sorted by timestamp (newest first)
- **Status**: 200 OK

## Frontend Pages & Routes

### Pages Structure
1. **Home** (`/`) - Hero section with marble background, services overview, CTA sections
2. **About** (`/about`) - Company overview, stats, core values, team section
3. **Services** (`/services`) - Detailed service pages for 4 main services
4. **Projects** (`/projects`) - Portfolio grid with project cards
5. **Blog** (`/blog`) - Blog post listings with excerpts
6. **Contact** (`/contact`) - Contact form and company information

### Navigation
- Fixed navigation bar with scroll effect
- Mobile responsive hamburger menu
- Active page highlighting

## Design System

### Brand Colors
- **Oracle Blue**: #0074D9 (primary buttons, accents)
- **Oracle Gold**: #C6A45B (secondary accents, underlines)
- **Deep Charcoal**: #0F1115 (text, dark sections)
- **Marble White**: #F6F6F7 (backgrounds)

### Typography
- **Headings**: Cormorant Garamond (serif, elegant)
- **Body**: Inter (sans-serif, modern)

### Components Used
- Shadcn UI components (Button, Input, Textarea, Select)
- Lucide React icons (no emojis)
- Toast notifications for form feedback

## MongoDB Collections

### contact_inquiries
- Stores all contact form submissions
- Indexed by timestamp for sorting

### projects (optional)
- Can store real project data to override mock data

### blog_posts (optional)
- Can store real blog content to override mock data

## Frontend-Backend Integration

### Environment Variables
- **Frontend**: `REACT_APP_BACKEND_URL` - Backend API URL
- **Backend**: `MONGO_URL` - MongoDB connection string

### Data Flow
1. User fills contact form → POST to `/api/contact`
2. Backend validates data → Saves to MongoDB
3. Backend logs inquiry → Returns success response
4. Frontend shows toast notification → Clears form

### Mock Data Strategy
- Backend returns mock data when database is empty
- Allows immediate frontend testing without database setup
- Real data automatically used when available in MongoDB

## SEO & Schema Markup

### Meta Tags
- Title, description, OG tags for each page
- Canonical URLs

### Structured Data
- LocalBusiness schema for company information
- Service schema for construction services
- BlogPosting schema for blog articles

### Contact Information
- **Email**: sarangan@oracleprojectgroup.com
- **Phone**: +1 (416) 555-0123
- **Address**: 123 Marble Ave, Toronto, ON M5V 2T6

## Assets Used
- **Logos**: 3 variations (color with bg, color no bg, black no bg)
- **Images**: High-quality Unsplash images for construction, interiors, marble
- **Hero Background**: Marble texture image (replaced video due to 404)

## Future Enhancements
1. Integrate Resend API for real email notifications
2. Add hCaptcha spam protection to contact form
3. Implement blog post detail pages
4. Add project detail pages with galleries
5. Implement file upload for project inquiries
6. Add Google Analytics and Plausible tracking
7. Create admin panel for content management

## Testing Status
✅ All backend APIs tested and working
✅ Frontend pages rendering correctly
✅ Navigation and routing functional
✅ Contact form validation working
✅ MongoDB integration verified
✅ Mock data system operational
✅ Responsive design implemented
✅ All buttons and CTAs linked correctly

## Notes
- Email sending is currently **MOCKED** (logs to console)
- All project and blog data is **MOCKED** for demo purposes
- Hero section uses static marble image (video URL was 404)
- Form submissions save to MongoDB successfully
- Ready for production deployment with real data and email integration
