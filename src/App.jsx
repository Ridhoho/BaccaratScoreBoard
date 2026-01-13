import { useState } from 'react'
import './App.css'
import DisplayHistoryBigRoad from './DisplayHistoryBigRoad.jsx'
import GameResultButton from './GameResultButton.jsx'
import Options from './Options.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayHistoryBigRoad />
      <Options />
      <GameResultButton />
    </>
  )
}

export default App
