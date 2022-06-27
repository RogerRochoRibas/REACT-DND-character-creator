import { useContext } from "react";
import { RaceAppContext } from "./raceProvider";

const RaceShowcase = () => {
  const [state, setState] = useContext(RaceAppContext);
  var strText = "";
  var dexText = "";
  var conText = "";
  var intText = "";
  var wisText = "";
  var chaText = "";
  var freeStatText = "";

  if (state.str > 0) {
    strText = "Str +" + [state.str];
  }
  if (state.dex > 0) {
    dexText = "Dex +" + [state.dex];
  }
  if (state.con > 0) {
    conText = "Con +" + [state.con];
  }
  if (state.int > 0) {
    intText = "Int +" + [state.int];
  }
  if (state.wis > 0) {
    wisText = "Wis +" + [state.wis];
  }
  if (state.cha > 0) {
    chaText = "Cha +" + [state.cha];
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
  if (state.str === 0) {
    strText = "";
  }
  if (state.dex === 0) {
    dexText = "";
  }
  if (state.con === 0) {
    conText = "";
  }
  if (state.int === 0) {
    intText = "";
  }
  if (state.wis === 0) {
    wisText = "";
  }
  if (state.cha === 0) {
    chaText = "";
  }
  if (state.freeStat === 0) {
    freeStatText = "";
  }
  return (
    <div className="classFeatures">
      <h2>{state.race}</h2>
      <p>
        <span>Ability Scores:</span>
        <span>
          {strText} {dexText} {conText} {intText} {wisText}
          {chaText} {freeStatText}
        </span>
      </p>
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
    </div>
  );
};
export default RaceShowcase;
