import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { addBattlePlayers } from '../reducer/actions'
import Style from "./Home.module.css"

function Home() {

    const dispatch = useDispatch();
  
    const [players, setPlayers] =useState({player1: "", player2: ""})

    const handlerPlayersKeyDown = (obj) => {
      if(event.key === "Enter"){
        if(obj.player1){
          setPlayers({...players, player1: obj.player1})
          playerOneInput.value = "";
        } else if (obj.player2){
          setPlayers({...players, player2: obj.player2})
          playerTwoInput.value = "";
        }
      }
    }

    const clickContinue = () => {
      dispatch(addBattlePlayers(players))
    }

  return (
    <>
      <div className={Style.main_container}>
        <div className={Style.left_container}>

            <div className={Style.character_container}>
            {players.player1.length > 0 && (
              <div className={Style.playersDisplay}>
                <h1>{players.player1 } </h1>
              </div>
            )}
            {!players.player1 &&
            <h1>Player 1</h1>}
            {!players.player1 && 
            <input 
            id="playerOneInput"
            placeholder="Enter your avatar name..." 
            className={Style.input} 
            name="text" 
            type="text" 
            onKeyDown={(e) => handlerPlayersKeyDown({player1: e.target.value})}
            />
              }
            </div>
            
        </div>

        <div className={Style.middleContainer}>
          <h1>Vs</h1>

        </div>
        
        <div className={Style.right_container}>
            <div className={Style.character_container}>
            {players.player2.length > 0 && (
              <div className={Style.playersDisplay}>
                <h1>{players.player2 } </h1>
              </div>
            )}
            {!players.player2 
            &&<h1>Player 2</h1>}
            {!players.player2 &&
            <input 
            id="playerTwoInput"
            placeholder="Enter your avatar name..." 
            className={Style.input} 
            name="text" 
            type="text" 
            onKeyDown={(e) => handlerPlayersKeyDown({player2: e.target.value})}
            />
              }
            </div>
        </div>
        
    </div>
    <div className={Style.homeQuote}>
      <h2>Light or Dark side? Who will win?</h2>
    </div>
    <div className={Style.battleButtonContainer}>
      <Link to="/battle">
        <button 
        className={players.player1.length > 0 && players.player2.length > 0 ? Style.button : Style.buttonDisabled}
        onClick={clickContinue}
        disabled={players.player1.length > 0 && players.player2.length > 0 ? false : true}
        >Continue</button>
      </Link>
    </div>
    </>
  )
}

export default Home