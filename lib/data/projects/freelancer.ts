import type { Project } from "../types"

const freelancer: Project = {
  slug:     "freelancer",
  name:     "Freelancer",
  tagline:  "Full-stack marketplace connecting talent, clients, and mentorship.",
  category: "Full Stack Platform",
  year:     "2026",
  status:   "live",

  shortDescription:
    "Job marketplace with role-based dashboards, mentor calendar scheduling, Razorpay payments, and 92+ Lighthouse score.",

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Clerk OAuth",
    "Razorpay",
  ],

  github: "https://github.com/uv3704/Freelancer",

  overview:
    "Freelancer is a comprehensive, production-grade job marketplace platform featuring role-based dashboards for freelancers, clients, and administrators. It integrates real-time application tracking, mentor calendar booking, a 1-5 star review system, and secure payment processing via Razorpay.",

  features: [
    {
      title: "Role-Based Multi-Dashboard",
      description:
        "Customized portal views and permission controls for freelancers, employers/clients, and administrators.",
    },
    {
      title: "Mentor Scheduling & Reviews",
      description:
        "Integrated calendar booking system with 1-5 star feedback ratings and structured mentor consultation sessions.",
    },
    {
      title: "Razorpay Financial Pipeline",
      description:
        "Secure automated checkout and payment capture for project milestones and mentorship bookings.",
    },
    {
      title: "Performance & Auth Optimization",
      description:
        "Clerk OAuth integration, reduced bundle size from 350KB to 120KB, achieving a 92+ Google Lighthouse score.",
    },
  ],
}

export default freelancer
