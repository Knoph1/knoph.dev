import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me | Knoph O. Ayieko Portfolio",
  description: "Learn more about Knoph O. Ayieko, a Full Stack Developer with expertise in modern web technologies",
  keywords: ["about", "about me", "developer", "software developer", "web developer", "skills", "experience", "work experience", "profession", "education", "education background"],
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <div className="sticky top-20">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-6">
              <Image
                src="/images/profile.png"
                alt="Knoph O. Ayieko"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
              <Button className="w-full" asChild>
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              <Button variant="outline" className="w-full" asChild>
                <a href="/Resume.pdf" download="Knoph-O. Ayieko - Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Knoph O. Ayieko, a dedicated Full Stack Developer, IT Specialist and Certified Virtual
                Assistant based in Nairobi & Eldoret, Kenya. My journey in technology is driven by a passion for
                creating solutions that bridge the gap between innovation and real-world needs.
              </p>
              <p>
                I hold a BSc in Information Technology from the University of Kabianga and have further honed my skills
                through the ALX Africa Software Engineering Program. My experiences span developing digital health
                platforms, managing IT projects and providing virtual assistance to diverse clients.
              </p>
              <p>
                When I'm not immersed in code, I enjoy exploring new technologies, engaging in research and
                contributing to community development initiatives.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="font-bold">Full-Stack Web Developer</h3>
                <p className="text-primary">O.L Enterprises & Services Co. Ltd. • January 2025 - Present</p>
                <p className="text-muted-foreground">
                  Designed, developed, and maintained front-end and back-end systems using HTML, CSS, JavaScript,
                  Node.js and MongoDB. Created responsive, scalable, secure applications and delivered solutions via
                  cross-functional collaboration. Handled the full development process for seamless user experience.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="font-bold">Back-End Web Developer</h3>
                <p className="text-primary">ALX Africa (Git-at-a-Startup) • November 2024 - January 2025</p>
                <p className="text-muted-foreground">
                  Developed Ashker Credit Solution's MVP. Built efficient, secure back-end systems using Python, Flask
                  and SQL. Integrated backend with frontend and optimized databases. Collaborated with team to meet
                  deadlines and deliver client-ready product.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="font-bold">IT Technician & Part-Time Lecturer</h3>
                <p className="text-primary">University of Kabianga • September 2023 - January 2025</p>
                <p className="text-muted-foreground">
                  Provided technical support to staff and students. Managed hardware/software issues, network
                  maintenance. Taught practical IT courses, guiding students in core skills.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="font-bold">Virtual Assistant</h3>
                <p className="text-primary">ALX Africa • July 2024 - September 2024</p>
                <p className="text-muted-foreground">
                  Trained and certified as a professional virtual assistant. Gained skills in remote support,
                  calendar/email management, data entry, CRM and effective communication. Built administrative and
                  organizational capabilities.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="font-bold">IT Attachee</h3>
                <p className="text-primary">Kenya Power & Lighting Co. Ltd. (KPLC) • May 2022 - July 2022</p>
                <p className="text-muted-foreground">
                  Supported installation, maintenance, troubleshooting of IT systems. Worked with hardware/software at
                  KPLC North Rift HQ. Gained hands-on experience in technical support.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4 space-y-2">
                <h3 className="font-bold">Entrepreneur – Café & Cyber Business Owner</h3>
                <p className="text-primary">Self-Employed • January 2019 - December 2024</p>
                <p className="text-muted-foreground">
                  Founded and ran a local café and cyber business. Managed customer service, bookkeeping and daily
                  operations. Provided internet access, printing, and document services to the community. Developed a
                  strong understanding of business management, customer relations and tech support.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-2 border-primary pl-4 space-y-2">
              <h3 className="font-bold">BSc in Information Technology</h3>
              <p className="text-primary">University of Kabianga • 2019 - 2023</p>
              <p className="text-muted-foreground">
                Awarded: Second Class Honours (Upper Division). Graduated with strong academic and hands-on experience
                in software development, networking, databases, systems analysis and IT project management. Final Year
                Project: Medical Expert Desktop System for Diagnosis and Prescription.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4 space-y-2 mt-6">
              <h3 className="font-bold">Certificate in Introduction to Cyber Security</h3>
              <p className="text-primary">Kenyatta University (KU)-CISCO Networking Academy • June - July 2022</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">Software Engineering Program (FE and BE)</h3>
                <p className="text-sm text-muted-foreground">ALX Africa • 2024-2025</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">Front-End Web Development</h3>
                <p className="text-sm text-muted-foreground">ALX Africa • 2025</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">CCNA</h3>
                <p className="text-sm text-muted-foreground">Cisco • 2025</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">Google Support IT, CompTIA Security+</h3>
                <p className="text-sm text-muted-foreground">2024</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">Certified Virtual Assistant</h3>
                <p className="text-sm text-muted-foreground">ALX Africa • 2024</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">AICE AI Smart Kit</h3>
                <p className="text-sm text-muted-foreground">ALX Africa • 2024</p>
              </div>
              <div className="bg-muted p-3 rounded-lg">
                <h3 className="font-medium">Back-End Web Development</h3>
                <p className="text-sm text-muted-foreground">ALX Africa • 2024</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Membership</h2>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">Association of Computing Practitioners-Kenya (ACPK)</h3>
                <p className="text-sm text-muted-foreground">Professional Member | 3rd December, 2024 - Present</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">AA Driving School</h3>
                <p className="text-sm text-muted-foreground">Valid Driver's License - Class B2</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">Travel Ready - Internationally</h3>
                <p className="text-sm text-muted-foreground">Valid Passport</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">💻 Web & Software Development</h3>
                <p className="text-sm text-muted-foreground">
                  Full-Stack Development (React, Next.js, Node.js, Express), RESTful APIs, MongoDB, MySQL, PostgreSQL,
                  TypeScript, Tailwind CSS, Git, Docker, AWS
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">🗃️ Database Management</h3>
                <p className="text-sm text-muted-foreground">
                  SQL (MySQL, PostgreSQL), NoSQL (MongoDB), Database design & normalization, Query optimization
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">🔧 Systems & Networking</h3>
                <p className="text-sm text-muted-foreground">
                  Hardware/software troubleshooting, Network configuration, Systems analysis and integration
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">🧑‍💼 Virtual Assistant Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Calendar/email management, Data entry, Document preparation, Digital tools expertise
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Non-Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">🤝 Interpersonal & Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Written and verbal communication, Active listening, Public speaking, Client engagement
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">🎯 Leadership & Management</h3>
                <p className="text-sm text-muted-foreground">
                  Team leadership, Project coordination, Decision-making, Problem-solving
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">⏱️ Organizational & Time Management</h3>
                <p className="text-sm text-muted-foreground">
                  Multitasking, Deadline management, Planning, Goal setting
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium">🙏 Values & Personal Attributes</h3>
                <p className="text-sm text-muted-foreground">
                  God-fearing, Empathetic, Family-oriented, Reliable, Ambitious
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
