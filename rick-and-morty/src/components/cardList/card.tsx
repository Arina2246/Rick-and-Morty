import { useState } from 'react';
import { cardDataType } from '../../types/types';
import { PopUp } from './popUp';

type Props = {
  data: cardDataType;
};

export function Card({ data }: Props) {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    setShowPopUp(true);
  };
  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <div
        className='card'
        onClick={handleClick}
      >
        <img
          src={data.image}
          alt='img'
        />
        <div>{data.name}</div>
      </div>
      {showPopUp ? (
        <PopUp
          img={data.image}
          name={data.name}
          species={data.species}
          location={data.name}
          gender={data.gender}
          status={data.status}
          onCloseClick={handleClosePopUp}
        />
      ) : null}
    </>
  );
}
