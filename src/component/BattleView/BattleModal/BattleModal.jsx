import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import style from "./BattleModal.module.css";
import battleGif from "../../../assets/battle_sabers.gif";
import {randomWinner, searchAffiliations} from "../../BattleView/utils"

function BattleModal({ 
  charArray,
  onClose
}) {

    const { characters } = useSelector( state => state.global_state)
    const [loading, setLoading ] = useState(true);

    
    var winner = randomWinner(charArray)
    const findWinner = characters.filter( char => char.id === winner)
   
    const quoteByAffiliation = searchAffiliations(
      findWinner[0]?.affiliations 
      )

     
    useEffect(() => {
  
      setTimeout(() => {
        setLoading(false)
      }, 2500);
     }, [])

  return (
    <div className={style.modal}>
        <div className={style.overlay}>
            { loading ?

            <div className={style.modalLoader} >
              <div className={style.battleGif} >
                <img src={battleGif} alt=""  />
              </div> 
            </div>
            
            :

            <div className={quoteByAffiliation.side === "Light Side" ? 
            style.modalContent_lightSide  : 
            style.modalContent_darkSide}>

                <div className={style.headerModal}>
                  <h1>Battle Winner</h1>
                </div>

                <div className={style.searchContent}>
                  <img src={findWinner[0]?.image} alt=""  />
                </div>

                <div className={style.winnerData} >

                  <h3>{findWinner[0]?.name} </h3>
                  <span>
                    {`"${quoteByAffiliation.quote}"`}
                  </span>

                </div>
                
                <div className={style.actionsButtons} >
                        <button className={style.button} onClick={onClose} >Battle Again</button>
                        <Link to="/">
                          <button className={style.button}>Back Home</button>
                        </Link>
                </div>

              </div>
            }
        </div>
     
    </div>
  )
}

export default BattleModal;