import React from "react"
import styl from "./header.module.scss"
// import Logo from "/content/assets/DarshanDevLogoWhitesvg.svg"

export default function Header() {
  return (
    <header style={{ alignItems: "center" }}>
      <nav>
        {/* <Logo className={styl.logo} /> */}
        <ul className={styl.navList}>
          <li className={styl.navItem}>Dev Blog</li>
          <li className={styl.navItem}>Dev Blog1</li>
          <li className={styl.navItem}>Dev Blog2</li>
        </ul>
      </nav>
    </header>
  )
}
