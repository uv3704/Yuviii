import type { Project } from "../types"

const betterbee: Project = {
  slug:     "betterbee",
  name:     "BetterBee",
  tagline:  "Production-ready Multimodal RAG & Knowledge Platform.",
  category: "AI / ML & Full Stack",
  year:     "2026",
  status:   "in-progress",

  shortDescription:
    "Multimodal RAG platform supporting PDFs, images, DOCX, and code files with hybrid retrieval and Ollama embeddings.",

  technologies: [
    "Next.js",
    "FastAPI",
    "LangChain",
    "Ollama",
    "pgvector",
    "Docker",
  ],

  github: "https://github.com/uv3704/BetterBee",

  overview:
    "BetterBee is a production-ready Multimodal Retrieval-Augmented Generation (RAG) platform that ingests, parses, and indexes multimodal data including PDFs, high-res images, DOCX documents, and source code. It features semantic search over vector stores, conversational memory, and streaming responses with precise citations.",

  features: [
    {
      title: "Multimodal Document Ingestion",
      description:
        "Supports end-to-end extraction and parsing of PDFs, images, DOCX files, and code repositories.",
    },
    {
      title: "Hybrid Retrieval & Reranking",
      description:
        "Combines Ollama embeddings with pgvector dense search, keyword matching, and cross-encoder reranking.",
    },
    {
      title: "Streaming APIs & Source Citations",
      description:
        "FastAPI backend with streaming token responses, conversational memory buffers, and verified source citations.",
    },
    {
      title: "Containerized Architecture",
      description:
        "Fully Dockerized pipeline enabling reliable local and cloud microservice deployment.",
    },
  ],
}

export default betterbee
