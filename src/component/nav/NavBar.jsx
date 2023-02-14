import React from 'react';
import Style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={Style.navBar}>
        <div className={Style.title}>
            <h2>Star Wars Battle App</h2>
        </div>
    </div>
  )
}

export default NavBar