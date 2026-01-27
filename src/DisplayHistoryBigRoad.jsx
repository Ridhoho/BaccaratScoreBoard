import "./DisplayHistoryBigRoad.css";

// TODO: Add PropTypes - this component should receive a 'history' prop (array of game results)
// import PropTypes from 'prop-types';

function DisplayHistoryBigRoad() {
  // TODO: This component should receive and display actual game history
  // For now it just shows an empty grid
  
  const squaretiles = Array.from({ length: 100 }, (_, i) => (
    <div key={i} className="squaretiles"></div>
  ));

  return (
      <div className="tile">
        {squaretiles}
        {/* TODO: Map over history prop and display actual results */}
        {/* Each result should show: winner (player/banker/tie), pairs, etc. */}
      </div>
  );
}

// TODO: Add PropTypes validation
// DisplayHistoryBigRoad.propTypes = {
//   history: PropTypes.arrayOf(PropTypes.shape({
//     winner: PropTypes.oneOf(['player', 'banker', 'tie']).isRequired,
//     playerPair: PropTypes.bool.isRequired,
//     bankerPair: PropTypes.bool.isRequired,
//   }))
// };

export default DisplayHistoryBigRoad;
