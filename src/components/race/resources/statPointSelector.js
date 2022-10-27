import { useContext } from "react";
import { AppContext } from "../../../appProvider";

const RacePointSelector = () => {
  const [state, setState] = useContext(AppContext);
  let stats1 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
  let stats2 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
  let stats3 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];

  function setStat() {}

  
  // 2 free points
  if (state.freeStat === 2) {
    //Can't pick same stat twice
    if (state.racePoint1 !== "") {
      let chosenValue = state.racePoint1;
      let valueIndex = stats2.indexOf(chosenValue);
      stats2[valueIndex] = "";
    }
    if (state.racePoint1 === "") {
      stats2 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
    }
    if (state.racePoint2 !== "") {
        let chosenValue = state.racePoint2;
        let valueIndex = stats1.indexOf(chosenValue);
        stats1[valueIndex] = "";
      }
      if (state.racePoint2 === "") {
        stats1 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
      }
  }
  // 1-2 free points
  if (state.freeStat === 1 || state.freeStat === 2) {
    //Can't pick more of the default stat
    var valueIndex;
    if (state.raceSTR > 0) {
      valueIndex = stats1.indexOf("STR");
    }
    if (state.raceDEX > 0) {
      valueIndex = stats1.indexOf("DEX");
    }
    if (state.raceCON > 0) {
      valueIndex = stats1.indexOf("CON");
    }
    if (state.raceINT > 0) {
      valueIndex = stats1.indexOf("INT");
    }
    if (state.raceWIS > 0) {
      valueIndex = stats1.indexOf("WIS");
    }
    if (state.raceCHA > 0) {
      valueIndex = stats1.indexOf("CHA");
    }
    stats1[valueIndex] = "";
    stats2[valueIndex] = "";
  }
  // 3 free points
  if (state.freeStat === 3) {
    //Can't pick 3 of the same stat 1
    if (state.racePoint2 === state.racePoint3) {
      if (state.racePoint2 !== "") {
        let valueIndex = stats1.indexOf(state.racePoint2);
        stats1[valueIndex] = "";
      }
    }
    if (state.racePoint2 !== state.racePoint3) {
      stats1 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
    }
    //Can't pick 3 of the same stat 2
    if (state.racePoint1 === state.racePoint3) {
      if (state.racePoint1 !== "") {
        let valueIndex = stats2.indexOf(state.racePoint1);
        stats2[valueIndex] = "";
      }
    }
    if (state.racePoint1 !== state.racePoint3) {
      stats2 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
    }
    //Can't pick 3 of the same stat 3
    if (state.racePoint1 === state.racePoint2) {
      if (state.racePoint1 !== "") {
        let valueIndex = stats3.indexOf(state.racePoint1);
        stats3[valueIndex] = "";
      }
    }
    if (state.racePoint1 !== state.racePoint2) {
      stats3 = ["", "STR", "DEX", "CON", "INT", "WIS", "CHA"];
    }
  }
  return (
    <div className="statSelector">
      {state.freeStat > 0 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, racePoint1: e.target.value });
            }}
          >
            {stats1.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
      {state.freeStat > 1 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, racePoint2: e.target.value });
            }}
          >
            {stats2.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
      {state.freeStat > 2 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, racePoint3: e.target.value });
            }}
          >
            {stats3.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
export default RacePointSelector;
