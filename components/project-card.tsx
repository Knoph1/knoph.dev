import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { ProjectType } from "@/lib/projects"

interface ProjectCardProps {
  project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-md">
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {project.title}</span>
      </Link>

      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground line-clamp-2 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="bg-muted px-2 py-1 rounded-md text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-muted px-2 py-1 rounded-md text-xs">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  )
}
