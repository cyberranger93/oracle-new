// Vercel Serverless Function - Always-On Backend Endpoint
// This function never sleeps and is available 24/7 on Vercel's free tier

module.exports = async (req, res) => {
  // Enable CORS for frontend access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle GET requests
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'success',
      message: 'Backend endpoint is active',
      timestamp: new Date().toISOString(),
      uptime: 'always-on'
    });
  }

  // Handle POST requests
  if (req.method === 'POST') {
    const body = req.body;
    return res.status(200).json({
      status: 'success',
      message: 'Data received',
      data: body,
      timestamp: new Date().toISOString()
    });
  }

  // Handle other methods
  return res.status(405).json({
    status: 'error',
    message: 'Method not allowed'
  });
};
