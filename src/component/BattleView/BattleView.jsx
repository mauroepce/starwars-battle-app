import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BattleButton from '../BattleButton/BattleButton';
import SearchModal from '../SearchModal/SearchModal';
import SliderCard from "../SliderCard/SliderCard"
import battleGif from "../../assets/battle_sabers.gif"
import Style from "./BattleView.module.css";
import {randomNumber} from './utils';
import { getStarWarsCharacters } from '../../reducer/actions';
import BattleModal from './BattleModal/BattleModal';
import Loading from '../Loading/Loading';


function BattleView() {

  const dispatch = useDispatch()
  const { players } = useSelector( state => state.global_state)
  const [leftModal, setLeftModal] = useState(false);
  const [rightModal, setRightModal] = useState(false);
  const [loading, setLoading ] = useState(true);
  const [charactersId, setCharactersId] = useState({leftCharacter: 1, rightCharacter: 4})
  const [battle, setBattle] = useState(false)

  //// RANDOM BUTTONS 
  // Random Character => LEFT BUTTON
  const randomLeftChar = () => {
    let random = randomNumber()
    if(random === charactersId.rightCharacter){
      random = randomNumber()
    } else {
      setCharactersId({...charactersId, leftCharacter: random})
    }
  }

  // Random Character => RIGHT BUTTON
  const randomRightChar = () => {
    let random = randomNumber()
    if(random === charactersId.leftCharacter){
      random = randomNumber()
    } else {
      setCharactersId({...charactersId, rightCharacter: random})
    }
  }

  //// BUTTON CHOOSE A CHARACTER 
  // Open Left Modal
  const openLeftModal = () => {
    setLeftModal(!leftModal)
  }

  // Open Right Modal
  const openRightModal = () => {
    setRightModal(!rightModal)
 }

//  Close Modal
 const closeModal = () => {
  if(leftModal){
    setLeftModal(!leftModal)
  } else if(rightModal){
    setRightModal(!rightModal)
  }
 }

 //// SET CHARACTERS AFTER CHOOSE A CHARACTER MODAL
 // Set a Character => Left Side
 const setLeftCharacter = (position) => {
  setCharactersId({...charactersId, leftCharacter: position})
 } 

//  Set a Character => Right Side
 const setRightCharacter = (position) => {
  setCharactersId({...charactersId, rightCharacter: position})
 }

//// OPEN BATTLE MODAL
// set battle modal true

const handleBattleModal = () => {
  setBattle(!battle)
  
}


 useEffect(() => {
  
  dispatch(getStarWarsCharacters()); 
  setTimeout(() => {
    setLoading(false)
  }, 2500);
 }, [dispatch])


  return (
    <>
    {loading ?
    <div className={Style.loading} >
      <Loading />
    </div>
    :
    <>
    <div className={Style.main_container}>
        <div className={Style.left_container}>
            <div className={Style.character_container}>
              <div className={Style.buttons_container}>
                <button className={Style.randomButton} onClick={randomLeftChar}>Random Character</button>
                <button className={Style.randomButton} onClick={openLeftModal} >Choose a Character</button>
              </div>
              <div className={Style.slider_container}>
                <SliderCard
                  id={charactersId.leftCharacter}                  
                />
              </div>
              <h2 className={Style.playersName} >{players?.player1}</h2>
            </div>
        </div>
        <div className={Style.middleContainer}>
          <h1>Vs</h1>
        </div>
        
        <div className={Style.right_container}>
            <div className={Style.character_container}>
              <div className={Style.buttons_container}>
                  <button className={Style.randomButton} onClick={randomRightChar}>Random Character</button>
                  <button className={Style.randomButton} onClick={openRightModal} >Choose a Character</button>
              </div>
              <div className={Style.slider_container}>
                <SliderCard
                  id={charactersId.rightCharacter}
                />
              </div>
              <h2 className={Style.playersName} >{players?.player2}</h2>
            </div>
        </div>
    </div>
    <div className={Style.battleButtonContainer}>
      <BattleButton onClick={handleBattleModal} />
    </div>
    {(leftModal || rightModal) && <SearchModal 
      onClose={closeModal} 
      setLeftCharacter={setLeftCharacter}
      setRightCharacter={setRightCharacter}
      leftModal={leftModal}
      rightModal={rightModal}
      rightIdCharacter={charactersId.rightCharacter}
      leftIdCharacter={charactersId.leftCharacter}
      />}
      {battle && 
        <BattleModal 
        charArray={[charactersId.leftCharacter, charactersId.rightCharacter]}
        onClose={handleBattleModal}
        />
      }
    </>
    }
    </>
  )
}

export default BattleView;