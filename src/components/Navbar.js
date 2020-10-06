import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <ul className="nave-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/examples">Examples</Link>
          </li>
          <li>
            <Link to="/images">Images</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
