export const projectTypes = [
  "All",
  "Full Stack",
  "React.js",
  "Next.js",
  "JavaScript",
  "Firebase",
  "AI/ML"
];

export const projectsData = [
  {
    id: 1,
    title: "Coaching Management System",
    subtitle: "Full Stack Project",
    type: "Full Stack",
    images: [
      "https://i.postimg.cc/3rPBPzQ3/Screenshot-2026-01-10-at-9-04-43-PM.png",
    ],
    description: "A comprehensive coaching management system built with the MERN stack. This platform streamlines administrative tasks, student management, and educational workflows for coaching institutes. Features include student enrollment, attendance tracking, payment processing, and real-time notifications.",
    features: [
      "User authentication and authorization",
      "Role-based access control (Admin/Teacher/Student)",
      "Student enrollment and management",
      "Attendance tracking system",
      "Payment processing integration",
      "Real-time notifications",
      "Performance analytics dashboard"
    ],
    techStack: ["React", "MongoDB", "Express.js", "Node.js", "Firebase"],
    tags: ["@react", "@mongodb", "@express", "@nodejs"],
    links: {
      github: "#",
      frontend: "https://github.com/Samin1362/Rootx_Coaching_Management_System_Client_Side.git",
      backend: "https://github.com/Samin1362/Rootx_Coaching_Management_System_Server_Side.git",
      live: "https://rootx-cms-firebase-project.web.app/"
    },
    credentials: {
      email: "admin@rootx.com",
      password: "Admin@123",
      note: "Admin account for testing"
    },
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #FFD580, #000)",
  },
  {
    id: 2,
    title: "Artwork Classification",
    subtitle: "Full Stack Project + AI",
    type: "AI/ML",
    images: [
      "https://i.postimg.cc/qv4p6q04/temp-Image-VQdn-IE.avif",
    ],
    description: "An intelligent artwork classification system powered by AI and blockchain technology. This platform uses machine learning algorithms to categorize and authenticate digital artworks, providing a secure and transparent marketplace for digital art.",
    features: [
      "AI-powered artwork classification",
      "Blockchain-based authentication",
      "Secure digital marketplace",
      "Image recognition and analysis",
      "Artist portfolio management",
      "Real-time bidding system"
    ],
    techStack: ["React", "MongoDB", "Express.js", "Node.js", "TensorFlow", "Blockchain"],
    tags: ["@react", "@mongodb", "@express", "@nodejs", "@blockchain"],
    links: {
      github: "#",
      frontend: "https://merakinexus.netlify.app",
      backend: "#",
      live: "https://merakinexus.netlify.app"
    },
    credentials: {
      email: "demo@merakinexus.com",
      password: "Demo@2024",
      note: "Demo account - Limited permissions"
    },
    borderColor: "#7C3AED",
    gradient: "linear-gradient(145deg, #6D28D9, #1E1B4B)",
  },
  {
    id: 3,
    title: "AI Assistant for Entrepreneurs",
    subtitle: "Machine Learning Project",
    type: "AI/ML",
    images: [
      "https://i.postimg.cc/x8BcS2bV/temp-Imagev5-E4bh.avif",
    ],
    description: "An AI-powered virtual assistant designed to help entrepreneurs make data-driven business decisions. The platform leverages machine learning models to provide insights, recommendations, and automated support for various business operations.",
    features: [
      "Natural language processing for queries",
      "Business analytics and insights",
      "Automated report generation",
      "Market trend analysis",
      "Predictive analytics",
      "Personalized recommendations"
    ],
    techStack: ["React", "Python", "TensorFlow", "OpenAI API", "Node.js"],
    tags: ["@react"],
    links: {
      github: "#",
      frontend: "https://silver-pixie-86b386.netlify.app",
      backend: "#",
      live: "https://silver-pixie-86b386.netlify.app"
    },
    borderColor: "#1E3A8A",
    gradient: "linear-gradient(145deg, #1E3A8A, #10B981, #0D9488)",
  },
  {
    id: 4,
    title: "Firebase + React",
    subtitle: "Game Hub for Gamers",
    type: "Firebase",
    images: [
      "https://i.postimg.cc/Ss0tjyjb/temp-Imagevdm3v-F.avif",
    ],
    description: "A modern gaming community platform built with React and Firebase. This game hub provides gamers with a centralized space to discover games, connect with other players, track achievements, and participate in gaming communities.",
    features: [
      "Firebase authentication and authorization",
      "Real-time game library updates",
      "User profiles and achievements",
      "Gaming community forums",
      "Game reviews and ratings",
      "Social features and friend lists"
    ],
    techStack: ["React", "Firebase", "Firestore", "Firebase Auth", "Tailwind CSS"],
    tags: ["@firebase"],
    links: {
      github: "#",
      frontend: "https://game-store-firebase-auth.web.app",
      backend: "#",
      live: "https://game-store-firebase-auth.web.app"
    },
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #1E1B4B, #8B5CF6, #EC4899)",
  },
  {
    id: 5,
    title: "React Project",
    subtitle: "Frontend Project",
    type: "React.js",
    images: [
      "https://i.postimg.cc/Hk15Js4H/temp-Image-L0-Kewf.avif",
    ],
    description: "A comprehensive React-based frontend application demonstrating modern React patterns and best practices. This project showcases component architecture, state management, hooks, and responsive design principles.",
    features: [
      "Modern React hooks and patterns",
      "Responsive component design",
      "State management with Context API",
      "Reusable component library",
      "Performance optimizations",
      "Clean code architecture"
    ],
    techStack: ["React", "JavaScript", "CSS3", "HTML5"],
    tags: ["@react"],
    links: {
      github: "#",
      frontend: "https://ph-react-component-practice.netlify.app",
      backend: "#",
      live: "https://ph-react-component-practice.netlify.app"
    },
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
  },
  {
    id: 6,
    title: "JavaScript Project",
    subtitle: "Frontend Project",
    type: "JavaScript",
    images: [
      "https://i.postimg.cc/BnZS7rJH/temp-Image6-Wu-HWY.avif",
    ],
    description: "A pure JavaScript application built without frameworks, demonstrating vanilla JavaScript capabilities and DOM manipulation techniques. This project highlights fundamental web development skills and JavaScript proficiency.",
    features: [
      "Vanilla JavaScript implementation",
      "Dynamic DOM manipulation",
      "Event handling and delegation",
      "ES6+ features and syntax",
      "Responsive design",
      "Cross-browser compatibility"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3"],
    tags: ["@javascript"],
    links: {
      github: "#",
      frontend: "https://samin1362.github.io/PH-B12-Assignment-5/",
      backend: "#",
      live: "https://samin1362.github.io/PH-B12-Assignment-5/"
    },
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  },
  {
    id: 7,
    title: "Responsive Website",
    subtitle: "Frontend Project",
    type: "JavaScript",
    images: [
      "https://i.postimg.cc/nhmykTDB/temp-Imagevq-Yd3-D.avif",
    ],
    description: "A fully responsive website built with HTML and CSS, demonstrating mobile-first design principles and modern layout techniques. This project showcases clean semantic HTML and advanced CSS capabilities.",
    features: [
      "Mobile-first responsive design",
      "Semantic HTML structure",
      "CSS Grid and Flexbox layouts",
      "Cross-device compatibility",
      "Optimized performance",
      "Accessibility best practices"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    tags: ["@html-css"],
    links: {
      github: "#",
      frontend: "https://samin1362.github.io/PH-B12-Assignment-2/",
      backend: "#",
      live: "https://samin1362.github.io/PH-B12-Assignment-2/"
    },
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #FFD580, #000)",
  },
  {
    id: 8,
    title: "Responsive Website",
    subtitle: "Frontend Project",
    type: "JavaScript",
    images: [
      "https://i.postimg.cc/yNvvXSv0/temp-Image-S0d-UHE.avif",
    ],
    description: "A modern responsive website built with Tailwind CSS, showcasing utility-first CSS methodology and rapid UI development. This project demonstrates proficiency with modern CSS frameworks and responsive design patterns.",
    features: [
      "Tailwind CSS utility-first approach",
      "Responsive design system",
      "Custom component styling",
      "Dark mode support",
      "Performance optimizations",
      "Mobile-responsive layouts"
    ],
    techStack: ["HTML5", "Tailwind CSS", "JavaScript"],
    tags: ["@tailwind-css"],
    links: {
      github: "#",
      frontend: "https://samin1362.github.io/PH-Challenge-Begins-Tailwind/",
      backend: "#",
      live: "https://samin1362.github.io/PH-Challenge-Begins-Tailwind/"
    },
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
  },
];
