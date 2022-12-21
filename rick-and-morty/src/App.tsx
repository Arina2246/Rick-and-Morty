import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { SearchBar } from './components/searchBar/searchBar';
import { RootState, useAppDispatch } from './store';
import { CardList } from './components/cardList/cardList';
import { fetchData } from './store/searchSlice';
import { Error } from './components/utils/error';
import { Loading } from './components/utils/loading';
import { Pagination } from './components/pagination/pagination';

function App() {
  const [page, setPage] = useState(1);
  const { status, error } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData({ name: '', page: 1 }));
  }, []);

  return (
    <div className='App'>
      <SearchBar setPage={setPage} />
      {status === 'loading' && <Loading />}
      {error && <Error value={error} />}
      <CardList />
      <Pagination
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
