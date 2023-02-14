import axios from "axios";

import {
    getCharacters,
    addPlayers
} from "../reducer/reducer.js"

let apiURL = "https://akabab.github.io/starwars-api/api/all.json" 

export const getStarWarsCharacters = () => {
    return async function (dispatch) {
        try {
            let { data } = await axios.get(apiURL)
          
            dispatch(getCharacters(data))
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const addBattlePlayers = (players) => {
    return async function (dispatch) {
        try{
            dispatch(addPlayers(players))
        }catch (error) {
            console.log(error.message)
        }
    }
}