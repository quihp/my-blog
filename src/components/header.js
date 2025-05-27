import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { menuLinks } from "../constants/links"
import CustomLink from "./Link/link"
import { COLORS } from "src/constants/colors"
import { useLocation } from "@reach/router"
import "../styles/header.css"

const Header = ({ siteTitle }) => {
  const location = useLocation()
  const pathName = location.pathname

  console.log(location)
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header>
      <div className="navigation">
        <div className="navigation-container-full">
          <div className="bg-[var(--background)] px-2.5 rounded-3xl">
            <StaticImage
              alt="Qui's logo"
              height={30}
              width={30}
              style={{ margin: 0, display: "block" }}
              src="../images/logo/logo.png"
            />
          </div>
          {/* Desktop Menu */}
          <nav className="hidden  md:flex items-center space-x-6">
            {menuLinks.map(link => {
              let linkClass =
                "block relative font-medium " +
                "no-underline" +
                "  hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
              if (
                pathName === link.path ||
                (link.path !== "/" && pathName.includes(link.path))
              ) {
                linkClass +=
                  "  bg-[--color-secondary] p-2.5 rounded-3xl text-[--hover-color-text] transition duration-300 ease-in-out"
              } else {
                linkClass +=
                  " text-[--color-primary] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-[--color-secondary] before:transition-transform before:duration-600 before:origin-center hover:before:scale-x-100"
              }
              return (
                <Link key={link.name} href={link.path} className={linkClass}>
                  {link.name}
                </Link>
              )
            })}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 px-6 py-3 space-y-2">
          {menuLinks.map(link => (
            <CustomLink
              key={link.path}
              to={link.path}
              className="block text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </CustomLink>
          ))}
        </nav>
      )}
      <div className="bg-[var(--color-primary)] min-h-[var(--header-height)] header-backgroud">
        <div className="title-centre ">
          <h1 className="mb-0">
            {
              menuLinks.find(
                link =>
                  pathName === link.path ||
                  (link.path !== "/" && pathName.includes(link.path))
              )?.name
            }
          </h1>
          <div className="bar-big">
            <div className="bar-small"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
