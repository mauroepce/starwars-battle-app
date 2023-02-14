import React from 'react';

// import css module
import Style from "./SliderCard.module.css";

// import required modules
import { useSelector } from 'react-redux';
import CardCharacter from '../CardCharacter/CardCharacter';

function SliderCard({id}) {

    const { characters } = useSelector( state => state.global_state)
 
    const filterCharacterById = characters.filter( char => char.id === id)
   
  return (
    <>
 
        <CardCharacter 
          
            image={filterCharacterById[0]?.image}
            name={filterCharacterById[0]?.name }
            id={filterCharacterById[0]?.id }
            height={filterCharacterById[0]?.height}
            homeworld={filterCharacterById[0]?.homeworld }
            species={filterCharacterById[0]?.species }
            masters={filterCharacterById[0]?.masters }
        />
        
    </>
  )
}

export default SliderCard;