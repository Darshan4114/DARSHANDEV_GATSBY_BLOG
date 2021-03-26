import React from "react"
import styl from "./header.module.scss"

export default function Header() {
  return (
    <header style={{ alignItems: "center" }}>
      <nav>
        <ul className={styl.navList}>
          <li className={styl.navItem}>Dev Blog</li>
          <li className={styl.navItem}>Dev Blog1</li>
          <li className={styl.navItem}>Dev Blog2</li>
        </ul>
      </nav>
    </header>
  )
}
