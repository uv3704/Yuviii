import type { Project } from "../types"

const devpulse: Project = {
  slug: "devpulse",
  name: "DevPulse : MERN Collaborative Platform",
  tagline: "Full-stack real-time collaboration workspace with Socket.io streaming, kanban task state, and RESTful API architecture.",
  category: "MERN Full-Stack System",
  year: "2025",
  status: "live",
  shortDescription:
    "A full-stack collaborative development suite built on the MERN stack with instant WebSocket synchronization, role-based JWT authentication, and MongoDB aggregation pipelines.",

  technologies: [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "Socket.io",
    "Tailwind CSS",
    "JWT",
  ],

  github: "https://github.com/uv3704",

  overview:
    "DevPulse is an engineering team workspace enabling real-time kanban state synchronization, project activity feeds, and instant team chat without page refreshes. Built using the MERN stack with optimized MongoDB indexes and Node.js event-driven architecture.",

  role: "Full-Stack Engineer — Designed schemas, implemented real-time WebSocket events, built RESTful backend routes, and developed responsive React UI.",

  features: [
    {
      title: "Real-Time WebSocket State Sync",
      description:
        "Socket.io bidirectional event bus transmitting board updates, live presence indicators, and instant messaging across concurrent users.",
    },
    {
      title: "MongoDB Aggregation & Indexing",
      description:
        "Custom aggregation pipelines for task analytics and compound indexing for sub-50ms query latency on complex multi-tenant boards.",
    },
    {
      title: "Secure JWT Authentication & Middleware",
      description:
        "Stateless token-based authentication with bcrypt password hashing, refresh token rotation, and granular role permissions (Admin, Member, Viewer).",
    },
    {
      title: "Responsive React UI with Tailwind",
      description:
        "Component-driven interface featuring drag-and-drop task workflows, optimistic UI updates, and responsive layouts.",
    },
  ],

  decisions:
    "Chose Socket.io paired with Express clustering and MongoDB change streams to deliver instant updates while preserving ACID consistency on transactional task assignments.",

  learnings: [
    "Handling race conditions in concurrent multi-user drag-and-drop board state updates.",
    "Designing robust MongoDB schema structures for nested comments, attachments, and audit logs.",
    "Optimizing client-side React re-renders using memoization and scoped WebSocket event listeners.",
  ],

  results:
    "Delivered a responsive full-stack platform supporting concurrent collaborative sessions with sub-100ms real-time event propagation.",
}

export default devpulse
