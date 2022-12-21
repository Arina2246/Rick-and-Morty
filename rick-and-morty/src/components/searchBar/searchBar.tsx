import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addText, fetchData } from '../../store/searchSlice';
import './searchBar.css';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export function SearchBar(props: Props) {
  const { text } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.setPage(1);
    dispatch(fetchData({ name: text, page: 1 }));
  };

  return (
    <div className='searchBar'>
      RICK AND MORTY
      <form>
        <input
          type='search'
          value={text}
          onChange={(e) => dispatch(addText(e.target.value))}
        />
        <button onClick={(e) => handleSubmit(e)}>Search</button>
      </form>
    </div>
  );
}
