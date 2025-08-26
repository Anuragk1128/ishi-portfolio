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
            I have a foundation in Java, SQL, Docker, and Linux, with hands-on experience deploying and managing
            applications on AWS Cloud. I'm eager to apply my knowledge in real-world projects, learn from experienced
            professionals, and contribute to building efficient solutions while continuously enhancing my technical
            skills.
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
              I've worked across CI/CD and cloud environments, focusing on automating builds, deployments, and improving
              reliability. I enjoy translating complex problems into simple, scalable solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              I value mentorship and continuous learning and I'm actively expanding my skills in backend, DevOps, and
              cloud infrastructure to deliver business impact.
            </p>
            <p className="text-muted-foreground">
              Outside of work, I explore new tools, deepen my cloud knowledge, and refine my problem-solving and
              communication skills.
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
