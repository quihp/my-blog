import Layout from "../components/layout"
import React from "react"
import Seo from "src/components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../styles/contact.css"
const ContactPage = () => {
  return (
    <Layout>
      <div className="social-links">
        <a
          href="https://facebook.com/huynhphuqui.1811"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="4x" />
        </a>
        <a
          href="https://www.linkedin.com/in/huynhphuqui1997/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Contact" />
export default ContactPage
