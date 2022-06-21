import { useContext } from 'react';
import { StatsAppContext } from './statsProvider'

const StatsShowstate = () => {
  const [state, setState] = useContext(StatsAppContext);
  return ( <p>{state.type}</p> );
}

export default StatsShowstate;