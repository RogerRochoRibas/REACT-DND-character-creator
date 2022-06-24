import { useContext, useEffect } from "react";
import { StatsAppContext } from "./statsProvider";

const SetManually = () => {
  const [state, setState] = useContext(StatsAppContext);
  useEffect(() => {
    setState({
      ...state,
      manualSTR: 10,
      manualDEX: 10,
      manualCON: 10,
      manualINT: 10,
      manualWIS: 10,
      manualCHA: 10,
    });
  }, []);

  if (state.statsSystem === "Set Manually") {
    return (
      <>
        <h3>STR {state.manualSTR}</h3>
        <input
          type="number"
          onChange={(e) => {
            setState({ ...state, manualSTR: e.target.value });
          }}
        />
        <h3>DEX {state.manualDEX}</h3>
        <input
          type="number"
          onChange={(e) => {
            setState({ ...state, manualDEX: e.target.value });
          }}
        />
        <h3>CON {state.manualCON}</h3>
        <input
          type="number"
          onChange={(e) => {
            setState({ ...state, manualCON: e.target.value });
          }}
        />
        <h3>INT {state.manualINT}</h3>
        <input
          type="number"
          onChange={(e) => {
            setState({ ...state, manualINT: e.target.value });
          }}
        />
        <h3>WIS {state.manualWIS}</h3>
        <input
          type="number"
          onChange={(e) => {
            setState({ ...state, manualWIS: e.target.value });
          }}
        />
        <h3>CHA {state.manualCHA}</h3>
        <input
          type="number"
          onChange={(e) => {
            setState({ ...state, manualCHA: e.target.value });
          }}
        />
      </>
    );
  }
};
export default SetManually;
