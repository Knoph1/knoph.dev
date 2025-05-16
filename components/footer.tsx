import Link from "next/link"
import { Github, Linkedin, Mail, Mountain, Twitter, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6" />
            <span className="font-bold">Knoph O. Ayieko</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Software Developer | IT Specialist | Virtual Assistant
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <Link href="https://github.com/Knoph1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/knoph-ayieko-83464918a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://web.facebook.com/noah.knock.5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/knoph_ol_a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://x.com/Knoph_OL_A" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:knophayieko@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Knoph O. Ayieko | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
