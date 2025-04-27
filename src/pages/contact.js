import Layout from "../components/layout"
import React from "react"
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
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/huynhphuqui1997/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </Layout>
  )
}

export default ContactPage
