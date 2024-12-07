import React, { useContext } from 'react'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import {PlayerContext} from './context/PlayerContext'


const App = () => {
// useContext
  const {audioRef,track} =useContext(PlayerContext); 

  return (
    

    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
      <Sidebar/>
      <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
      <h1>2.05 not working</h1>
    </div>
  )
}

export default App
