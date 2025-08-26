"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Cloud, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Enthusiast",
      description: "Passionate about AWS, Azure, and cloud-native technologies",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Automation Focused",
      description: "Building CI/CD pipelines and infrastructure as code",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Fast Learner",
      description: "Quickly adapting to new tools and technologies in the DevOps space",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated DevOps Engineer Trainee with 7 months of experience in cloud technologies, automation, and
            infrastructure management. My journey in DevOps began with a passion for bridging the gap between
            development and operations teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Starting my career in DevOps has been an exciting adventure. Over the past 7 months, I've immersed myself
              in learning cloud platforms, containerization technologies, and automation tools that are essential in
              modern software development.
            </p>
            <p className="text-muted-foreground mb-4">
              I believe in the power of continuous learning and staying updated with the latest industry trends. My goal
              is to contribute to building robust, scalable, and efficient infrastructure that enables teams to deliver
              high-quality software faster.
            </p>
            <p className="text-muted-foreground">
              When I'm not working on DevOps projects, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my learning journey with the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {highlight.icon}
                    <div>
                      <h4 className="font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
