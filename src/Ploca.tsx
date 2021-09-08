import React from 'react';
import Polje from './Polje';

interface PlocaProps {
  vrijednosti: ('X' | 'O' | null)[];
  onClick(i: number): void;
}

const Ploca: React.FC<PlocaProps> = (props) => {
  const renderPolja = (i: number, x: number, y: number) => {
    return (
      <Polje
        xCoo={x}
        yCoo={y}
        vrijednost={props.vrijednosti[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  return (
    <div className="ploca">
      <div className="ploca-row">
        {renderPolja(0, 0, 0)}
        {renderPolja(1, 0, 1)}
        {renderPolja(2, 0, 2)}
      </div>
      <div className="ploca-row">
        {renderPolja(3, 1, 0)}
        {renderPolja(4, 1, 1)}
        {renderPolja(5, 1, 2)}
      </div>
      <div className="ploca-row">
        {renderPolja(6, 2, 0)}
        {renderPolja(7, 2, 1)}
        {renderPolja(8, 2, 2)}
      </div>
    </div>
  );
};

export default Ploca;
