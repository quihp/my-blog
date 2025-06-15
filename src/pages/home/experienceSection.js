import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import "../../styles/index.css"

const ExperienceSection = ({ cvData }) => {
  const containerRef = useRef(null)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)

  const checkScroll = () => {
    const el = containerRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5)
    setCanScrollLeft(scrollLeft > 5)
  }

  const scrollRight = () => {
    const el = containerRef.current
    if (!el) return

    el.scrollBy({ left: 300, behavior: "smooth" })
  }

  const scrollLeft = () => {
    const el = containerRef.current
    if (!el) return

    el.scrollBy({ left: -300, behavior: "smooth" })
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    checkScroll() // initial check
    el.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative w-full py-10"
    >
      <h3 className="section-title">Experience</h3>
      {/* Scroll Left Arrow */}
      {canScrollLeft && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="absolute left-4 top-20 z-10  hidden md:block"
        >
          <div className="flex items-center gap-2 bg-white shadow-md px-2 py-1 rounded-full">
            <button onClick={scrollLeft}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-gray-500 w-4 h-4 animate-bounce-left"
              />
              <span className="text-sm text-gray-500">Back</span>
            </button>
          </div>
        </motion.div>
      )}
      {/* Scroll Right Arrow */}
      {canScrollRight && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="absolute right-4 top-20 z-10  hidden md:block"
        >
          <div className="flex items-center gap-2 bg-white shadow-md px-2 py-1 rounded-full">
            <button onClick={scrollRight}>
              <span className="text-sm text-gray-500">Scroll</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-gray-500 w-4 h-4 animate-bounce-right"
              />
            </button>
          </div>
        </motion.div>
      )}

      <div
        ref={containerRef}
        className="flex overflow-x-auto will-change-transform space-x-6 py-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {cvData.experience.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, backgroundColor: "#f0f8ff" }}
            transition={{ duration: 0.3 }}
            className="project-card min-w-[280px] max-w-sm bg-white rounded-2xl shadow-md scroll-snap-align-start flex-shrink-0"
          >
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="font-medium">{exp.role}</p>
            <h4 className="text-lg font-semibold mt-1">{exp.company}</h4>
            <p className="text-gray-700 text-md mt-2">{exp.details}</p>
            <div className="flex flex-wrap mt-2 gap-1">
              {exp.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[--color-secondary] text-sm text-white px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default ExperienceSection
