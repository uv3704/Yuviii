import type { Project } from "../types"

const codestorm: Project = {
  slug: "codestorm",
  name: "CodeStorm : Developer Problem-Solving Platform",
  tagline: "Interactive coding practice platform with real-time test execution, algorithmic challenges, and performance benchmarks.",
  category: "Full-Stack Web App",
  year: "2025",
  status: "live",
  shortDescription:
    "A full-stack competitive programming and algorithmic practice platform featuring dynamic code execution environments, leaderboard analytics, and automated submission evaluation.",

  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Docker",
    "Tailwind CSS",
  ],

  github: "https://github.com/uv3704/CodeStorm",

  overview:
    "CodeStorm is built for software engineers to sharpen data structures and algorithmic mastery. It offers curated problem sets, sandboxed execution testing, automated test case evaluation, and user performance rankings.",

  role: "Full-Stack Architect — Designed problem schema models, created sandbox runner interfaces, and built the responsive frontend dashboard.",

  features: [
    {
      title: "Sandboxed Code Execution",
      description:
        "Isolated execution runner that evaluates user-submitted code against comprehensive test suites with strict time and memory limits.",
    },
    {
      title: "Algorithmic Categorization & Filters",
      description:
        "Filter problem collections by topic (Dynamic Programming, Graphs, Trees, Arrays), difficulty, and acceptance rate.",
    },
    {
      title: "Real-Time Leaderboards & Analytics",
      description:
        "Tracks submission accuracy, execution runtimes, memory profiles, and user ranking badges.",
    },
  ],

  results:
    "Delivered a fast, responsive coding environment capable of sandboxed multi-language test execution and instant feedback.",
}

export default codestorm
