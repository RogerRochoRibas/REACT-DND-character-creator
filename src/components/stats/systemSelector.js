import {useContext,useEffect} from 'react';
import { AppContext } from "../../appProvider";

const SystemSelector = () =>{
    const [state,setState] = useContext(AppContext);
  
    return( <form>
      <input type="radio" id="Standard Array" name="stats_system" value="Standard Array" onChange={ (e) => {setState({ ...state, statsSystem:e.target.value})}} />
      <label htmlFor="Standard Array">Standard Array</label>
      <input type="radio" id="Point Buy" name="stats_system" value="Point Buy" onChange={ (e) => {setState({ ...state, statsSystem:e.target.value})}} />
      <label htmlFor="Point Buy">Point Buy</label>
      <input type="radio" id="Roll for Stats" name="stats_system" value="Roll for Stats" onChange={ (e) => {setState({ ...state, statsSystem:e.target.value})}} />
      <label htmlFor="Roll for Stats">Roll for Stats</label>
      <input type="radio" id="Set Manually" name="stats_system" value="Set Manually" onChange={ (e) => {setState({ ...state, statsSystem:e.target.value})}} />
      <label htmlFor="Set Manually">Set Manually</label>
    </form>
    );
}

export default SystemSelector;