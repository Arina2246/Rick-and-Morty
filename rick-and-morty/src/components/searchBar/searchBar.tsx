import './searchBar.css';

type Props = {
  text: string;
  handleInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function SearchBar(props: Props) {
  return (
    <div className='searchBar'>
      RICK AND MORTY
      <form>
        <input
          type='search'
          value={props.text}
          onChange={(e) => props.handleInput(e.target.value)}
        />
        <button onClick={(e) => props.handleSubmit(e)}>Search</button>
      </form>
    </div>
  );
}
