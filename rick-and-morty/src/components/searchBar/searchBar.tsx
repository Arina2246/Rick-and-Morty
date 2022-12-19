import './searchBar.css';

export function SearchBar() {
  return (
    <div className='searchBar'>
      RICK AND MORTY
      <form>
        <input type='search' />
        <button>Search</button>
      </form>
    </div>
  );
}
