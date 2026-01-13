import "./DisplayHistoryBigRoad.css";

function DisplayHistoryBigRoad() {
  const squaretiles = [];
  for(let i = 0; i < 100; i++){
    squaretiles.push(<div className="squaretiles"></div>)
  }

  return (
      <div className="tile">
        {squaretiles}
      </div>
  );
}

export default DisplayHistoryBigRoad;
