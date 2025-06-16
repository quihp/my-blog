import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import "../../styles/index.css"

const ProjectSection = ({ cvData }) => {
  // Stagger animation for Experience and Projects
  const projectsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger for dramatic effect
      },
    },
  }
  const projectItemVariants = {
    hidden: { opacity: 0, rotateX: 90, scale: 0.8 },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }
  return (
    <motion.section
      className="projects-section"
      variants={projectsContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <h3 className="section-title">Projects</h3>
      {cvData?.projects?.map((proj, index) => (
        <motion.div
          key={index}
          className="project-card"
          variants={projectItemVariants}
          whileHover={{
            scale: 1.05,
            rotate: 2,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <h4>{proj.name}</h4>
          <p className="project-role">Role: {proj.role}</p>
          <div className="flex justify-center flex-wrap mt-2 gap-1">
            {proj?.tech?.map((tech, i) => (
              <span
                key={i}
                className="bg-[--color-secondary] text-sm text-white px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <ul>
            {proj?.details?.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.section>
    // <motion.section
    //   className="projects-section py-10 px-4 "
    //   variants={projectsContainerVariants}
    //   initial="hidden"
    //   animate="visible"
    // >
    //   <h3 className="section-title text-3xl font-bold text-white mb-8">
    //     Projects
    //   </h3>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //     {cvData.projects.map((proj, index) => (
    //       <motion.div
    //         key={index}
    //         className=" bg-gradient-to-br from-purple-500 to-blue-600 backdrop-blur-md rounded-lg shadow-lg border border-white/20 text-white"
    //         variants={projectItemVariants}
    //         whileHover={{
    //           scale: 1.05,
    //           rotate: 2,
    //           boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    //         }}
    //         transition={{ duration: 0.3 }}
    //       >
    //         <h4 className="text-lg font-semibold">{proj.name}</h4>
    //         <p className="project-role text-sm text-gray-200">
    //           Role: {proj.role}
    //         </p>
    //         <p className="project-tech text-sm text-gray-200">
    //           Tech: {proj.tech}
    //         </p>
    //         <ul className="list-disc ml-5 text-gray-100 text-sm">
    //           {proj.details.map((detail, i) => (
    //             <li key={i}>{detail}</li>
    //           ))}
    //         </ul>
    //       </motion.div>
    //     ))}
    //   </div>
    // </motion.section>
  )
}

export default ProjectSection
