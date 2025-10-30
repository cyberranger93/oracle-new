// Vercel Serverless Function for Blog API
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Mock blog post data matching the backend server.py structure
    const blogPosts = [
      {
        id: 1,
        title: "The Art of Marble Selection",
        excerpt: "Choosing the right marble for your project is crucial for both aesthetics and longevity.",
        content: "When selecting marble for your construction or renovation project, there are several key factors to consider...",
        author: "Sarah Chen",
        date: "2025-01-15",
        category: "Materials"
      },
      {
        id: 2,
        title: "Sustainable Construction Practices",
        excerpt: "How Oracle Project Group integrates eco-friendly practices into every build.",
        content: "Sustainability is no longer optional in modern construction. Here's how we're making a difference...",
        author: "Mike Johnson",
        date: "2025-01-10",
        category: "Sustainability"
      },
      {
        id: 3,
        title: "Toronto's Heritage Buildings",
        excerpt: "Preserving architectural history while modernizing infrastructure.",
        content: "Toronto's heritage buildings tell the story of our city's past. Here's how we help preserve them...",
        author: "Elena Rodriguez",
        date: "2025-01-05",
        category: "Heritage"
      }
    ];

    return res.status(200).json(blogPosts);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
