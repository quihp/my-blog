import * as React from "react"
import { Link } from "gatsby"
import { COLORS } from "src/constants/colors"

const CustomLink = ({ to, children, className }) => (
  <Link
    to={to}
    className={
      className ??
      `text-[${COLORS.secondary}] hover:text-[${COLORS.primary}] no-underline hover:underline hover:cursor-pointer`
    }
  >
    {children}
  </Link>
)
export default CustomLink
