import { useContext, useEffect } from "react";
import { AppContext } from "../../appProvider";

const SetManually = () => {
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    setState({
      ...state,
      manualSTR: "",
      manualDEX: "",
      manualCON: "",
      manualINT: "",
      manualWIS: "",
      manualCHA: "",
      statsSystem: "Standard Array"
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
              setState({ ...state, manualSTR: Number(e.target.value) });
            }}
          />
        </h3>

        <h3>
          DEX{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualDEX: Number(e.target.value) });
            }}
          />
        </h3>

        <h3>
          CON{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualCON: Number(e.target.value) });
            }}
          />
        </h3>

        <h3>INT <input
          type="number"
          className="manualInput"
          onChange={(e) => {
            setState({ ...state, manualINT: Number(e.target.value) });
          }}
        /></h3>
        
        <h3>
          WIS{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualWIS: Number(e.target.value) });
            }}
          />
        </h3>

        <h3>
          CHA{" "}
          <input
            type="number"
            className="manualInput"
            onChange={(e) => {
              setState({ ...state, manualCHA: Number(e.target.value) });
            }}
          />
        </h3>
      </>
    );
  }
};
export default SetManually;
