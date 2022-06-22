import { useContext } from 'react';
import { StatsAppContext } from './statsProvider'
import StandardArray from './standardArray';

const StatsShowstate = () => {
  const [state, setState] = useContext(StatsAppContext);
  if (state.type === "Standard Array") {
    return ( <StandardArray/> );
  }
  else if (state.type === "Point Buy") {
    return ( <h2>{state.type}</h2> );
  }
  else if (state.type === "Roll for Stats") {
    return ( <h2>{state.type}</h2> );
  }
  else if (state.type === "Set Manually") {
    return ( <h2>{state.type}</h2> );
  }
}

export default StatsShowstate;