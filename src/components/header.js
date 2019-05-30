import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-content">
      <div className={"nav-branding sidebar-left"}>
        <h1>
          <Link
            to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      
      <div className="container-full-width header-right" />
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
