import { useContext } from "react";
import { StatsAppContext } from "./statsProvider";

const Select = (props) => {
  const [state, setState] = useContext(StatsAppContext);
  const options = ["--","15", "14", "13", "12", "10", "8"];
  if (state.standardSTR ==="15" || state.standardDEX === "15" || state.standardCON === "15" || state.standardINT === "15" || state.standardWIS === "15" || state.standardCHA === "15") {
    options[1] = "--"
  }
  if (state.standardSTR ==="14" || state.standardDEX === "14" || state.standardCON === "14" || state.standardINT === "14" || state.standardWIS === "14" || state.standardCHA === "14") {
    options[2] = "--"
  }
  if (state.standardSTR ==="13" || state.standardDEX === "13" || state.standardCON === "13" || state.standardINT === "13" || state.standardWIS === "13" || state.standardCHA === "13") {
    options[3] = "--"
  }
  if (state.standardSTR ==="12" || state.standardDEX === "12" || state.standardCON === "12" || state.standardINT === "12" || state.standardWIS === "12" || state.standardCHA === "12") {
    options[4] = "--"
  }
  if (state.standardSTR ==="10" || state.standardDEX === "10" || state.standardCON === "10" || state.standardINT === "10" || state.standardWIS === "10" || state.standardCHA === "10") {
    options[5] = "--"
  }
  if (state.standardSTR ==="8" || state.standardDEX === "8" || state.standardCON === "8" || state.standardINT === "8" || state.standardWIS === "8" || state.standardCHA === "8") {
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
      <h2>{state.statsSystem}</h2>
      <h3>STR {state.standardSTR}</h3>
      <Select value="standardSTR" />
      <h3>DEX {state.standardDEX}</h3>
      <Select value="standardDEX" />
      <h3>CON {state.standardCON}</h3>
      <Select value="standardCON" />
      <h3>INT {state.standardINT}</h3>
      <Select value="standardINT" />
      <h3>WIS {state.standardWIS}</h3>
      <Select value="standardWIS" />
      <h3>CHA {state.standardCHA}</h3>
      <Select value="standardCHA" />
    </>
  );
};

export default StandardArray;
