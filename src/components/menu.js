import React from "react"

import { Link } from "gatsby"

export const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <li>
        <Link
          to="/"
          activeStyle={{
            color: "orange",
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          activeStyle={{
            color: "orange",
          }}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          activeStyle={{
            color: "orange",
          }}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          activeStyle={{
            color: "orange",
          }}
        >
          Blog
        </Link>
      </li>
    </ul>
  </div>
)
