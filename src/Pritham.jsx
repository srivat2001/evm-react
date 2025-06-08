import React, { useState } from 'react';
import './evm.css';
import Insideevm1 from "./Insideevm";
import Vvpat from "./Vvpat";

const Car = () => {
  const [partySelected, setPartySelected] = useState("NULL");

  const updateVvpat = (party) => {
    setPartySelected(party);
  };

  return (
    <div className='MainBox'>
      <Vvpat partyvoted={partySelected} />
      <div className='outerbox'>
        <Insideevm1 updated={updateVvpat} />
      </div>
    </div>
  );
};

export default Car;
