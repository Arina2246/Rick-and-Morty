import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { SearchBar } from './components/searchBar/searchBar';
import { RootState, useAppDispatch } from './store';
import { CardList } from './components/cardList/cardList';
import { fetchData } from './store/searchSlice';
import { Error } from './components/utils/error';
import { Loading } from './components/utils/loading';

function App() {
  const [text, setText] = useState('');
  const { status, error } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData({ name: '', page: 1 }));
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(fetchData({ name: text, page: 1 }));
    setText('');
  };

  return (
    <div className='App'>
      <SearchBar
        text={text}
        handleInput={setText}
        handleSubmit={handleSubmit}
      />
      {status === 'loading' && <Loading />}
      {error && <Error value={error} />}
      <CardList />
    </div>
  );
}

export default App;
