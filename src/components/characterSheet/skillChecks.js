import { useContext } from "react";
import { AppContext } from "../../appProvider";

const SkillChecks = () => {
  const [state, setState] = useContext(AppContext);
  let proficiencyList = [
    "Acrobatics",
    "Animal Handling",
    "Arcana",
    "Athletics",
    "Deception",
    "History",
    "Insight",
    "Intimidation",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Performance",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stalth",
    "Survival",
  ];
  let profValues = state.profValues;
  let SkillCheck = proficiencyList.map((e, i) => {
    let prof = profValues[e];
    let modifier = 0;
    let modifierName = "";
    let checked = false;
    let finalSkill = 0;
    if (prof === 2) {
      checked = true;
    }
    if (e === "Athletics") {
      modifierName = "Str";
      modifier = Number(state.STRmodifier);
      finalSkill = modifier + prof;
      if (finalSkill > 0) {finalSkill = "+"+finalSkill}
    }
    if (e === "Acrobatics" || e === "Sleight of Hand" || e === "Stealth") {
      modifierName = "Dex";
      modifier = Number(state.DEXmodifier);
      finalSkill = modifier + prof;
      if (finalSkill > 0) {finalSkill = "+"+finalSkill}
    }
    if (
      e === "Animal Handling" ||
      e === "Insight" ||
      e === "Medicine" ||
      e === "Nature" ||
      e === "Perception" ||
      e === "Survival"
    ) {
      modifierName = "Wis";
      modifier = Number(state.WISmodifier);
      finalSkill = modifier + prof;
      if (finalSkill > 0) {finalSkill = "+"+finalSkill}
    }
    if (
      e === "Arcana" ||
      e === "History" ||
      e === "Investigation" ||
      e === "Religion"
    ) {
      modifierName = "Int";
      modifier = Number(state.INTmodifier);
      finalSkill = modifier + prof;
      if (finalSkill > 0) {finalSkill = "+"+finalSkill}
    }
    if (
      e === "Deception" ||
      e === "Intimidation" ||
      e === "Performance" ||
      e === "Persuasion"
    ) {
      modifierName = "Cha";
      modifier = Number(state.CHAmodifier);
      finalSkill = modifier + prof;
      if (finalSkill > 0) {finalSkill = "+"+finalSkill}
    }

    return (
      <li key={i}>
        <label htmlFor={modifierName}>
          {e} <span className="skill">({modifierName})</span>
        </label>
        <input
          className="userData"
          name={modifierName}
          placeholder={finalSkill}
          type="text"
          disabled
        />
        <input
          className="userData"
          name={modifierName}
          type="checkbox"
          checked={checked}
          disabled
        />
      </li>
    );
  });
  return SkillCheck;
};
export default SkillChecks;
