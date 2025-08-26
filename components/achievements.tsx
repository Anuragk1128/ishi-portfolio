"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award } from "lucide-react"

export function Achievements() {
  const achievements = [
    "Completed 6-month Wipro TalentNext training program, covering Java, SQL and professional development modules",
    "Recognized for outstanding performance and contributions in web development during the Uplift Project organized by Girlscript Foundation in 2021",
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Highlights and recognitions from my learning journey
          </p>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Award className="h-5 w-5" /> Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {achievements.map((a) => (
                <li key={a} className="flex items-start text-muted-foreground">
                  <span className="text-primary mr-2">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
