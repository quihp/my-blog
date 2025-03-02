import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { menuLinks } from "../constants/links"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <StaticImage
          alt="Qui's logo"
          height={20}
          style={{ margin: 0 }}
          src="../images/logo/logo.png"
        />
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 px-6 py-3 space-y-2">
          {menuLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
      {/* <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link> */}
    </header>
  )
}

export default Header
