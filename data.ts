// data.ts


// marqueeCompanies  - Portfolio Marquee

// --- MARQUEE DATA ---
export const marqueeCompanies = [
  { 
    name: "Mintrix Contracting LLC", 
    logo: "/images/logo/mintrix-contracting-logo.png",
    link: "https://mintrixcontracting.com" 
  },
  { 
    name: "Mintrix Maintenance", 
    logo: "/images/logo/mintrix-maintain-logo.png",
    link: "https://mintrixmaintenance.com" 
  },
  { 
    name: "BricketX.pk", 
    logo: "/images/logo/bricketx-pk-logo.png",
    link: "https://bricketx.pk" 
  },
  { 
    // NEW ADDITION
    name: "Mintrix Mining", 
    logo: "/images/logo/mintrix-mining-logo.png",
    link: "https://mintrix-mining.vercel.app/" 
  },
];


// --- PORTFOLIO GRID DATA ---
export const portfolioCompanies = [
  {
    number: "01",
    name: "Mintrix Contracting LLC",
    logo: "/images/logo/mintrix-contracting-logo.png",
    description: "Delivering top-tier construction and contracting solutions with a commitment to uncompromising quality, strict safety standards, and timely execution for commercial and residential projects.",
    features: ["Commercial Construction", "Project Management", "Structural Engineering", "Infrastructure Development"],
    link: "https://mintrixcontracting.com",
    image: "/images/Portfolio/mintrix-contract.png" 
  },
  {
    number: "02",
    name: "Mintrix Maintenance",
    logo: "/images/logo/mintrix-maintenance-logo.png",
    description: "Comprehensive facility management and proactive maintenance services designed to optimize operational efficiency and prolong the lifespan of enterprise physical assets.",
    features: ["Preventative Maintenance", "24/7 Emergency Support", "HVAC & Electrical", "Facility Management"],
    link: "https://mintrixmaintenance.com",
    image: "/images/Portfolio/maintenance1.png"
  },
  {
      number: "03",
    name: "Mintrix Mining",
    logo: "/images/mintrix-mining-logo.png",
    description: "A hub of computational innovation. We build high-performance cryptocurrency and industrial mining infrastructure, bridging raw power with intelligent efficiency for maximum profitability.",
    features: ["Sustainable Energy Integration", "Tier-III Security Protocols", "Optimized Hashrate Performance", "24/7 Technical Response"],
    link: "https://mintrix-mining.vercel.app/",
    image: "/images/Portfolio/mining.png" 
  },
  
  {
    number: "04",
    name: "Bricketx.pk",
    logo: "/images/bricketx-pk-logo.png",
    description: "Our dedicated regional division spearheading digital transformation, tech infrastructure, and localized software solutions for the rapidly expanding Asian market.",
    features: ["Digital Transformation", "Custom Software", "Cloud Infrastructure", "Regional IT Support"],
    link: "https://bricketx.pk",
    image: "/images/Portfolio/bricketx.pk.png"
  },
  

];



export const teamMembers = [
  { name: "Raheel Sajid", role: "Founder & CEO", initials: "SA", image: "/images/team-raheel.jpeg" },
  { name: "Muzzamil Ahmed", role: "Co-Founder / Managing Director", initials: "JD", image: "/images/team-muzzamil.png" },
  //{ name: "Mohammad", role: "Head of Operations", initials: "SC", image: "/images/.jpeg" },

];

export const blogPosts = [
  {
    category: "Corporate",
    title: "Mintrix Contracting secures new commercial project",
    excerpt: "We are expanding our footprint with a major new infrastructure development initiative set to launch this quarter.",
    author: "Raheel",
    date: "Feb 27, 2026",
    image: "/images/blog-1.jpg" 
  },
  {
    category: "Insights",
    title: "The future of sustainable facility maintenance",
    excerpt: "How Mintrix Maintenance is integrating green technologies to reduce carbon footprints across our managed properties.",
    author: "Sarah Connor",
    date: "Feb 20, 2026",
    image: "/images/blog-2.jpg"
  },
  {
    category: "Regional",
    title: "BricketX.pk expands digital service offerings",
    excerpt: "Our specialized regional division announces a new suite of services tailored to the rapidly growing Pakistani market.",
    author: "David Miller",
    date: "Feb 15, 2026",
    image: "/images/blog-3.jpg"
  }
];


// Add this at the bottom of data.ts

export const testimonials = [
  {
    companyRef: "Mintrix Contracting",
    quote: "Mintrix Contracting delivered our commercial headquarters on time and under budget. Their attention to safety and structural integrity is ",
    highlight: "absolutely unmatched.",
    quoteEnd: " Highly recommend for large-scale enterprise projects.",
    author: "Sarah Jenkins",
    role: "VP of Real Estate, Horizon Group",
    initials: "SJ"
  },
  {
    companyRef: "Mintrix Maintenance",
    quote: "The facility management provided by Mintrix Maintenance has significantly reduced our operational downtime. Their 24/7 preventative approach ",
    highlight: "really helps my business",
    quoteEnd: " run smoothly year-round.",
    author: "Omar Al-Fayed",
    role: "Operations Director, Prime Logistics",
    initials: "OA"
  },
  {
    companyRef: "BricketX.pk",
    quote: "Partnering with BricketX.pk transformed our digital presence in the region. Their localized expertise and seamless market integration ",
    highlight: "provided massive value",
    quoteEnd: " to our expansion efforts from day one.",
    author: "David Chen",
    role: "CEO, TechFlow Asia",
    initials: "DC"
  },
  {
    companyRef: "Mintrix World",
    quote: "The global strategic consulting from Mintrix World bridged our regional operations with international standards flawlessly. ",
    highlight: "A highly professional team",
    quoteEnd: " that delivers results.",
    author: "Elena Rodriguez",
    role: "Managing Partner, Global Ventures",
    initials: "ER"
  },
  {
    companyRef: "Mintrix Contracting",
    quote: "From initial design to final execution, the project management was top-notch. They resolved complex structural issues exceptionally well. ",
    highlight: "Highly recommend.",
    quoteEnd: "",
    author: "Marcus Thorne",
    role: "Lead Developer, Thorne Estates",
    initials: "MT"
  },
  {
    companyRef: "BricketX Group",
    quote: "Working with the BricketX portfolio of companies has streamlined our entire supply chain and facility operations. ",
    highlight: "Great quality",
    quoteEnd: " and an even better support team.",
    author: "Aisha Malik",
    role: "Procurement Head, Nexus Corp",
    initials: "AM"
  }
];

// Add these at the bottom of data.ts

export const showcaseRowOne = [
  { title: "Commercial Development", image: "/images/desktop.png" },
  { title: "Digital Infrastructure", image: "/images/maintenance1.png" },
  { title: "Facility Maintenance", image: "/images/desktop.png" },
  { title: "Regional Expansion", image: "/images/maintenance1.png" },
  { title: "Structural Engineering", image: "/images/desktop.png" },
];

export const showcaseRowTwo = [
  { title: "Smart City Integration", image: "/images/showcase-6.jpg" },
  { title: "Corporate Headquarters", image: "/images/showcase-7.jpg" },
  { title: "Sustainable Operations", image: "/images/showcase-8.jpg" },
  { title: "Global Consulting", image: "/images/showcase-9.jpg" },
  { title: "Tech Innovation", image: "/images/showcase-10.jpg" },
];

//CONTACT INFO
export const contactMethods = [
  {
    iconPaths: [
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    ],
    title: "Our location",
    line1: "Shah Faisal Town,",
    line2: "Karachi, Sindh, Pakistan"
  },
  {
    iconPaths: [
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    ],
    title: "Email us",
    line1: "corporate@bricketx.com",
    line2: "support@bricketx.com"
  },
  {
    iconPaths: [
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    ],
    title: "Call us",
    line1: "+92 (000) 123-4567",
    line2: "+92 (000) 987-6543"
  },
  {
    iconPaths: [
      "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    ],
    title: "Live chat",
    line1: "Available 24/7",
    line2: "Click here to start"
  }
];


// Add to the bottom of data.ts

export const companyValues = [
  {
    title: "Operational Excellence",
    description: "We strive for perfection in every process, ensuring our subsidiaries operate at peak efficiency and deliver unmatched value.",
    iconPaths: ["M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"] // Checkmark circle
  },
  {
    title: "Uncompromising Safety",
    description: "In construction and maintenance, safety is our non-negotiable priority. We protect our people, clients, and communities.",
    iconPaths: ["M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"] // Shield
  },
  {
    title: "Sustainable Growth",
    description: "We build for the future. Our investments and projects are designed to be environmentally responsible and economically viable.",
    iconPaths: ["M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9"] // Globe
  },
  {
    title: "Radical Transparency",
    description: "We believe in honest, clear communication with our partners, stakeholders, and clients across all global operations.",
    iconPaths: ["M15 12a3 3 0 11-6 0 3 3 0 016 0z", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"] // Eye
  }
];

export const timelineEvents = [
  {
    year: "2018",
    title: "The Foundation",
    description: "Where the vision for a unified corporate ecosystem began.",
    image: "/images/timeline-1.jpg"
  },
  {
    year: "2020",
    title: "Mintrix Contracting",
    description: "Launched our first major construction subsidiary, setting new industry standards.",
    image: "/images/timeline-2.jpg"
  },
  {
    year: "2022",
    title: "Facility Management",
    description: "Expanded our portfolio with Mintrix Maintenance to serve our growing client base.",
    image: "/images/timeline-3.jpg"
  },
  {
    year: "2024",
    title: "Digital Integration",
    description: "Launched BricketX.pk to drive tech solutions and regional market dominance.",
    image: "/images/timeline-4.jpg"
  },
  {
    year: "2026",
    title: "Global Reach",
    description: "Today, we operate a top-rated portfolio of specialized, industry-leading companies.",
    image: "/images/timeline-5.jpg"
  }
];

// --- CORE STRENGTHS DATA ---
export const coreStrengths = [
  {
    number: "01",
    title: "Global Reach",
    description: "Operating across multiple continents, we provide scalable solutions for international markets with localized expertise."
  },
  {
    number: "02",
    title: "Tier-III Security",
    description: "Our digital and physical infrastructures adhere strictly to globally recognized Tier-III security and compliance protocols."
  },
  {
    number: "03",
    title: "Rapid Deployment",
    description: "Agile methodologies across all subsidiaries ensure project execution is consistently delivered ahead of standard industry timelines."
  },
  {
    number: "04",
    title: "Vertical Integration",
    description: "By controlling the supply chain from construction to digital maintenance, we eliminate costly middleman dependencies."
  },
  {
    number: "05",
    title: "Sustainable Power",
    description: "Mintrix Mining and Contracting heavily integrate renewable energy solutions, ensuring long-term ecological compliance."
  },
  {
    number: "06",
    title: "24/7 Redundancy",
    description: "Whether it is facility management or data mining, our operations guarantee 99.9% uptime with dedicated emergency response."
  },
  {
    number: "07",
    title: "Financial Strength",
    description: "Backed by robust private equity, BricketX possesses the capital liquidity to fund and scale mega-projects instantly."
  },
  {
    number: "08",
    title: "Uncompromising Quality",
    description: "Every BricketX subsidiary is audited quarterly to ensure our output remains the gold standard in every sector we enter."
  }
];

// --- FAQ DATA ---
export const faqs = [
  {
    question: "What services do your subsidiary companies provide?",
    answer: "Our portfolio spans multiple industries. Mintrix Contracting LLC handles top-tier commercial and residential construction, Mintrix Maintenance provides comprehensive facility management, and BricketX.pk focuses on specialized regional solutions and digital growth."
  },
  {
    question: "How do I partner with or hire one of your companies?",
    answer: "You can reach out to our corporate team via the Contact section, and we will direct you to the appropriate subsidiary based on your project requirements, location, and scale."
  },
  {
    question: "Do you take on international projects?",
    answer: "Yes. Through Mintrix World and our global network, we bridge regional expertise with international standards, allowing us to manage and execute projects across various global markets."
  },
  {
    question: "What are the core values across the BricketX portfolio?",
    answer: "Every company under the BricketX umbrella is bound by a commitment to uncompromising quality, strict safety standards, continuous innovation, and transparent client communication."
  }
];