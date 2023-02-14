import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CharactersList from '../CharactersList/CharactersList';
import style from "./SearchModal.module.css";
import WarningModal from './WarningModal';

function LeftSearchModal({ 
  onClose,
  setLeftCharacter,
  setRightCharacter,
  leftModal,
  rightModal,
  rightIdCharacter,
  leftIdCharacter,
}) {

    const { characters } = useSelector( state => state.global_state)
    
    const [searchInput, setSearchInput] = useState("")
    const [filteredResults, setFilteresResults] = useState([])
    const [temporaryChosenCharacter, setTemporaryChosenCharacter] = useState(null)
    const [toggle, setToggle] = useState(false);

    //// WARNING MODAL TOGGLE FUNCTION
    const handleToggle= () => setToggle(!toggle);

    //// TEMPORARY CHARACTER SELECTED FUNCTION
    const temporaryCharacter = (id) => {
      setTemporaryChosenCharacter(id) 
    }

    //// CHARACTER SEARCH FUNCTION
    const searchCharacter = (character) => {
        setSearchInput(character)
        if(searchInput !== ""){
            const filteredCharacters = characters.filter( item => {
                return Object.values(item).join("").toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteresResults(filteredCharacters)
        } else {
            setFilteresResults(characters)
        }
    }

    //// BUTTON FUNCTION CHOOSE A CHARACTER
    const clickChooseButton = () => {
      if(leftModal){
        if(rightIdCharacter === temporaryChosenCharacter){
          handleToggle()
        } else {
          setLeftCharacter(temporaryChosenCharacter)
          onClose()
        }
      }

      if(rightModal){
        if(leftIdCharacter === temporaryChosenCharacter){
          handleToggle()
        } else {
          setRightCharacter(temporaryChosenCharacter)
          onClose()
        }
      }
    }


  return (
    <div className={style.modal}>
        <div className={style.overlay}>
          <div className={style.modalContent}>
            <div className={style.closeModal}>
                      <button onClick={onClose}><i className="fa-solid fa-xmark fa-lg"></i></button>
            </div>
            <div className={style.headerModal}>
              <input 
              type="text" 
              placeholder='Search for a character' 
              className={style.input_character} 
              onChange={(e) => searchCharacter(e.target.value)}
              />      
            </div>
            <div className={style.searchContent}>
                <CharactersList 
                characterList={searchInput.length > 0 ? filteredResults : characters}
                temporaryCharacter={temporaryCharacter}
                temporaryChosenCharacter={temporaryChosenCharacter}
                />
            </div>
            {temporaryChosenCharacter !== null && 
              <div className={style.chosenCharacter}>
                <span>
                  <strong>Character:</strong> {characters.filter( char => char.id === temporaryChosenCharacter)[0].name}
                </span>
              </div>
            
            }
            <div className={style.actionsButtons} >
                    <button disabled={temporaryChosenCharacter === null ? true : false} className={temporaryChosenCharacter === null ? style.acceptButtonDisabled : style.acceptButton} onClick={clickChooseButton}  >Choose</button>
                </div>
          </div>
        </div>
        {toggle && 
        <WarningModal 
          toggle={handleToggle}
        />}
    </div>
  )
}

export default LeftSearchModal;