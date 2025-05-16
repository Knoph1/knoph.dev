import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Knoph O. Ayieko | Web Developer | IT Specialist | Virtual Assistant",
  description:
    "Portfolio of Knoph O. Ayieko, a Full Stack Developer passionate about crafting impactful digital solutions",
  keywords: ["knoph.dev", "developer", "portfolio", "full stack", "web development", "software developer", "web developer", "IT specialist", "IT consultant", "virtual assistant"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knoph.dev",
    title: "Knoph O. Ayieko | Software Developer | IT Specialist | Virtual Assistant",
    description:
      "Portfolio of Knoph O. Ayieko, a Full Stack Developer passionate about crafting impactful digital solutions",
    siteName: "knoph.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knoph O. Ayieko | Software Developer | IT Specialist | Virtual Assistant",
    description:
      "Portfolio of Knoph O. Ayieko, a Full Stack Developer passionate about crafting impactful digital solutions",
    creator: "@Knoph_OL_A",
  },
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex flex-col items-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="mx-auto relative w-32 h-32 md:w-40 md:h-40 mb-6 overflow-hidden rounded-full border-4 border-primary/20">
            <Image src="/images/profile.png" alt="Knoph O. Ayieko" fill className="object-cover" priority />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Knoph O. Ayieko</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Software Developer | IT Specialist | Virtual Assistant</p>
          <p className="text-lg text-muted-foreground">
            Full Stack Developer passionate about crafting impactful digital solutions.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="https://github.com/Knoph1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/knoph-ayieko-83464918a" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://web.facebook.com/noah.knock.5/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/knoph_ol_a" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://x.com/Knoph_OL_A" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:knophayieko@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <p className="text-muted-foreground">
              Direct contact:<br><span className="font-medium">+254 740 327 958</span> (Calls, SMS & WhatsApp)
            </p>
          </div>
          <div className="pt-8 flex gap-4 justify-center">
            <Link href="/about">
              <Button>About Me</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Summary Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
            <p className="text-muted-foreground">
              Knoph Oluoch Ayieko is a multifaceted professional with a strong foundation in web and software
              development, IT systems support and virtual assistance. He possesses hands-on expertise in full-stack web
              technologies including Node.js, Express.js, MongoDB, MySQL and React, complemented by experience in
              database management, API development, system integration and DevOps fundamentals. In parallel, he brings
              proficiency in administrative support, digital productivity tools, online communication platforms,
              research and client relationship management. Beyond technical capabilities, Knoph is distinguished by
              exceptional communication, leadership and problem-solving skills, coupled with a deep sense of integrity,
              adaptability and continuous self-improvement. His diverse competencies, professionalism and value-driven
              approach make him a dependable asset across technology, operations and service-driven roles.
            </p>
            <div className="mt-6">
              <Link href="/about">
                <Button variant="outline" className="group">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">Some of my recent work</p>
            </div>
            <Link href="/projects" className="mt-4 md:mt-0">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "TypeScript",
              "Tailwind CSS",
              "RESTful APIs",
              "Git",
              "WordPress",
            ].map((skill) => (
              <div key={skill} className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and open to new opportunities.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
