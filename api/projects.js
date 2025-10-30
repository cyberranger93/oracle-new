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
    // Mock project data matching the backend server.py structure
    const projects = [
      {
        id: 1,
        title: "Luxury Marble Foyer Installation",
        description: "Custom Italian marble installation for a high-end residential foyer.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        category: "Residential"
      },
      {
        id: 2,
        title: "Commercial Office Fit-Out",
        description: "Complete fit-out of a 10,000 sq ft commercial office space.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
        category: "Commercial"
      },
      {
        id: 3,
        title: "Heritage Building Restoration",
        description: "Careful restoration of marble work in a historic Toronto building.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        category: "Restoration"
      }
    ];

    return res.status(200).json(projects);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
