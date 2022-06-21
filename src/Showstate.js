import { useContext } from 'react';
import { AppContext } from './Provider';

const Showstate = () => {
  const [state, setState] = useContext(AppContext);
  return ( <p>{state.name}</p> );
}

export default Showstate;