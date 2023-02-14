import React from 'react'
import style from "./BattleButton.module.css";

function BattleButton({onClick}) {
  return (
    <button className={style.button} onClick={onClick}>
        Start Battle
    </button>
  )
}

export default BattleButton