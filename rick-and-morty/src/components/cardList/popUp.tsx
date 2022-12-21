type Props = {
  img: string;
  name: string;
  species: string;
  location: string;
  gender: string;
  status: string;
  onCloseClick: () => void;
};

export function PopUp({
  img,
  name,
  species,
  location,
  gender,
  status,
  onCloseClick,
}: Props) {
  return (
    <>
      <div
        className='cardPopUpBlur'
        onClick={onCloseClick}
      ></div>
      <div className='cardPopUp'>
        <img
          src={img}
          alt='img'
        />
        <div>{name}</div>
        <div>Species: {species}</div>
        <div>Location: {location}</div>
        <div>Gender: {gender}</div>
        <div>Status: {status}</div>
        <div
          className='cardPopUpClose'
          onClick={onCloseClick}
        >
          x
        </div>
      </div>
    </>
  );
}
