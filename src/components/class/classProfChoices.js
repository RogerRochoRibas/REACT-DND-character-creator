import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassProfChoices = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <><p>Your class allows you to chose some proficiencies.</p>
      {state.profNumber > 0 && (
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
      {state.profNumber > 1 && (
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
      {state.profNumber > 2 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, classProf3: e.target.value });
            }}
          >
            {state.skillProf.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
      {state.profNumber > 3 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, classProf4: e.target.value });
            }}
          >
            {state.skillProf.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
    </>
  );
};
export default ClassProfChoices;
