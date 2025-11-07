// Portfolio content - Edit this file to customize your portfolio
// All text content is stored here for easy updates

import { PortfolioContent } from "@/lib/types";

export const content: PortfolioContent = {
  personal: {
    name: "Kishen Padiyar",
    title: "Senior Technology Consultant",
    tagline: "Building digital experiences with code",
    bio: "Senior Technology Consultant with 8+ years of experience helping organizations design and deliver intelligent automation and AI driven solutions. I help lead end to end project implementation in RPA (Robotic Process Automation), Intelligent Automation, Virtual Agents and Generative AI, working closely with both business stakeholders and technical teams turning ideas into scalable solutions. My background combines identifying problems/opportunities, detailed analysis, and guide stakeholders on how technology can simplify work and improve customer experience",
    location: "Frisco, TX",
  },
  experience: [
    {
      company: "Ernst & Young LLP",
      role: "Senior Technology Consultant",
      startDate: "Mar 2022",
      endDate: "Mar 2025",
      achievements: [
        "Worked with state government clients to help identify and prioritize automation and AI opportunities to help improve employee productivity and making it easier for citizens to avail state services",
        "Led requirements gathering efforts, mapped operational workflows, and partnered with solution architects to define and deliver efficient solutions",
        "Delivered projects involving virtual agents, RPA solutions, and AI document processing solutions using tools like UiPath, PowerApps and Azure AI",
        "Was a liaison between business teams and global delivery teams, ensuring requirements are translated accurately, monitored and tracked project progress, and ensured blockers were resolved timely",
        "Helped prioritize automation and AI opportunities by reviewing business processes, documenting current and future states, presenting findings and seeking approvals from leadership",
        "Managed a small team of offshore developers, coordinated deliverables, and ensured all work followed agreed design and timeline expectations",
        "Served as a mentor to junior members of the team. I often helped bridge communication gaps, provided resources and opportunities to lead, and provided meaningful feedbacks to help with career growth",
      ],
      metrics: [
        "Implemented AI Agent for document processing and OCR using Azure AI and Power Automate, reducing review time by 40%",
        "Reduced customer query TAT by 30% by implementing AI based virtual agents, to generate responses for frequently asked questions",
        "Deployed 20+ automation projects to improve employee productivity and customer experience",
      ],
      technologies: ["Azure AI", "UiPath", "PowerApps", "Copilot", "Visio", "Power Platform"],
    },
    {
      company: "Optum (UnitedHealth Group)",
      role: "Business Analysis Consultant",
      startDate: "June 2017",
      endDate: "Mar 2022",
      achievements: [
        "Worked closely with the business operations and R&D teams in finding ways to simplify work through identifying automation and system enhancements opportunities",
        "Defined business and technical requirements in the Process Design Document, created user stories, and managed development backlogs in JIRA and Rally",
        "Worked closely with UiPath developers to design and validate automation workflows to ensure flawless execution and provide support throughout the development lifecycle",
        "Participated in sprint planning, UAT testing, and deployment reviews for projects in both Agile and Waterfall methods",
        "Created clear documentation including current and future state process maps, technical requirements, and create training materials to ensure new automations implemented without issues and were easy to support",
        "Built workflow diagrams and visual process charts in MS Visio to communicate ideas clearly to business users and leadership",
        "Supported the Behavioral Health operations group by analyzing data, identifying workflow gaps, and proposing system or process improvement opportunities",
        "Helped lead and present Monthly Business Reviews meetings for senior leadership teams to help track key metrics and performance trends",
        "Partnered with operations team and IT teams to identify inefficiencies in business process implement system changes that improved response times and reduced rework",
        "Created and standardized operating procedures and implemented dashboards to make performance data more accessible to leaders",

      ],
      metrics: [
        "Improved page load time by 50%",
        "Achieved 99.9% uptime",
        "Grew user base by 200% in first year",
      ],
      technologies: ["UiPath", "Visio", "JIRA", "Rally", "PowerBI", "Power Automate", "Tableau", "SQL"],
    },
  ],
  education: [
    {
      institution: "New Jersey Institute of Technology",
      degree: "Masters",
      field: "Industrial Engineering",
      startDate: "2015",
      endDate: "2016",
      description: "Graduated with honors. Focused on quality engineering, process improvement and project management.",
    },
  ],
  skills: [
    // Language
    { name: "Python", category: "language", proficiency: "advanced" },
    { name: "Java", category: "language", proficiency: "intermediate" },
    { name: "SQL", category: "language", proficiency: "advanced" },
    { name: "C", category: "language", proficiency: "intermediate" },
    { name: "C++", category: "language", proficiency: "intermediate" },
    
    // Technology
    { name: "TypeScript", category: "technology", proficiency: "expert" },
    { name: "JavaScript", category: "technology", proficiency: "expert" },
    
    // Project Management
    { name: "React", category: "project management", proficiency: "expert" },
    { name: "Next.js", category: "project management", proficiency: "advanced" },
    { name: "Node.js", category: "project management", proficiency: "advanced" },
    { name: "Express", category: "project management", proficiency: "advanced" },
    
    // Tools
    { name: "Git", category: "tool", proficiency: "expert" },
    { name: "Docker", category: "tool", proficiency: "advanced" },
    { name: "AWS", category: "tool", proficiency: "intermediate" },
    { name: "Kubernetes", category: "tool", proficiency: "intermediate" },
    { name: "PostgreSQL", category: "tool", proficiency: "advanced" },
    { name: "MongoDB", category: "tool", proficiency: "intermediate" },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard",
      longDescription: "Built a complete e-commerce platform with user authentication, product management, shopping cart, and Stripe payment integration. Features include real-time inventory updates, order tracking, and comprehensive admin dashboard.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com/kishen/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration",
      longDescription: "Developed a real-time task management application with WebSocket support for live updates. Includes drag-and-drop functionality, team workspaces, and advanced filtering options.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/kishen/task-manager",
      liveUrl: "https://taskmanager-demo.vercel.app",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with location-based forecasts and data visualization",
      longDescription: "Created a responsive weather dashboard that displays current conditions, hourly and daily forecasts. Includes interactive charts and maps for weather data visualization.",
      techStack: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      githubUrl: "https://github.com/kishen/weather-dashboard",
      featured: false,
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI API",
      longDescription: "Built a web application that generates blog posts, social media content, and marketing copy using OpenAI's GPT models. Features include content templates, history tracking, and export functionality.",
      techStack: ["Next.js", "OpenAI API", "TypeScript", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/kishen/ai-content-generator",
      featured: true,
    },
  ],
  now: [
    {
      title: "Learning Next.js 14 App Router",
      description: "Deep diving into the new App Router architecture and server components",
      category: "learning",
      date: "2024-11",
    },
    {
      title: "Building a Personal AI Assistant",
      description: "Experimenting with OpenAI API to create a personalized AI assistant for productivity",
      category: "building",
      date: "2024-11",
    },
    {
      title: "Exploring Web3 Development",
      description: "Learning Solidity and smart contract development on Ethereum",
      category: "exploring",
      date: "2024-10",
    },
    {
      title: "Reading 'Clean Architecture'",
      description: "Studying software architecture principles and design patterns",
      category: "reading",
      date: "2024-11",
    },
  ],
  social: {
    github: "https://github.com/kishen",
    linkedin: "https://linkedin.com/in/kishen",
    email: "kishen@example.com",
    twitter: "https://twitter.com/kishen",
  },
};

