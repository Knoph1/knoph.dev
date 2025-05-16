export interface ProjectType {
  id: number
  title: string
  slug: string
  description: string
  longDescription?: string
  image: string
  category: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  timeline?: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "AcePapers Writers",
    slug: "acepapers-writers",
    description:
      "An online writing platform with full-stack implementation using React frontend and MongoDB/PostgreSQL backend.",
    longDescription:
      "AcePapers Writers is a comprehensive online platform designed to connect academic writers with clients seeking high-quality writing services. The platform features a sophisticated matching algorithm that pairs writers with projects based on expertise, availability, and client preferences. The system includes real-time collaboration tools, secure payment processing, and an intuitive user interface for both writers and clients. This project showcases my ability to build complex, full-stack applications with multiple user roles and secure data handling.",
    image: "https://placehold.co/800x450/7c3aed/ffffff?text=AcePapers+Writers",
    category: "Web Development",
    technologies: ["React", "MongoDB", "PostgreSQL", "RESTful API", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/acepapers",
    timeline: "May - June 2025",
  },
  {
    id: 2,
    title: "UoK - Call for All ARG",
    slug: "uok-call-for-all-arg",
    description: "University of Kabianga's Annual Research Grants digitization platform.",
    longDescription:
      "The University of Kabianga Annual Research Grants (ARG) digitization platform transforms the traditional paper-based grant application process into a streamlined digital experience. This comprehensive system allows researchers to submit proposals, administrators to review applications, and committee members to evaluate and award grants—all within a secure, transparent environment. The platform includes automated workflow management, document handling, evaluation metrics, and reporting tools. This project demonstrates my ability to analyze complex institutional processes and develop tailored digital solutions that enhance efficiency and accessibility.",
    image: "https://placehold.co/800x450/0891b2/ffffff?text=UoK+Research+Grants",
    category: "Web Application",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "jQuery"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/uok-arg",
    timeline: "2024-2025",
  },
  {
    id: 3,
    title: "Ashker Credit Solution MVP",
    slug: "ashker-credit-solution",
    description: "A minimum viable product for a credit solution company in Ethiopia.",
    longDescription:
      "Ashker Credit Solution MVP is a financial technology platform developed for an Ethiopian credit company. The system provides a comprehensive suite of tools for loan application processing, credit scoring, risk assessment, and portfolio management. Key features include automated application workflows, integration with local financial systems, multi-language support, and robust reporting capabilities. As the back-end developer, I implemented secure authentication, data validation, business logic, and database optimization to ensure reliable performance even with limited connectivity. This project highlights my ability to develop solutions for emerging markets with unique regulatory and technical constraints.",
    image: "https://placehold.co/800x450/059669/ffffff?text=Ashker+Credit+Solution",
    category: "Backend Development",
    technologies: ["Python", "Flask", "SQL", "React", "Bootstrap"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/ashker-credit",
    timeline: "2024",
  },
  {
    id: 4,
    title: "KMHFR v3 Dashboard",
    slug: "kmhfr-v3-dashboard",
    description: "Frontend development and UI/UX for the Ministry of Health's Kenya Master Health Facility Registry.",
    longDescription:
      "The Kenya Master Health Facility Registry (KMHFR) v3 Dashboard is a critical national health information system that provides comprehensive data visualization and management tools for all health facilities in Kenya. Working with the Ministry of Health, I contributed to the frontend development and UI/UX design of this essential platform. The dashboard features interactive maps, advanced filtering capabilities, data export functions, and role-based access control. The system serves as the authoritative source of facility information for health sector planning, resource allocation, and service delivery monitoring across the country. This project demonstrates my ability to work on large-scale, mission-critical systems with complex data visualization requirements.",
    image: "https://placehold.co/800x450/dc2626/ffffff?text=KMHFR+Dashboard",
    category: "UI/UX",
    technologies: ["React", "Redux", "Material UI", "Chart.js", "Mapbox"],
    liveUrl: "https://kmhfr.health.go.ke",
    githubUrl: "https://github.com/Knoph1/kmhfr",
    timeline: "2023-2024",
  },
  {
    id: 5,
    title: "NASCOP Website Revamp",
    slug: "nascop-website-revamp",
    description: "UI design, development and capacity building for the National AIDS & STI Control Programme website.",
    longDescription:
      "The National AIDS & STI Control Programme (NASCOP) website revamp project involved completely redesigning and rebuilding the digital presence for this critical health organization in Kenya. The project encompassed comprehensive UI design, responsive development, and capacity building for the NASCOP team. Key features include an accessible resource repository, interactive data visualizations, event management, and a content management system optimized for non-technical users. Beyond development, I conducted training sessions for NASCOP staff to ensure sustainable content management and site maintenance. This project showcases my ability to combine technical expertise with effective knowledge transfer in a public health context.",
    image: "https://placehold.co/800x450/9333ea/ffffff?text=NASCOP+Website",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "SEO"],
    liveUrl: "https://nascop.or.ke",
    githubUrl: "https://github.com/Knoph1/nascop",
    timeline: "2024",
  },
  {
    id: 6,
    title: "First-Aid Medical Expert System",
    slug: "first-aid-medical-expert-system",
    description: "A desktop application for medical diagnosis and prescription (Final Year Project).",
    longDescription:
      "The First-Aid Medical Expert System is an innovative desktop application developed as my final year university project. This intelligent system uses expert system principles and AI algorithms to provide preliminary medical diagnosis and first-aid recommendations based on symptoms input. The application features a knowledge base built in collaboration with healthcare professionals, a sophisticated inference engine, natural language processing for symptom description, and an intuitive user interface accessible to non-medical users. The system includes comprehensive first-aid instructions, medication information, and emergency contact integration. This project demonstrates my ability to apply artificial intelligence concepts to practical healthcare challenges while maintaining a user-centered design approach.",
    image: "https://placehold.co/800x450/0284c7/ffffff?text=Medical+Expert+System",
    category: "Desktop Application",
    technologies: ["Java", "JavaFX", "MySQL", "Expert Systems", "AI Algorithms"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/medical-expert-system",
    timeline: "2023",
  },
  {
    id: 7,
    title: "Android Pesticide Stats Analyzer",
    slug: "pesticide-stats-analyzer",
    description: "A mobile application for analyzing pesticide usage statistics and environmental impact.",
    longDescription:
      "The Android Pesticide Stats Analyzer is a specialized mobile application designed to help agricultural professionals track, analyze, and optimize pesticide usage. The app features comprehensive data collection tools, statistical analysis capabilities, environmental impact assessments, and recommendation engines based on best practices. Users can scan product barcodes, record application details, and generate reports for regulatory compliance. The application works offline in remote agricultural areas and synchronizes data when connectivity is available. This project demonstrates my ability to develop mobile solutions for specialized industries with complex data requirements and practical field usage considerations.",
    image: "https://placehold.co/800x450/65a30d/ffffff?text=Pesticide+Stats+Analyzer",
    category: "Mobile",
    technologies: ["Android", "Java", "SQLite", "Charts API", "GPS Integration"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/pesticide-analyzer",
    timeline: "September 2022",
  },
  {
    id: 8,
    title: "HIV Patient Reminder System",
    slug: "hiv-patient-reminder",
    description: "A healthcare system for medication adherence and appointment management for HIV patients.",
    longDescription:
      "The HIV Patient Reminder System is a specialized healthcare application designed to improve medication adherence and appointment attendance for HIV patients. The system features automated SMS reminders, secure patient portals, healthcare provider dashboards, and anonymous support group connections. The platform prioritizes patient privacy and data security while providing essential support for treatment adherence. The system includes multilingual support and works across various device types, including basic feature phones. This project demonstrates my commitment to developing technology solutions that address critical healthcare challenges and improve patient outcomes in sensitive contexts.",
    image: "https://placehold.co/800x450/be185d/ffffff?text=HIV+Patient+Reminder",
    category: "Healthcare",
    technologies: ["PHP", "MySQL", "Twilio API", "Bootstrap", "jQuery"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/hiv-reminder",
    timeline: "2022",
  },
  {
    id: 9,
    title: "M-SmartGrow",
    slug: "m-smartgrow",
    description: "A mobile platform for youth empowerment, digital learning and financial growth.",
    longDescription:
      "M-SmartGrow is a comprehensive mobile application designed to empower young Africans through integrated e-learning, career mentoring, financial literacy, and micro-investment tracking. The platform serves students, interns, and early-career professionals with curated learning modules covering technical skills, career development, and financial management. Key features include bite-sized courses with video lessons and quizzes, a career tracker for academic and professional goal-setting, financial management tools for savings and budgeting, a mentor matching system, a personal development journal, and customizable reminders. The app works both online and offline, with seamless synchronization when connectivity is available. This project demonstrates my ability to create holistic mobile solutions that address multiple interconnected needs within a specific demographic.",
    image: "https://placehold.co/800x450/6d28d9/ffffff?text=M-SmartGrow",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Firestore", "MPESA API", "AI Integration"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/m-smartgrow",
    timeline: "2023",
  },
  {
    id: 10,
    title: "Kulture Kenya",
    slug: "kulture-kenya",
    description: "A mobile app for preserving and showcasing Kenyan indigenous cultures.",
    longDescription:
      "Kulture Kenya is a culturally-focused mobile application designed to preserve, promote, and showcase Kenya's rich indigenous heritage. The app serves as a comprehensive digital repository for the country's 44+ ethnic groups, featuring structured content on languages, traditions, festivals, fashion, music, and folk wisdom. Developed using Flutter and Supabase, the application provides an intuitive interface for students, tourists, educators, and heritage enthusiasts to explore Kenya's cultural diversity. Key features include a rich cultural repository with detailed information on various tribes, audio pronunciations of native greetings and phrases, community media sharing for cultural events, an interactive map of heritage sites, and secure user authentication. This project reflects my commitment to using technology for cultural preservation and educational purposes while demonstrating my proficiency in modern mobile development frameworks.",
    image: "https://placehold.co/800x450/047857/ffffff?text=Kulture+Kenya",
    category: "Mobile",
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Android SDK"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Knoph1/kulture-kenya",
    timeline: "Mid-2023",
  },
]
