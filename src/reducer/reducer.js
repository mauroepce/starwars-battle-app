import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  players: {
    player1: "",
    player2: ""
  }
}

export const star_wars_slice = createSlice({
  name: 'star-wars-reducer',
  initialState,
  reducers: {
    getCharacters: (state, actions) => {
        state.characters = actions.payload;
    },
    addPlayers: (state, actions) => {
      state.players = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
    getCharacters,
    addPlayers
} = star_wars_slice.actions

export default star_wars_slice.reducer