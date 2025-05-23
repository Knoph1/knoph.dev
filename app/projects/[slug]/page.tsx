import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Knoph O. Ayieko Portfolio`,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-20">
      <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground mt-2">{project.description}</p>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-xl">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Project Overview</h2>
            <p>
              {project.longDescription ||
                "This project represents a significant milestone in my professional journey, showcasing my technical skills and problem-solving abilities. It was developed with a focus on user experience, performance, and maintainability."}
            </p>

            <h2>Challenges and Solutions</h2>
            <p>
              During the development of this project, I encountered several challenges that required creative solutions:
            </p>
            <ul>
              <li>Ensuring responsive design across all device sizes while maintaining visual consistency</li>
              <li>Optimizing performance for users with varying internet connection speeds</li>
              <li>Implementing secure authentication and data protection measures</li>
            </ul>

            <h2>Key Features</h2>
            <ul>
              <li>Intuitive user interface with accessibility considerations</li>
              <li>Robust backend architecture with efficient data management</li>
              <li>Comprehensive error handling and user feedback mechanisms</li>
              <li>Scalable infrastructure to accommodate future growth</li>
            </ul>

            <h2>Results</h2>
            <p>
              The project was successfully delivered and resulted in improved user engagement and operational
              efficiency. Stakeholders were particularly satisfied with the intuitive interface and reliable performance
              under various conditions.
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-8">
            <div className="bg-muted p-6 rounded-xl space-y-4">
              <div>
                <h3 className="font-medium text-sm text-muted-foreground">PROJECT TYPE</h3>
                <p>{project.category}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground">TIMELINE</h3>
                <p>{project.timeline || "3 months"}</p>
              </div>

              <div>
                <h3 className="font-medium text-sm text-muted-foreground">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-background px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                {project.liveUrl && (
                  <Button className="w-full" asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Site <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}

                {project.githubUrl && (
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h3 className="font-bold mb-4">Need a similar project?</h3>
              <p className="text-muted-foreground mb-4">
                I'm available for freelance projects. Let's work together to bring your ideas to life.
              </p>
              <Button className="w-full" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
