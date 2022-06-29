import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassProfChoices = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <>
      {state.skillNumber > 0 && (
        <>
          <select
            className="choseProf"
            onChange={(e) => setState({ ...state, classProf1: e.target.value })}
          >
            {state.skillProf.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
      {state.skillNumber > 1 && (
        <>
          <select
            className="choseProf"
            onChange={(e) => setState({ ...state, classProf2: e.target.value })}
          >
            {state.skillProf.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
      {state.skillNumber > 2 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, classProf3: e.target.value });
            }}
          >
            {state.skillProf3.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
    </>
  );
};
export default ClassProfChoices;
