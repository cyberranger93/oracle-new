// Vercel Serverless Function for Projects API
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Expanded project data with all required fields
    const projects = [
      {
        id: 1,
        title: "Luxury Marble Foyer Installation",
        description: "Custom Italian marble installation for a high-end residential foyer featuring Calacatta Gold marble with intricate inlay patterns and custom lighting integration.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        category: "Residential",
        client: "Private Residence",
        location: "Toronto, ON",
        date: "2024-12-15",
        duration: "6 weeks",
        status: "Completed",
        technologies: ["Italian Marble", "Custom Inlay", "LED Lighting", "Waterproofing"],
        tags: ["luxury", "marble", "residential", "custom-design"]
      },
      {
        id: 2,
        title: "Commercial Office Fit-Out",
        description: "Complete fit-out of a 10,000 sq ft commercial office space with modern finishes, open floor plan, and sustainable materials throughout.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
        category: "Commercial",
        client: "Tech Innovations Inc.",
        location: "Downtown Toronto, ON",
        date: "2024-11-20",
        duration: "12 weeks",
        status: "Completed",
        technologies: ["Acoustic Panels", "Glass Partitions", "Smart Lighting", "HVAC Systems"],
        tags: ["commercial", "office", "modern", "sustainable"]
      },
      {
        id: 3,
        title: "Heritage Building Restoration",
        description: "Careful restoration of marble work in a historic Toronto building, preserving original craftsmanship while meeting modern building codes and accessibility standards.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        category: "Restoration",
        client: "Toronto Heritage Trust",
        location: "Old Toronto, ON",
        date: "2024-10-10",
        duration: "16 weeks",
        status: "Completed",
        technologies: ["Heritage Marble Restoration", "Stone Cleaning", "Structural Reinforcement", "Period-Appropriate Materials"],
        tags: ["heritage", "restoration", "historic", "preservation"]
      },
      {
        id: 4,
        title: "Modern Condominium Lobby Renovation",
        description: "Contemporary lobby transformation featuring floor-to-ceiling marble walls, custom reception desk, and integrated digital displays for a prestigious downtown condominium.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
        category: "Residential",
        client: "Skyline Properties",
        location: "Toronto, ON",
        date: "2024-09-05",
        duration: "8 weeks",
        status: "Completed",
        technologies: ["Porcelain Tiles", "LED Feature Walls", "Custom Millwork", "Smart Access Systems"],
        tags: ["luxury", "lobby", "modern", "condominium"]
      },
      {
        id: 5,
        title: "Boutique Hotel Interior Fit-Out",
        description: "Elegant interior construction for a 50-room boutique hotel including marble bathrooms, custom woodwork, and high-end finishes in all guest rooms and common areas.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        category: "Hospitality",
        client: "Boutique Hotels Group",
        location: "Yorkville, Toronto, ON",
        date: "2024-08-15",
        duration: "20 weeks",
        status: "Completed",
        technologies: ["Marble Bathrooms", "Hardwood Flooring", "Custom Furniture", "Soundproofing"],
        tags: ["hospitality", "luxury", "hotel", "custom-interiors"]
      },
      {
        id: 6,
        title: "Retail Store Build-Out",
        description: "High-end retail space construction featuring polished concrete floors, custom display fixtures, and sophisticated lighting design for premium brand showcase.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        category: "Commercial",
        client: "Luxury Retail Chain",
        location: "Yorkdale Mall, Toronto, ON",
        date: "2024-07-22",
        duration: "10 weeks",
        status: "Completed",
        technologies: ["Polished Concrete", "Custom Displays", "Track Lighting", "Security Systems"],
        tags: ["retail", "commercial", "luxury", "modern"]
      },
      {
        id: 7,
        title: "University Library Renovation",
        description: "Comprehensive renovation of a 50,000 sq ft university library including new study spaces, technology integration, and sustainable building practices.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
        category: "Institutional",
        client: "University of Toronto",
        location: "Toronto, ON",
        date: "2024-06-30",
        duration: "24 weeks",
        status: "In Progress",
        technologies: ["Acoustic Solutions", "Energy-Efficient HVAC", "Smart Building Systems", "Accessible Design"],
        tags: ["institutional", "education", "sustainable", "renovation"]
      },
      {
        id: 8,
        title: "Medical Clinic Construction",
        description: "State-of-the-art medical clinic build-out with specialized HVAC, medical-grade finishes, and compliance with healthcare facility standards.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
        category: "Healthcare",
        client: "Toronto Medical Group",
        location: "North York, ON",
        date: "2024-05-18",
        duration: "14 weeks",
        status: "Completed",
        technologies: ["Medical-Grade Flooring", "HEPA Filtration", "Antimicrobial Surfaces", "Patient Privacy Systems"],
        tags: ["healthcare", "medical", "institutional", "specialized"]
      }
    ];

    return res.status(200).json(projects);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
