import React, { useState } from "react";
import './evm.css';

const Votevalue = ({ vote: initialVote, votebtn, cooldownfc, imglink, partyname }) => {
  const [vote, setVote] = useState(initialVote);
  const [highlight, setHighlight] = useState(false);

  const handleIncrement = (e) => {
    setVote(vote + 1);
    setHighlight(true);

    setTimeout(() => setHighlight(false), 5000);
    cooldownfc(imglink);
  };

  return (
    <div className="partyholder">
      <div className="partyholderflexcontainer">
        <div className="partyimage">
          <img src={imglink} alt={partyname} />
        </div>
        <div className="partyholderdetails">
          <div className="partyname">{partyname}</div>
          <button
            disabled={votebtn}
            onClick={handleIncrement}
            style={{ backgroundColor: highlight ? "#003982" : "white" }}
          >
            {vote === 0 ? "Zero" : vote}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Votevalue;
