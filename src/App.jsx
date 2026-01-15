import { useState } from 'react'
import './App.css'
import DisplayHistoryBigRoad from './DisplayHistoryBigRoad.jsx'
import GameResultButton from './GameResultButton.jsx'
import Options from './Options.jsx'

function App() {
  // FIXME: This state is unused - leftover from Vite template. Remove it!
  const [count, setCount] = useState(0)

  // TODO: Add state management for game history
  // const [gameHistory, setGameHistory] = useState([]);
  
  // TODO: Add handler functions to manage game state
  // const addResult = (result) => setGameHistory([...gameHistory, result]);
  // const undoLastResult = () => setGameHistory(gameHistory.slice(0, -1));
  // const resetGame = () => setGameHistory([]);

  return (
    <>
      {/* TODO: Pass gameHistory as prop to DisplayHistoryBigRoad */}
      {/* Example: <DisplayHistoryBigRoad history={gameHistory} /> */}
      <DisplayHistoryBigRoad />
      
      {/* TODO: Pass handler functions as props to Options */}
      {/* Example: <Options onReset={resetGame} /> */}
      <Options />
      
      {/* TODO: Pass handler functions as props to GameResultButton */}
      {/* Example: <GameResultButton onAddResult={addResult} onUndo={undoLastResult} /> */}
      <GameResultButton />
    </>
  )
}

export default App
