import './pagination.css';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/index';
import { fetchData } from '../../store/searchSlice';

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export function Pagination({ page, setPage }: Props) {
  const [prevButtonDisabled, setPrevButtonDisabled] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const { pageData, text } = useSelector((state: RootState) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (page === 1) {
      setPrevButtonDisabled(true);
    } else {
      setPrevButtonDisabled(false);
    }
    if (
      page === pageData.pages ||
      pageData.pages === 1 ||
      pageData.pages === null
    ) {
      setNextButtonDisabled(true);
    } else {
      setNextButtonDisabled(false);
    }
  }, [page, pageData.pages]);

  const switchPrevPage = () => {
    dispatch(fetchData({ name: text, page: page - 1 }));
    setPage((page) => page - 1);
  };

  const switchNextPage = () => {
    dispatch(fetchData({ name: text, page: page + 1 }));
    setPage((page) => page + 1);
  };

  return (
    <div className='pagination'>
      <button
        disabled={prevButtonDisabled}
        onClick={switchPrevPage}
      >
        {'<<'}
      </button>
      <button>{page.toString()}</button>
      <button
        disabled={nextButtonDisabled}
        onClick={switchNextPage}
      >
        {'>>'}
      </button>
    </div>
  );
}
