"use client"

import { useState } from "react"
import { projects } from "@/lib/projects"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  // Get unique categories from projects
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="container px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">My Projects</h1>

      <div className="mb-12">
        <p className="text-xl text-muted-foreground max-w-3xl">
          Here's a collection of my recent work. Each project represents a unique challenge and solution.
        </p>
      </div>

      <ProjectFilters categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

interface ProjectFiltersProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (category: string) => void
}

function ProjectFilters({ categories, activeFilter, setActiveFilter }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "secondary" : "outline"}
          className="rounded-full"
          onClick={() => setActiveFilter(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
