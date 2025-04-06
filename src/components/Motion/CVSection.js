import { motion } from "framer-motion"
import * as React from "react"

const CVSection = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    className="my-16 p-8 bg-white shadow-lg rounded-lg"
  >
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="mt-4 text-lg">{children}</p>
  </motion.section>
)

export default CVSection
