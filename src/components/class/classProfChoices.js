import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassProfChoices = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <div className="classProficiencies">
      <h4>Proficiencies</h4>
      <p>Your class allows you to chose some proficiencies.</p>
      <p>
        Proficiencies are things you excel at, giving you a bonus on your rolls
        when using that particular skill.
      </p>
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
    </div>
  );
};
export default ClassProfChoices;
