import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
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
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-2">
        {cvData?.projects?.map(project => (
          <div
            key={project.id}
            className="project-card shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <StaticImage
              alt={project.name}
              className="h-48 w-full object-cover"
              src="../../images/example.png"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.role}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project?.tech?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[--color-secondary] text-sm text-white px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="text-sm text-white bg-[--color-primary] hover:bg-[--color-primary-bold] transition-colors px-4 py-2 rounded"
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {selectedProject.name}
              </h3>
              <motion.ul
                className="text-gray-700 text-sm  list-inside space-y-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {selectedProject?.details?.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </motion.ul>
            </div>
          </div>
        )}
      </div>
    </section>
    // <motion.section
    //   className="projects-section"
    //   variants={projectsContainerVariants}
    //   initial="hidden"
    //   animate="visible"
    // >
    //   <h3 className="section-title">Projects</h3>
    //   {cvData?.projects?.map((proj, index) => (
    //     <motion.div
    //       key={index}
    //       className="project-card"
    //       variants={projectItemVariants}
    //       whileHover={{
    //         scale: 1.05,
    //         rotate: 2,
    //         boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    //       }}
    //       transition={{ duration: 0.3 }}
    //     >
    //       <h4>{proj.name}</h4>
    //       <p className="project-role">Role: {proj.role}</p>
    //       <div className="flex justify-center flex-wrap mt-2 gap-1">
    //         {proj?.tech?.map((tech, i) => (
    //           <span
    //             key={i}
    //             className="bg-[--color-secondary] text-sm text-white px-2 py-0.5 rounded-full"
    //           >
    //             {tech}
    //           </span>
    //         ))}
    //       </div>
    //       <ul>
    //         {proj?.details?.map((detail, i) => (
    //           <li key={i}>{detail}</li>
    //         ))}
    //       </ul>
    //     </motion.div>
    //   ))}
    // </motion.section>
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
