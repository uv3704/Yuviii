import betterbee       from "./projects/betterbee"
import freelancer      from "./projects/freelancer"
import codestorm       from "./projects/codestorm"
import devpulse        from "./projects/devpulse"
import academicrecords from "./projects/academicrecords"
import docuforge       from "./projects/docuforge"
import visionx         from "./projects/visionx"
import type { Project } from "./types"

export type { Project }

/** Ordered list — this is the display order site-wide */
export const projects: Project[] = [
  betterbee,
  freelancer,
  codestorm,
  devpulse,
  academicrecords,
  docuforge,
  visionx,
]

/** Look up a single project by slug */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** All slugs — used for generateStaticParams */
export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
