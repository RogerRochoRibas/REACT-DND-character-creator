import { useContext } from "react";
import { StatsAppContext } from "./statsProvider";

const Select = (props) => {
  const [state, setState] = useContext(StatsAppContext);
  const options = ["--","15", "14", "13", "12", "10", "8"];
  if (state.STR ==="15" || state.DEX === "15" || state.CON === "15" || state.INT === "15" || state.WIS === "15" || state.CHA === "15") {
    options[1] = "--"
  }
  if (state.STR ==="14" || state.DEX === "14" || state.CON === "14" || state.INT === "14" || state.WIS === "14" || state.CHA === "14") {
    options[2] = "--"
  }
  if (state.STR ==="13" || state.DEX === "13" || state.CON === "13" || state.INT === "13" || state.WIS === "13" || state.CHA === "13") {
    options[3] = "--"
  }
  if (state.STR ==="12" || state.DEX === "12" || state.CON === "12" || state.INT === "12" || state.WIS === "12" || state.CHA === "12") {
    options[4] = "--"
  }
  if (state.STR ==="10" || state.DEX === "10" || state.CON === "10" || state.INT === "10" || state.WIS === "10" || state.CHA === "10") {
    options[5] = "--"
  }
  if (state.STR ==="8" || state.DEX === "8" || state.CON === "8" || state.INT === "8" || state.WIS === "8" || state.CHA === "8") {
    options[6] = "--"
  }
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
