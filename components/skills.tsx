"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Azure", level: 65 },
        { name: "Google Cloud", level: 50 },
      ],
    },
    {
      title: "DevOps Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Jenkins", level: 75 },
        { name: "GitLab CI/CD", level: 70 },
      ],
    },
    {
      title: "Infrastructure as Code",
      skills: [
        { name: "Terraform", level: 75 },
        { name: "Ansible", level: 65 },
        { name: "CloudFormation", level: 60 },
      ],
    },
    {
      title: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", level: 65 },
        { name: "Grafana", level: 70 },
        { name: "ELK Stack", level: 60 },
      ],
    },
  ]

  const technologies = [
    "Linux",
    "Python",
    "Bash",
    "Git",
    "YAML",
    "JSON",
    "Nginx",
    "Apache",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "MongoDB",
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I've been working with during my DevOps journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
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
              <CardTitle className="text-xl">Additional Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
