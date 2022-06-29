import { Link } from "react-router-dom";

const ChangePage = (props) => {
  return (
    <div>
      <Link to="/">
        <button>Class</button>
      </Link>
      <Link to="/stats">
        <button>Stats</button>
      </Link>
      <Link to="/race">
        <button>Race</button>
      </Link>
      <Link to="/background">
        <button>Background</button>
      </Link>
      <Link to="/CharacterSheet">
        <button>Character Sheet</button>
      </Link>
    </div>
  );
};

export default ChangePage;
