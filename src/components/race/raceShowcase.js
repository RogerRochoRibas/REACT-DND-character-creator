import { useContext } from "react";
import { AppContext } from "../../appProvider";
import RacePointSelector from "./resources/statPointSelector";

const RaceShowcase = () => {
  const [state, setState] = useContext(AppContext);
  var strText = "";
  var dexText = "";
  var conText = "";
  var intText = "";
  var wisText = "";
  var chaText = "";
  var freeStatText = "";

  if (state.raceSTR > 0) {
    strText = "Str +" + [state.raceSTR] + ".";
  }
  if (state.raceDEX > 0) {
    dexText = "Dex +" + [state.raceDEX] + ".";
  }
  if (state.raceCON > 0) {
    conText = "Con +" + [state.raceCON] + ".";
  }
  if (state.raceINT > 0) {
    intText = "Int +" + [state.raceINT] + ".";
  }
  if (state.raceWIS > 0) {
    wisText = "Wis +" + [state.raceWIS] + ".";
  }
  if (state.raceCHA > 0) {
    chaText = "Cha +" + [state.raceCHA] + ".";
  }
  if (state.freeStat === 1) {
    freeStatText = "Choose any other +1";
  }
  if (state.freeStat === 2) {
    freeStatText = "Choose any other two +1";
  }
  if (state.freeStat === 3) {
    freeStatText =
      "Choose any +2 and choose any other +1 OR Choose any three different +1";
  }
  if (state.raceSTR === 0) {
    strText = "";
  }
  if (state.raceDEX === 0) {
    dexText = "";
  }
  if (state.raceCON === 0) {
    conText = "";
  }
  if (state.raceINT === 0) {
    intText = "";
  }
  if (state.raceWIS === 0) {
    wisText = "";
  }
  if (state.raceCHA === 0) {
    chaText = "";
  }
  if (state.freeStat === 0) {
    freeStatText = "";
  }
  if (state.freeStat === 1) freeStatText = "Choose any other +1.";

  if (state.freeStat === 2) freeStatText = "Choose any other two unique +1.";
  if (state.freeStat === 3)
    freeStatText =
      "You can add 3 points to your stats (with no more than 2 on the same ability score).";
  return (
    <div className="classFeatures">
      <h2>{state.race}</h2>
      <p>
        <span>Ability Scores:</span>
        <span>
          {strText} {dexText} {conText} {intText} {wisText}
          {chaText} {freeStatText}
        </span>
        <RacePointSelector />
      </p>
      <ProficiencyOptions />
      <p>
        <span>Size:</span> <span>{state.volume}</span>
      </p>
      <p>
        <span>{state.feature1}</span>
        <span>{state.feature1text}</span>
      </p>
      <p>
        <span>{state.feature2}</span>
        <span>{state.feature2text}</span>
      </p>
      <p>
        <span>{state.feature3}</span>
        <span>{state.feature3text}</span>
      </p>
      <p>
        <span>{state.feature4}</span>
        <span>{state.feature4text}</span>
      </p>
      <p>
        <span>{state.feature5}</span>
        <span>{state.feature5text}</span>
      </p>
      <p>
        <span>{state.feature6}</span>
        <span>{state.feature6text}</span>
      </p>
      <p>
        <span>{state.feature7}</span>
        <span>{state.feature7text}</span>
      </p>
      <p>
        <span>{state.feature8}</span>
        <span>{state.feature8text}</span>
      </p>
      <p>
        <span>{state.feature9}</span>
        <span>{state.feature9text}</span>
      </p>
      <p>
        <span>{state.feature10}</span>
        <span>{state.feature10text}</span>
      </p>
      <p>
        <span>{state.feature11}</span>
        <span>{state.feature11text}</span>
      </p>
    </div>
  );
};

const ProficiencyOptions = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <>
      {state.raceProfChoice1 && (
        <>
          <h4>Your race allows you to chose Proficiencies:</h4>
          <select
            onChange={(e) => {
              setState({ ...state, classProf1: e.target.value });
            }}
          >
            {state.raceProfOptions1.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
      {state.raceProfChoice2 && (
        <>
          <select
            onChange={(e) => {
              setState({ ...state, classProf2: e.target.value });
            }}
          >
            {state.raceProfOptions2.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </>
      )}
    </>
  );
};
export default RaceShowcase;
