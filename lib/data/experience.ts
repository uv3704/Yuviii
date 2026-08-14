export interface TimelineItem {
  period:       string
  role:         string
  org?:         string
  location?:    string
  type:         "work" | "education" | "freelance" | "personal"
  description:  string
  highlights:   string[]
  skills?:      string[]
  github?:      string
}

export const experience: TimelineItem[] = [
  {
    period:      "Jul 2025 — Sep 2025",
    role:        "Java Developer Intern",
    org:         "ThrivesUp Consultancy Services Pvt Ltd",
    location:    "Indore, MP (On-site)",
    type:        "work",
    github:      "https://github.com/uv3704/ThrivesUpJavaProject",
    description:
      "Engineered core backend systems, Spring architectures, and RESTful API endpoints for Academic Record Management.",
    highlights: [
      "Developed 12+ RESTful API endpoints using Java, Spring patterns, JDBC, Hibernate, and MySQL",
      "Optimized database queries, reducing response time from 500ms to 80ms for 1,000+ records",
      "Implemented robust transaction handling, connection pooling, and error logging",
    ],
    skills: ["Java", "Hibernate", "Spring patterns", "JDBC", "MySQL", "REST APIs"],
  },
  {
    period:      "Jun 2025 — Jul 2025",
    role:        "Full-Stack Intern",
    org:         "Cognifyz Technologies",
    location:    "Remote",
    type:        "work",
    description:
      "Built full-stack web applications and interactive components using MERN stack (MongoDB, Express, React, Node.js).",
    highlights: [
      "Developed full-stack modules with React.js frontend, Node.js/Express.js backend, and MongoDB database",
      "Designed RESTful endpoints with JWT authentication and middleware validation",
      "Created dynamic, responsive client-side views with state management and API integration",
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN Stack", "REST APIs"],
  },
  {
    period:      "Apr 2025 — Jun 2025",
    role:        "Frontend / Web Development Intern",
    org:         "CODTECH IT SOLUTIONS",
    location:    "Remote",
    type:        "work",
    description:
      "Architected modern responsive user interfaces using Next.js, React.js, TypeScript, and Tailwind CSS.",
    highlights: [
      "Built production-ready web interfaces with Next.js App Router and reusable React component architectures",
      "Implemented client-side caching, fluid typography, and performance optimizations achieving 90+ Lighthouse scores",
      "Integrated third-party APIs and stateful form validation with TypeScript type safety",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Frontend Architecture"],
  },
  {
    period:      "Feb 2025 — Mar 2025",
    role:        "Full-Stack & Cloud Development Intern",
    org:         "Edunet Foundation",
    location:    "Remote",
    type:        "work",
    description:
      "Developed scalable web applications and cloud-ready architectures with modern JavaScript ecosystem and TypeScript.",
    highlights: [
      "Engineered end-to-end full-stack web platforms using TypeScript, React.js, and Node.js microservices",
      "Built accessible UI components and integrated cloud deployment workflows with Docker containers",
      "Collaborated in agile development sprints across multiple technical feature deliverables",
    ],
    skills: ["TypeScript", "React.js", "Node.js", "Web Development", "Cloud Deployments"],
  },
  {
    period:      "Oct 2024 — Jan 2025",
    role:        "AI / ML Intern",
    org:         "Infosys SpringBoard",
    location:    "Remote",
    type:        "work",
    github:      "https://github.com/uv3704/Classifcation_Infosys_Internship_Oct2024",
    description:
      "Researched and trained deep learning computer vision architectures with model quantization and optimization.",
    highlights: [
      "Built CNN model using TensorFlow achieving 97.5% accuracy on 10-class classification (5,000+ images)",
      "Applied data augmentation techniques to boost generalization across varied visual distributions",
      "Reduced model size by 35% using quantization and pruning; evaluated 5+ optimizers (Adam, SGD, RMSprop)",
    ],
    skills: ["TensorFlow", "Deep Learning", "CNN", "Python", "Model Quantization", "Computer Vision"],
  },
  {
    period:      "Aug 2022 — Jun 2026",
    role:        "B.Tech in Computer Science & Engineering (AI)",
    org:         "Mandsaur Institute of Technology",
    location:    "Mandsaur, MP",
    type:        "education",
    description:
      "Core computer science curriculum with specialization in Artificial Intelligence and Machine Learning. CGPA: 7.95",
    highlights: [
      "Ranked #42 Globally in DevFest.AI 2024",
      "Organized National level Hackathon with 100+ competing teams",
      "Certifications: NPTEL Programming in Java, Google Cloud Intro to AI & ML",
    ],
    skills: ["Data Structures", "Algorithms", "Database Systems", "Machine Learning", "Operating Systems"],
  },
  {
    period:      "Jul 2019 — May 2022",
    role:        "Senior Secondary & Secondary Education",
    org:         "Delhi Public School",
    location:    "Mandsaur, MP",
    type:        "education",
    description:
      "Completed Class XII (73.6%) and Class X (77%) with foundation in Mathematics and Sciences.",
    highlights: [
      "Class XII: 73.6%",
      "Class X: 77.0%",
    ],
  },
]
