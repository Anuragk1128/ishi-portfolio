"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer Trainee",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "Jan 2024 - Present",
      description: [
        "Implemented CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 40%",
        "Managed containerized applications using Docker and Kubernetes in AWS EKS",
        "Automated infrastructure provisioning using Terraform and Ansible",
        "Set up monitoring and alerting systems using Prometheus and Grafana",
        "Collaborated with development teams to optimize application performance and reliability",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Prometheus", "Grafana"],
    },
    {
      title: "Cloud Infrastructure Intern",
      company: "CloudTech Startup",
      location: "Bangalore, India",
      duration: "Sep 2023 - Dec 2023",
      description: [
        "Assisted in migrating legacy applications to AWS cloud infrastructure",
        "Learned and implemented Infrastructure as Code practices using CloudFormation",
        "Supported the team in setting up automated backup and disaster recovery solutions",
        "Gained hands-on experience with AWS services including EC2, S3, RDS, and VPC",
      ],
      technologies: ["AWS", "CloudFormation", "EC2", "S3", "RDS", "VPC", "Lambda"],
    },
  ]

  const certifications = [
    "AWS Cloud Practitioner (In Progress)",
    "Docker Certified Associate (Planned)",
    "Kubernetes Administrator (CKA) - Studying",
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
