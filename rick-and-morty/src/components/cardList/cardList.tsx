import './cardList.css';
// import { Card } from './card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function CardList() {
  const searchValue = useSelector((state: RootState) => state.search.cards);
  console.log(searchValue);
  return (
    <>
      {searchValue.map((el) => {
        return <div>{el.name}</div>;
      })}
    </>
  );
}
