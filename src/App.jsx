import { useState } from 'react'
import './App.css'
import DisplayHistoryBigRoad from './DisplayHistoryBigRoad.jsx'
import GameResultButton from './GameResultButton.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayHistoryBigRoad />
      <GameResultButton />
    </>
  )
}

export default App
