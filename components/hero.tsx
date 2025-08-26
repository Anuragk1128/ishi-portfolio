"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ishita Gupta
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">DevOps Engineer Trainee</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about cloud technologies, automation, and building scalable infrastructure. Currently on a
            journey to master the DevOps ecosystem with 7 months of hands-on experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://github.com/IshitaGupta2892"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/ishitagupta4048"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:ishitagupta2982@email.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="animate-bounce"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
