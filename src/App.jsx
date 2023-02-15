
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BattleView from './component/BattleView/BattleView'
import Footer from './component/Footer/Footer'
import Home from './component/Home'
import NavBar from './component/nav/NavBar'
import Skystar from './component/SkyStars/Skystar'

function App() {
  

  return (
    <>
    <Skystar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/battle" element={<BattleView />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
