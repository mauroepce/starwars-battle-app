import React from 'react';
import { Link } from "react-router-dom";
import Style from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={Style.navBar}>
            <Link to="/">
        <div className={Style.title}>
              <h2>Star Wars Battle App</h2>
        </div>
            </Link>
    </div>
  )
}

export default NavBar