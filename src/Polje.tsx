import React from 'react';

interface PoljeProps {
  vrijednost: 'X' | 'O' | null;
  xCoo: number;
  yCoo: number;
  onClick(): void;
}

const Polje: React.FC<PoljeProps> = (props) => {
  return (
    <button className="polje" onClick={props.onClick}>
      <span className="poljeCoords">
        ({props.xCoo},{props.yCoo})
      </span>
      <span>{props.vrijednost}</span>
    </button>
  );
};

export default Polje;
