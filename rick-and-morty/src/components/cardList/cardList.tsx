import './cardList.css';
import { Card } from './card';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function CardList() {
  const searchValue = useSelector((state: RootState) => state.search.cards);
  return (
    <div className='cardList'>
      {searchValue.map((el) => {
        return (
          <Card
            key={el.id}
            data={el}
          ></Card>
        );
      })}
    </div>
  );
}
