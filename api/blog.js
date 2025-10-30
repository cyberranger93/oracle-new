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
    // Comprehensive mock blog post data - permanent local API
    const blogPosts = [
      {
        id: 1,
        title: "The Art of Marble Selection",
        excerpt: "Choosing the right marble for your project is crucial for both aesthetics and longevity.",
        content: "When selecting marble for your construction or renovation project, there are several key factors to consider. First, understand the different types of marble available - Carrara, Calacatta, and Statuario each have unique characteristics. Consider the location where the marble will be installed, as different grades are suitable for floors, walls, or countertops. Pay attention to the veining patterns and color consistency across slabs. At Oracle Project Group, we source premium marble from trusted quarries and help clients choose materials that will stand the test of time while complementing their design vision.",
        author: "Sarah Chen",
        date: "2025-01-15",
        category: "Materials",
        image: "/images/blog/marble-selection.jpg",
        tags: ["marble", "materials", "design", "renovation"]
      },
      {
        id: 2,
        title: "Sustainable Construction Practices",
        excerpt: "How Oracle Project Group integrates eco-friendly practices into every build.",
        content: "Sustainability is no longer optional in modern construction. At Oracle Project Group, we've implemented comprehensive green building practices across all our projects. This includes using recycled materials where possible, minimizing waste through precise planning and prefabrication, implementing energy-efficient systems, and selecting low-VOC finishes. We work with LEED-certified suppliers and ensure proper disposal of construction waste. Our commitment to sustainability doesn't compromise quality - instead, it enhances the long-term value and efficiency of every structure we build. Recent projects have achieved up to 40% energy savings compared to conventional construction methods.",
        author: "Mike Johnson",
        date: "2025-01-10",
        category: "Sustainability",
        image: "/images/blog/sustainable-construction.jpg",
        tags: ["sustainability", "green building", "eco-friendly", "LEED"]
      },
      {
        id: 3,
        title: "Toronto's Heritage Buildings",
        excerpt: "Preserving architectural history while modernizing infrastructure.",
        content: "Toronto's historic buildings tell the story of our city's evolution. Renovating heritage properties requires a delicate balance between preservation and modernization. At Oracle Project Group, we specialize in heritage restoration projects that honor original architectural details while upgrading structural systems, electrical, plumbing, and HVAC to meet modern standards. We work closely with heritage committees and use traditional craftsmanship techniques alongside contemporary technology. Our recent restoration of a 1920s bank building in Old Toronto showcased our ability to preserve ornate plasterwork and original marble while creating a functional modern office space. These projects require patience, expertise, and a deep respect for architectural history.",
        author: "James Wilson",
        date: "2025-01-05",
        category: "Heritage",
        image: "/images/blog/heritage-buildings.jpg",
        tags: ["heritage", "restoration", "Toronto", "architecture"]
      },
      {
        id: 4,
        title: "Modern Office Design Trends",
        excerpt: "Creating workspaces that inspire productivity and collaboration.",
        content: "The modern workplace has evolved dramatically, and office design must adapt to support hybrid work models, collaboration, and employee wellbeing. Current trends include flexible spaces that can be easily reconfigured, biophilic design elements that bring nature indoors, acoustic solutions for noise management, and technology integration for seamless hybrid meetings. We're seeing increased demand for wellness rooms, collaborative zones with comfortable seating, and private focus areas. Natural light, ergonomic furniture, and sustainable materials are no longer luxury features but essential components. Oracle Project Group has completed numerous office renovations that transform outdated spaces into inspiring environments that attract and retain top talent.",
        author: "Emma Rodriguez",
        date: "2024-12-28",
        category: "Commercial",
        image: "/images/blog/office-design.jpg",
        tags: ["office design", "commercial", "workplace", "trends"]
      },
      {
        id: 5,
        title: "Kitchen Renovation Essentials",
        excerpt: "Key considerations for a successful kitchen remodel that adds value.",
        content: "A kitchen renovation is one of the most impactful home improvements you can make. Start with a realistic budget that includes a 15-20% contingency for unexpected issues. Focus on the work triangle - the relationship between sink, stove, and refrigerator. Invest in quality cabinetry with soft-close mechanisms and maximize storage with pull-out organizers and corner solutions. Choose durable countertops like quartz or granite. Don't skimp on lighting - layer ambient, task, and accent lighting for functionality and ambiance. Consider appliance placement and ensure adequate electrical capacity. At Oracle Project Group, we manage every detail from design through installation, coordinating plumbing, electrical, cabinetry, and finishing trades to deliver kitchens that are both beautiful and functional.",
        author: "David Park",
        date: "2024-12-20",
        category: "Residential",
        image: "/images/blog/kitchen-renovation.jpg",
        tags: ["kitchen", "renovation", "residential", "home improvement"]
      },
      {
        id: 6,
        title: "Building Permit Navigation Guide",
        excerpt: "Understanding Toronto's building permit process and requirements.",
        content: "Navigating Toronto's building permit process can seem daunting, but proper preparation makes it manageable. Permits are required for structural changes, additions, new construction, and significant renovations. The process involves submitting detailed drawings, engineering reports, and applications to the City of Toronto. Review times vary from 4-12 weeks depending on project complexity. Common requirements include site plans, architectural drawings, structural calculations, HVAC design, and energy efficiency calculations. Working with experienced contractors like Oracle Project Group ensures your application is complete and compliant. We handle permit coordination as part of our project management services, liaising with city officials and making revisions as needed. Proper permitting protects your investment and ensures work meets building code requirements.",
        author: "Lisa Thompson",
        date: "2024-12-15",
        category: "Regulations",
        image: "/images/blog/building-permits.jpg",
        tags: ["permits", "regulations", "Toronto", "building code"]
      },
      {
        id: 7,
        title: "Waterproofing Best Practices",
        excerpt: "Protecting your investment from water damage and moisture intrusion.",
        content: "Water damage is one of the most costly issues in construction and renovation. Proper waterproofing is essential for basements, bathrooms, balconies, and foundations. Key strategies include installing quality drainage systems, using waterproof membranes in wet areas, ensuring proper grading around foundations, and maintaining roof and gutter systems. In bathrooms, use cement board or waterproof drywall, apply waterproof membranes before tiling, and ensure proper shower pan installation. For basements, exterior waterproofing during construction is ideal, but interior solutions can be effective for existing structures. Oracle Project Group uses proven waterproofing systems and conducts thorough inspections to identify potential moisture issues. Investing in proper waterproofing during construction or renovation saves thousands in future repairs and protects your property's structural integrity.",
        author: "Robert Martinez",
        date: "2024-12-08",
        category: "Technical",
        image: "/images/blog/waterproofing.jpg",
        tags: ["waterproofing", "moisture control", "basements", "prevention"]
      },
      {
        id: 8,
        title: "Smart Home Integration in Construction",
        excerpt: "Building technology infrastructure for modern connected homes.",
        content: "Smart home technology is rapidly becoming standard in new construction and major renovations. Planning for smart home integration during the construction phase ensures proper infrastructure is in place. Key considerations include robust WiFi coverage with ethernet backhaul, centralized control panels, adequate electrical capacity, and conduit for future upgrades. Popular integrations include smart thermostats, automated lighting systems, security cameras, smart locks, and voice assistants. Consider placement of devices for optimal coverage and user experience. Oracle Project Group works with technology specialists to design and implement smart home systems that are user-friendly and future-proof. We ensure all wiring and infrastructure meets current standards while allowing flexibility for emerging technologies. A well-planned smart home system enhances comfort, security, and energy efficiency.",
        author: "Jennifer Lee",
        date: "2024-12-01",
        category: "Technology",
        image: "/images/blog/smart-home.jpg",
        tags: ["smart home", "technology", "automation", "modern construction"]
      },
      {
        id: 9,
        title: "Choosing the Right Contractor",
        excerpt: "Essential questions to ask before hiring a construction contractor.",
        content: "Selecting the right contractor is crucial for project success. Start by verifying licenses, insurance, and WSIB coverage. Ask for references and visit completed projects if possible. Review their portfolio to ensure experience with similar projects. Discuss their project management approach, communication style, and how they handle changes and challenges. Get detailed written quotes that break down costs and include a clear scope of work. Verify they pull permits and follow building codes. Ask about their subcontractor relationships and quality control processes. Timeline expectations should be realistic and documented. At Oracle Project Group, we provide transparent pricing, detailed contracts, and regular communication throughout every project. Our track record of completed projects and client testimonials demonstrate our commitment to quality and professionalism. A good contractor partnership makes the difference between a stressful experience and a successful transformation.",
        author: "Michael Chang",
        date: "2024-11-25",
        category: "Business",
        image: "/images/blog/choosing-contractor.jpg",
        tags: ["contractor selection", "hiring", "project management", "tips"]
      },
      {
        id: 10,
        title: "Basement Finishing Complete Guide",
        excerpt: "Transform unused space into valuable living area with proper planning.",
        content: "Finishing a basement adds significant living space and property value. Start by addressing moisture issues - basements must be dry before finishing. Install proper insulation using products designed for below-grade applications. Plan electrical and HVAC to ensure adequate service and comfort. Consider ceiling height requirements (minimum 7 feet in most areas) and egress requirements for bedrooms. Choose moisture-resistant materials including vinyl or engineered flooring, mold-resistant drywall, and appropriate trim. Plan lighting carefully as basements often lack natural light. Include storage solutions and think about future flexibility. Ensure proper permits are obtained. Oracle Project Group specializes in basement renovations, creating bright, comfortable spaces perfect for family rooms, home offices, gyms, or rental units. Our expertise in building science ensures your finished basement is healthy, comfortable, and code-compliant for decades to come.",
        author: "Amanda Foster",
        date: "2024-11-18",
        category: "Residential",
        image: "/images/blog/basement-finishing.jpg",
        tags: ["basement", "renovation", "finishing", "home addition"]
      }
    ];

    return res.status(200).json({
      success: true,
      posts: blogPosts,
      count: blogPosts.length
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
