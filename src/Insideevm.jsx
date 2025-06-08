import  { useState } from 'react';
import './evm.css';
import Votevalue from './Partyholder';

const Insideevm1 = ({ updated }) => {
  const [disabled, setDisabled] = useState(false);

  const partylist = [
    { name: 'BJP', votes: 0, link: require('./img/Bjp.png') },
    { name: 'Congress', votes: 0, link: require('./img/INC_Logo.png') }
  ];

  const cooldownfc = (obj1) => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 2000); // 2-second cooldown
    updated(obj1);
  };

  return (
    <div className='voterboxinside'>
      {partylist.map((party) => (
        <Votevalue
          key={party.name}
          votebtn={disabled}
          cooldownfc={cooldownfc}
          imglink={party.link}
          partyname={party.name}
          vote={party.votes}
          selected={true}
        />
      ))}
    </div>
  );
};

export default Insideevm1;
