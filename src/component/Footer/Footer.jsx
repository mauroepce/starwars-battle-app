import React from 'react'
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <span>© 2023 By mauroepce</span>
      <div className={style.icons}>
        <a href="https://github.com/mauroepce" target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/mauroepce/" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a> 
      </div>

    </div>
  )
}

export default Footer