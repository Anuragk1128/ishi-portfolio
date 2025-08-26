"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Graduate Engineer Trainee (CI/CD)",
      company: "Landis+Gyr",
      location: "Noida, India",
      duration: "Mar 2025 – Present",
      description: [
        "Worked in the CI/CD team, managing and optimizing build and deployment pipelines",
        "Hands-on with GitLab, Jenkins, Gerrit, SonarQube, and Mend",
        "Contributed to automation and pipeline improvements for smoother integration and faster delivery",
        "Collaborated with developers to troubleshoot CI/CD issues and improved pipeline reliability by 25%",
      ],
      technologies: ["GitLab", "Jenkins", "Gerrit", "SonarQube", "Mend", "AWS", "Docker"],
    },
    {
      title: "Apprentice",
      company: "WNS Global Services Pvt. Ltd.",
      location: "Gurugram, India",
      duration: "Jun 2022 – Sep 2023",
      description: [
        "Created presentations in PowerPoint and Google Slides aligned with BCG brand guidelines",
        "Translated complex data into clear visuals through custom graphics and diagrams",
        "Managed multiple projects, ensuring accuracy, consistency, and on-time delivery",
      ],
      technologies: ["PowerPoint", "Google Slides", "Canva", "Communication", "Project Management"],
    },
  ]

  const certifications = [
    "AWS Cloud Practitioner Essentials - Coursera (May 2023)",
    "Agile Methodology Virtual Experience Program - Forage (May 2023)",
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey in DevOps and cloud technologies
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <span className="font-semibold">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Certifications & Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
