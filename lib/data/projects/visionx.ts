import type { Project } from "../types"

const visionx: Project = {
  slug:     "visionx",
  name:     "VisionX",
  tagline:  "Computer vision, without the infrastructure overhead.",
  category: "AI / ML",
  year:     "2024",
  status:   "in-progress",

  shortDescription:
    "AI-powered computer vision platform for image analysis and intelligent visual insights.",

  technologies: [
    "Python",
    "PyTorch",
    "FastAPI",
    "React",
    "Docker",
    "AWS",
  ],

  github: "https://github.com/uv3704/VisionX",

  overview:
    "VisionX puts computer vision capabilities behind a clean API and a simple dashboard. Upload images or connect a stream — get back object detection, scene understanding, and visual Q&A without managing ML infrastructure yourself.",

  features: [
    {
      title: "Multi-model inference",
      description:
        "Detection, segmentation, and visual question-answering available through a single unified endpoint.",
    },
    {
      title: "Clean REST API",
      description:
        "Designed for developers who want vision capabilities integrated into existing applications without model management.",
    },
    {
      title: "Stream processing",
      description:
        "Supports live image stream analysis in addition to single-image uploads.",
    },
  ],
}

export default visionx
