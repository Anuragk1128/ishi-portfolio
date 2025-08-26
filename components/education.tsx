"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Calendar, MapPin, GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering, CSE (Cloud Computing)",
      institution: "Chandigarh University",
      location: "Gharaun, Punjab",
      duration: "2020 – 2024",
      details: ["CGPA: 7.90"],
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic background and key highlights
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((ed) => (
            <motion.div
              key={ed.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" /> {ed.degree}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{ed.duration}</span>
                      <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{ed.location}</span>
                    </div>
                  </div>
                  <div className="text-muted-foreground font-semibold">{ed.institution}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {ed.details.map((d) => (
                      <li key={d} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
