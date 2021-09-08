import React, { useState, useEffect } from 'react';
import Ploca from './Ploca';
import Potezi from './Potezi';

interface Potez {
  igrac: 'X' | 'O';
  pozicija: string;
}

const Igra = () => {
  const [polja, setPolja] = useState<('X' | 'O' | null)[]>(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState<boolean>(true);
  const [mojiPotezi, setMojiPotezi] = useState<Potez[]>([]);

  const pobjednik = calculateWinner(polja);

  useEffect(() => {
    if (pobjednik) document.title = `Pobjednik je igrač ${isNextX ? 'O' : 'X'}`;
    else if (isPunaPloca(polja)) document.title = 'Nerješeno!';
    else document.title = `Na potezu igrač ${isNextX ? 'X' : 'O'}`;
  }, [polja]);

  const handleClick = (i: number) => {
    if (polja[i] != null) return;
    if (pobjednik != null) return;

    const poljaNew = polja.slice();
    poljaNew[i] = isNextX ? 'X' : 'O';

    const potezNew: Potez = {
      igrac: isNextX ? 'X' : 'O',
      pozicija: getPozicija(i),
    };
    mojiPotezi.push(potezNew);

    setPolja(poljaNew);
    setIsNextX(!isNextX);
    setMojiPotezi(mojiPotezi);
  };

  const handleNova = () => {
    setPolja(Array(9).fill(null));
    setIsNextX(true);
    setMojiPotezi([]);
  };

  return (
    <div className="igra">
      <div>
        <Ploca vrijednosti={polja} onClick={(i) => handleClick(i)} />
      </div>
      <div>
        <Potezi potezi={mojiPotezi} />
      </div>
      <div>
        <button className="button-new" onClick={() => handleNova()}>
          Nova igra
        </button>
      </div>
    </div>
  );
};

export default Igra;

function calculateWinner(squares: ('X' | 'O' | null)[]) {
  const possibleLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (let i = 0; i < possibleLines.length; i++) {
    const [a, b, c] = possibleLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const isPunaPloca = (squares: ('X' | 'O' | null)[]) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) return false;
  }
  return true;
};

const getPozicija = (i: number) => {
  const mapaRedova = [
    '0, 0',
    '0, 1',
    '0, 2',
    '1, 0',
    '1, 1',
    '1, 2',
    '2, 0',
    '2, 1',
    '2, 2',
  ];
  return mapaRedova[i];
};
