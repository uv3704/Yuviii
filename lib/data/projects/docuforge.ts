import type { Project } from "../types"

const docuforge: Project = {
  slug: "docuforge",
  name: "DocuForge : Document Parser & Vector Search",
  tagline: "Automated document ingestion, OCR parsing, and vector semantic retrieval for unstructured technical literature.",
  category: "AI & Vector Systems",
  year: "2024 – 2025",
  status: "live",
  shortDescription:
    "An AI document processing platform that ingests PDFs, invoices, and research papers, generates dense embeddings, and provides instant vector semantic search with citation highlighting.",

  technologies: [
    "Python",
    "FastAPI",
    "ChromaDB",
    "LangChain",
    "React.js",
    "Docker",
  ],

  github: "https://github.com/uv3704",

  overview:
    "DocuForge simplifies technical document discovery by extracting text, tabular data, and metadata from PDF files, converting them into vector chunks, and serving a low-latency semantic search interface.",

  role: "AI & Full-Stack Engineer — Built the FastAPI extraction microservice, configured ChromaDB vector collections, and created the React search dashboard.",

  features: [
    {
      title: "Context-Preserving Chunking",
      description:
        "Recursive character chunking with sliding window overlap to maintain sentence integrity and semantic context across paragraph boundaries.",
    },
    {
      title: "ChromaDB Dense Vector Search",
      description:
        "Cosine similarity search over vector collections enabling instant relevance ranking and cross-document concept queries.",
    },
    {
      title: "Async FastAPI Processing",
      description:
        "Non-blocking background ingestion pipelines for large multi-page PDFs with real-time status webhooks.",
    },
  ],

  results:
    "Enabled sub-second semantic retrieval across 500+ technical PDF documents with accurate source page and paragraph citations.",
}

export default docuforge
