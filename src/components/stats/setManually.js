import { useContext, useEffect } from "react";
import { StatsAppContext } from "./statsProvider";

const SetManually = () => {
  const [state, setState] = useContext(StatsAppContext);
  useEffect(() => {
    setState({
      ...state,
      manualSTR: "",
      manualDEX: "",
      manualCON: "",
      manualINT: "",
      manualWIS: "",
      manualCHA: "",
    });
  }, []);

  if (state.statsSystem === "Set Manually") {
    return (
      <>
        <h3>
          STR{"  "}
          <input
            className="manualInput"
            type="number"
            onChange={(e) => {
              setState({ ...state, manualSTR: e.target.value });
            }}
          />
        </h3>

        <h3>
          DEX{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualDEX: e.target.value });
            }}
          />
        </h3>

        <h3>
          CON{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualCON: e.target.value });
            }}
          />
        </h3>

        <h3>INT <input
          type="number"
          className="manualInput"
          onChange={(e) => {
            setState({ ...state, manualINT: e.target.value });
          }}
        /></h3>
        
        <h3>
          WIS{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualWIS: e.target.value });
            }}
          />
        </h3>

        <h3>
          CHA{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualCHA: e.target.value });
            }}
          />
        </h3>
      </>
    );
  }
};
export default SetManually;
