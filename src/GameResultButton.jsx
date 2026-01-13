import "./GameResultButton.css";

function GameResultButton() {
  return (
      <section className="ButtonSection">
        <div className="ButtonGroup">
          <button className="PlayerPair">P.Pair</button>
          <button className="PlayerButton">PLAYER</button>
        </div>
        <div className="ButtonGroup">
          <button className="BankerPair">B.Pair</button>
          <button className="BankerButton">BANKER</button>
        </div>
        <button className="TieButton">TIE</button>
        <button className="UndoButton">UNDO</button>
      </section>
  );
}

export default GameResultButton;
