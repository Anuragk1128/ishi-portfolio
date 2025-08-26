"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Microservices Deployment Pipeline",
      description:
        "Built a complete CI/CD pipeline for a microservices architecture using Jenkins, Docker, and Kubernetes. Implemented automated testing, security scanning, and deployment strategies.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "Helm", "SonarQube"],
      github: "https://github.com/ishitagupta/microservices-pipeline",
      demo: "https://demo.microservices-pipeline.com",
      image: "/placeholder-s74eo.png",
    },
    {
      title: "Infrastructure as Code with Terraform",
      description:
        "Designed and implemented scalable AWS infrastructure using Terraform modules. Includes VPC, EKS cluster, RDS, and monitoring setup with automated provisioning.",
      technologies: ["Terraform", "AWS", "VPC", "EKS", "RDS", "CloudWatch"],
      github: "https://github.com/ishitagupta/terraform-aws-infrastructure",
      demo: null,
      image: "/placeholder-aun60.png",
    },
    {
      title: "Monitoring Stack Setup",
      description:
        "Deployed comprehensive monitoring solution using Prometheus, Grafana, and AlertManager. Created custom dashboards and alerting rules for application and infrastructure monitoring.",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Docker", "Kubernetes"],
      github: "https://github.com/ishitagupta/monitoring-stack",
      demo: "https://monitoring.ishitagupta.dev",
      image: "/placeholder-40sao.png",
    },
    {
      title: "Automated Backup Solution",
      description:
        "Developed automated backup and disaster recovery solution for databases and applications. Implemented cross-region replication and automated testing of backup integrity.",
      technologies: ["Python", "AWS S3", "Lambda", "CloudFormation", "Bash"],
      github: "https://github.com/ishitagupta/automated-backup",
      demo: null,
      image: "/placeholder-4jnth.png",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the DevOps projects I've worked on during my learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" asChild className="flex-1">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
