import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ScrollBackground = ({ children }) => {
  const [bgColor, setBgColor] = useState("#ffffff")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY < 200) setBgColor("#ffffff")
      else if (scrollY < 400) setBgColor("#fef3c7") // Light yellow
      else if (scrollY < 600) setBgColor("#93c5fd") // Light blue
      else setBgColor("#a5b4fc") // Light purple
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8"
    >
      {children}
    </motion.div>
  )
}

export default ScrollBackground
