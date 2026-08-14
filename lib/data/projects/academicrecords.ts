import type { Project } from "../types"

const academicrecords: Project = {
  slug: "academic-records",
  name: "AcademicRecord Core: Java Backend API",
  tagline: "High-throughput academic management API with optimized SQL queries, Hibernate ORM, and connection pooling.",
  category: "Java & Backend Systems",
  year: "2025",
  status: "live",
  shortDescription:
    "An enterprise academic record management backend built with Java, Spring patterns, JDBC, and MySQL — optimized from 500ms down to 80ms response times for 1,000+ records.",

  technologies: [
    "Java",
    "Hibernate",
    "JDBC",
    "Spring Patterns",
    "MySQL",
    "Postman",
    "Docker",
  ],

  github: "https://github.com/uv3704/ThrivesUpJavaProject",

  overview:
    "Engineered during the ThrivesUp Consultancy internship, AcademicRecord Core provides 12+ RESTful endpoints for student records, enrollment workflows, grading matrices, and transcript generation with strict data consistency.",

  role: "Backend Engineer — Designed relational database schemas, developed RESTful API endpoints, and optimized SQL execution bottlenecks.",

  features: [
    {
      title: "Query Optimization (500ms → 80ms)",
      description:
        "Analyzed MySQL execution plans (EXPLAIN), added composite indexes on student enrollment tables, and eliminated N+1 query bottlenecks.",
    },
    {
      title: "12+ RESTful API Endpoints",
      description:
        "Engineered endpoints covering student onboarding, grade audit logs, course registrations, and automated semester GPA calculation.",
    },
    {
      title: "Transactional ACID Guarantees",
      description:
        "Implemented database transaction boundaries with rollback mechanisms to prevent partial updates during batch record ingestion.",
    },
    {
      title: "Comprehensive Postman Test Suites",
      description:
        "Built automated Postman test scripts validating HTTP status codes, payload schemas, and response latency across all 12+ endpoints.",
    },
  ],

  decisions:
    "Employed connection pooling (HikariCP) and prepared statements across all JDBC data access layers to minimize database connection overhead and prevent SQL injection vulnerabilities.",

  learnings: [
    "Profiling database bottlenecks using MySQL slow query logs and query execution trees.",
    "Designing normalized 3NF schemas with appropriate foreign key constraints without hurting read throughput.",
  ],

  results:
    "Achieved an 84% reduction in query execution latency (500ms → 80ms) and maintained 100% data integrity across 1,000+ academic records.",
}

export default academicrecords
