/**
 * Project content model.
 * Every field except slug/name/tagline/category/year is optional.
 * Empty optional fields are not rendered — the page handles this automatically.
 * Add content to any field and it will appear on the detail page without
 * touching any component or page file.
 */
export interface ProjectMedia {
  src: string
  alt: string
  caption?: string
}

export interface ProjectFeature {
  title: string
  description: string
}

export interface Project {
  // Identity
  slug:        string
  name:        string
  tagline:     string
  category:    string
  year:        string
  status:      "live" | "in-progress" | "archived"

  // Index / card
  shortDescription: string
  thumbnail?: ProjectMedia    // If undefined → placeholder rendered at fixed ratio

  // Technologies
  technologies: string[]

  // Links — only add when real
  github?: string
  live?:   string

  // Optional long-form sections
  overview?:    string
  motivation?:  string
  problem?:     string
  solution?:    string
  role?:        string
  features?:    ProjectFeature[]
  architecture?: string        // description or diagram caption
  decisions?:   string         // notable engineering decisions
  challenges?:  string[]
  learnings?:   string[]
  results?:     string

  // Media — empty arrays render nothing
  screenshots?:  ProjectMedia[]
  gallery?:      ProjectMedia[]
  demoVideoUrl?: string
  notes?:        string
}
