import { useState } from 'react'
import './App.css'
import DisplayHistoryBigRoad from './DisplayHistoryBigRoad.jsx'
import GameResultButton from './GameResultButton.jsx'
import Options from './Options.jsx'

function App() {
  // TODO: Add state management for game history
  // const [gameHistory, setGameHistory] = useState([]);
  
  // TODO: Add handler functions to manage game state
  // const addResult = (result) => setGameHistory([...gameHistory, result]);
  // const undoLastResult = () => setGameHistory(gameHistory.slice(0, -1));
  // const resetGame = () => setGameHistory([]);

  // Mentor tip: when you add `gameHistory`, keep it as the *single source of truth* in App,
  // and pass data down via props + send events up via callbacks:
  // - <DisplayHistoryBigRoad history={gameHistory} />
  // - <GameResultButton onAddResult={addResult} onUndo={undoLastResult} />
  // - <Options onReset={resetGame} />
  //
  // This makes the data flow predictable and easier to debug than having multiple components
  // each storing their own copy of history.

  return (
    // FIXED: Now using the CSS classes you created in App.css!
    // This connects your CSS styles to the actual JSX elements
    <div className="app-container">
      <div className="top-section">
        {/* TODO: Pass gameHistory as prop to DisplayHistoryBigRoad */}
        <DisplayHistoryBigRoad />
        
        {/* TODO: Pass handler functions as props to Options */}
        <Options />
      </div>
      
      <div className="bottom-section">
        {/* TODO: Pass handler functions as props to GameResultButton */}
        <GameResultButton />
      </div>
    </div>
  )
}

export default App
