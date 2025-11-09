// Portfolio content - Edit this file to customize your portfolio
// All text content is stored here for easy updates

import { PortfolioContent } from "@/lib/types";

export const content: PortfolioContent = {
  personal: {
    name: "Kishen Padiyar",
    title: "Senior Technology Consultant",
    tagline: "Bridging Business Needs with Intelligent Automation and AI-Driven Solutions",
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
        "Deployed UiPath automations to improve claims processing turn around time by 15%",
        "Reduce operating costs by $500k by identified and implemented automations across cross functional business areas",
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
    {
      institution: "East West Institute of Technology",
      degree: "Bachelors",
      field: "Mechanical Engineering",
      startDate: "2010",
      endDate: "2014",
      //description: "Graduated with honors. Focused on quality engineering, process improvement and project management.",
    }, 
    {
      institution: "Harward Business School Online",
      degree: "Certification Program",
      field: "Management Essentials and Strategy Execution ",
      startDate: "2021",
      endDate: "2021",
      //description: "Graduated with honors. Focused on quality engineering, process improvement and project management.",
    }, 
  ],
  skills: [
        
    // Technology
    { name: "RPA (Robotic Process Automation)", category: "technology", proficiency: "advanced" },
    { name: "Azure AI", category: "technology", proficiency: "advanced" },
    { name: "Generative AI", category: "technology", proficiency: "intermediate" },
    { name: "AI Agents", category: "technology", proficiency: "intermediate" },
    { name: "Virtual Agents", category: "technology", proficiency: "intermediate" },
    { name: "Intelligent Document Processing", category: "technology", proficiency: "intermediate" },
    { name: "Google Cloud Platform", category: "technology", proficiency: "beginner" },
    { name: "AWS Vertex AI", category: "technology", proficiency: "beginner" },
     
     // Tools
     { name: "UiPath", category: "tool", proficiency: "expert" },
     { name: "JIRA", category: "tool", proficiency: "expert" },
     { name: "Rally", category: "tool", proficiency: "expert" },
     { name: "Visio", category: "tool", proficiency: "expert" },
     { name: "ChatGPT", category: "tool", proficiency: "advanced" },
     { name: "Cursor AI", category: "tool", proficiency: "advanced" },
     { name: "n8n", category: "tool", proficiency: "intermediate" },
     { name: "Claude Code", category: "tool", proficiency: "intermediate" },

    // Project Management
    { name: "Agile and Waterfall", category: "project management", proficiency: "expert" },
    { name: "Process Analysis and Design", category: "project management", proficiency: "expert" },
    { name: "Complex Requirements Gathering", category: "project management", proficiency: "expert" },
    { name: "Stakeholder Management", category: "project management", proficiency: "advanced" },
    { name: "Project Planning and Tracking", category: "project management", proficiency: "advanced" },
    { name: "Communication and Collaboration", category: "project management", proficiency: "advanced" },
    { name: "Documentation and Reporting", category: "project management", proficiency: "advanced" },
    { name: "Budget Management", category: "project management", proficiency: "advanced" },
    { name: "Resource Allocation", category: "project management", proficiency: "advanced" },
    { name: "Quality Assurance", category: "project management", proficiency: "advanced" },
    { name: "Lean Six Sigma", category: "project management", proficiency: "advanced" },
    
    // Language
    { name: "Python", category: "language", proficiency: "beginner" },
    { name: "Java", category: "language", proficiency: "beginner" },
    { name: "SQL", category: "language", proficiency: "beginner" },
    { name: "C", category: "language", proficiency: "beginner" },
    { name: "C++", category: "language", proficiency: "beginner" },
  ],
  projects: [
    {
      title: "AI Based Contract Review Application",
      description: "An AI based contract review application that uses Azure AI, Document Intelligence to review contracts and identify potential risks and issues",
      longDescription: "Led the delivery of an AI based contract review application based on Azure AI and PowerApps. Features include document upload, AI review, risk identification, and issue tracking. In additional, a chat feature was implemented to ask queries about the contract document",
      techStack: ["Azure AI", "PowerApps", "Document Intelligence", "ChatGPT", "Copilot"],
      //githubUrl: "https://github.com/kishen/ecommerce-platform",
      //liveUrl: "https://ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      title: "AI Based Virtual Agent for Grants Management and Support",
      description: "An AI based virtual agent that help state citizens with grants management and reimbursementsupport",
      longDescription: "Led the delivery of an AI based virtual agent for grants management and support. Features include helping citizens with questions about grant application submission, status tracking, and reimbursement request processing. In additional, a chat feature was implemented to ask queries about the grants and reimbursements",
      techStack: ["Azure AI", "Copilot", "SharePoint", "Power Automate"],
      //githubUrl: "https://github.com/kishen/task-manager",
      //liveUrl: "https://taskmanager-demo.vercel.app",
      featured: true,
    },
    {
      title: "UiPath - AutomationHub Dashboard",
      description: "A dashboard that displays a list of all automation opportunities and the status of the automation projects, including the number of projects, prioritization, robots, and runs",
      //longDescription: "Created a responsive weather dashboard that displays current conditions, hourly and daily forecasts. Includes interactive charts and maps for weather data visualization.",
      techStack: ["UiPath", "Microsoft Office", "Sharepoint"],
      //githubUrl: "https://github.com/kishen/weather-dashboard",
      featured: false,
    },
    {
      title: "Professional Portfolio Website",
      description: "Personal portfolio website built with CursorAI using Next.js, TypeScript, and Tailwind CSS",
      //longDescription: "Built a web application that generates blog posts, social media content, and marketing copy using OpenAI's GPT models. Features include content templates, history tracking, and export functionality.",
      techStack: ["CursorAI", "Next.js", "TypeScript", "Tailwind CSS"],
      //githubUrl: "https://portfoliosite-chi-blue.vercel.app/",
      featured: true,
    },
  ],
  now: [
    {
      title: "Learning to create automated workflows using n8n",
      description: "Deep diving into workflow automation tool that allows users to connect different applications and automate tasks without writing code, using a visual, node-based interface",
      category: "learning",
      date: "2025-11",
    },
    {
      title: "Building a AI chat feature for my Personal Portfolio Website",
      description: "Experimenting with OpenAI API to create a personalized AI chatbot for my portfolio website",
      category: "building",
      date: "2025-11",
    },
    {
      title: "ChatGPT and Zapier Agentic AI for Everyone",
      description: "Online certification course on how to use ChatGPT and Zapier to create agentic AI workflows",
      category: "online certifications",
      date: "2025-08",
    },
    {
      title: "AWS Services for AI Solutions",
      description: "Online certification course on how to use AWS services to build AI solutions",
      category: "online certifications",
      date: "2025-09",
    },
    {
      title: "Google AI Specialzation",
      description: "Online certification course on how to use Google AI services to build AI solutions",
      category: "online certifications",
      date: "2025-07",
    },
    {
      title: "Introduction to AI and Machine Learning on Google Cloud",
      description: "Online certification course on how to use Google Cloud services to build AI and Machine Learning solutions",
      category: "online certifications",
      date: "2025-09",
    }  
  ],
  social: {
    github: "https://github.com/kishenpadiyar",
    linkedin: "https://www.linkedin.com/in/kishenpadiyar/",
    email: "kishen.padiyar@gmail.com",
    //twitter: "https://twitter.com/kishen",
  },
};

