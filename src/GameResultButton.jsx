import "./GameResultButton.css";
// TODO: Import useState to manage pair selection state
// import { useState } from 'react';

// TODO: Add PropTypes for props validation
// import PropTypes from 'prop-types';

function GameResultButton() {
  // TODO: Add state for tracking pair selections
  // const [playerPair, setPlayerPair] = useState(false);
  // const [bankerPair, setBankerPair] = useState(false);

  // TODO: Add handler function for recording game results
  // const handleResult = (winner) => {
  //   const result = {
  //     winner: winner, // 'player', 'banker', or 'tie'
  //     playerPair: playerPair,
  //     bankerPair: bankerPair,
  //     timestamp: Date.now()
  //   };
  //   onAddResult(result); // Call parent's function to update game history
  //   setPlayerPair(false); // Reset after recording
  //   setBankerPair(false);
  // };

  return (
      <section className="ButtonSection">
        <div className="ButtonGroup">
          {/* TODO: Add onClick handler to toggle pair selection */}
          {/* Example: onClick={() => setPlayerPair(!playerPair)} */}
          {/* TODO: Add conditional class for active state: className={`PlayerPair ${playerPair ? 'active' : ''}`} */}
          <button className="PlayerPair">P.Pair</button>
          
          {/* FIXME: No onClick handler! Button does nothing when clicked. */}
          {/* Add: onClick={() => handleResult('player')} */}
          <button className="PlayerButton">PLAYER</button>
        </div>
        <div className="ButtonGroup">
          {/* TODO: Same as PlayerPair - needs onClick handler and active state */}
          <button className="BankerPair">B.Pair</button>
          
          {/* FIXME: No onClick handler! Add: onClick={() => handleResult('banker')} */}
          <button className="BankerButton">BANKER</button>
        </div>
        
        {/* FIXME: No onClick handler! Add: onClick={() => handleResult('tie')} */}
        <button className="TieButton">TIE</button>
        
        {/* FIXME: No onClick handler! Should call parent's undo function */}
        {/* Add: onClick={onUndo} (where onUndo is passed as prop from App) */}
        <button className="UndoButton">UNDO</button>
      </section>
  );
}

// TODO: Add PropTypes validation
// GameResultButton.propTypes = {
//   onAddResult: PropTypes.func.isRequired,
//   onUndo: PropTypes.func.isRequired,
// };

export default GameResultButton;
