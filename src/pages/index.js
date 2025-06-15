import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CVSection from "../components/Motion/CVSection"
import TextReveal from "../components/Motion/TextReveal"
import ScrollBackground from "../components/Motion/BackgroundScroll"
import AnimatedSection from "../components/Motion/AnimatedSection"
import { motion } from "framer-motion"
import { cvData } from "../data/cvData"
import "../styles/index.css"
import ExperienceSection from "./home/experienceSection"
import ProjectSection from "./home/projectSection"

// Stagger animation for Skills
const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const skillItemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
}
const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <div className="cv-container">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal text={cvData.name}></TextReveal>
          <div>{cvData.title}</div>
        </motion.header>

        {/* Summary */}
        <motion.div
          whileHover={{
            scale: 1.1,
            color: "#fff",
            background: "var(--color-primary)",
          }}
          className="my-2 project-card"
        >
          {cvData.summary}
        </motion.div>
        <div className="flex">
          {/* Education   */}
          <div className="basis-2/3">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="section-title">Education</h3>
              {cvData.education.map((edu, index) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "#fff",
                    background: "var(--color-primary)",
                  }}
                  className="project-card"
                  transition={{ duration: 0.3 }}
                  key={index}
                >
                  <p>{edu.period}</p>
                  <p>{edu.institution}</p>
                  <p>{edu.degree}</p>
                  <p>{edu.level}</p>
                </motion.div>
              ))}
            </motion.section>
          </div>

          {/* Languages */}
          <div className="basis-1/3 ">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="languages-section"
            >
              <h3 className="section-title">Languages</h3>
              <ul className="languages-list justify-center">
                {cvData.languages.map((lang, index) => (
                  <motion.li
                    key={index}
                    whileHover={{
                      scale: 1.1,
                      color: "#fff",
                      background: "var(--color-primary)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="project-card"
                  >
                    {lang}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
        {/* Skills */}
        <motion.section
          // className="skills-section"
          variants={skillsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            {Object.entries(cvData.skills).map(([category, skills], index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={skillItemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                }}
              >
                <h4>
                  {category
                    .replace("_", " ")
                    .split(" ")
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h4>
                {/* <ul>
                  {skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                    
                </ul> */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-[--color-secondary] text-white rounded-full text-sm"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-4 h-4 mr-1 mb-0"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Experience */}
        <ExperienceSection cvData={cvData}/>
        {/* <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="experience-section"
        >
          <h3 className="section-title">Experience</h3>
          {cvData.experience.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, backgroundColor: "#f0f8ff" }}
              transition={{ duration: 0.3 }}
              className="project-card"
            >
              <p className="experience-period">{exp.period}</p>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-role">{exp.role}</p>
              <p className="experience-details">{exp.details}</p>
            </motion.div>
          ))}
        </motion.section> */}

        {/* Projects */}
        <ProjectSection cvData={cvData}/>
      </div>
      <StaticImage
        src="../images/logo/logo.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <div>
        Welcome to <b>QuiHP's world!</b>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
