import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { menuLinks } from "../constants/links"
import CustomLink from "./Link/link"
import { COLORS } from "src/constants/colors"
import { useLocation } from "@reach/router"

const Header = ({ siteTitle }) => {
  const location = useLocation()
  const pathName = location.pathname

  console.log(location)
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuLinks.map(link => {
            let linkClass =
              "block relative font-medium " +
              "no-underline" +
              " text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
            if (
              pathName === link.path ||
              (link.path !== "/" && pathName.includes(link.path))
            ) {
              linkClass +=
                "  bg-[--foreground] p-2.5 rounded-3xl text-white transition duration-300 ease-in-out"
            } else {
              linkClass +=
                " hover:text-[--foreground] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-[--foreground] before:transition-transform before:duration-600 before:origin-center hover:before:scale-x-100"
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
