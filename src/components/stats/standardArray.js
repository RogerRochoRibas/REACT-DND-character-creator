import { useContext } from "react";
import { StatsAppContext } from "./statsProvider";

const Select = (props) => {
  const [state, setState] = useContext(StatsAppContext);
  const options = ["15", "14", "13", "12", "10", "8"];
  return (
    <select onChange={ (e) => {setState({ ...state, [props.value]:e.target.value})}}>
      {options.map((x, y) => (
        <option key={y}>{x}</option>
      ))}
    </select>
  );
};

const StandardArray = () => {
  const [state, setState] = useContext(StatsAppContext);

  return (
    <>
      <h2>{state.type}</h2>
      <h3>STR {state.STR}</h3>
      <Select value="STR" />
      <h3>DEX {state.DEX}</h3>
      <Select value="DEX" />
      <h3>CON {state.CON}</h3>
      <Select value="CON" />
      <h3>INT {state.INT}</h3>
      <Select value="INT" />
      <h3>WIS {state.WIS}</h3>
      <Select value="WIS" />
      <h3>CHA {state.CHA}</h3>
      <Select value="CHA" />
    </>
  );
};

export default StandardArray;
