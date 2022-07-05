import { useContext } from "react";
import { AppContext } from "../../appProvider";
import ClassGearChoices from "./classGearChoices";
import ClassProfChoices from "./classProfChoices";
import ClassSkills from "./classSkills";
import ClassGear from "./classGear";

const ClassShowcase = () => {
  const [state, setState] = useContext(AppContext);
  var mainStat = ""
  var subtitle = ""
  var difficulty = ""
  if (state.chosenClass === "Fighter") {
    mainStat = "Strength or Dexterity";
    subtitle = "Master of the Battlefield";
    difficulty = "Low";
  }
  if (state.chosenClass === "Barbarian") {
    mainStat = "Strength";
    subtitle = "Unstoppable Force and Immovable Object";
    difficulty = "Low";
  }
  if (state.chosenClass === "Monk") {
    mainStat = "Dexterity and Wisdom";
    subtitle = "The Speed and Power of the Body";
    difficulty = "Medium";
  }
  if (state.chosenClass === "Rogue") {
    mainStat = "Dexterity";
    subtitle = "All the Cunning and twice the Versatility";
    difficulty = "Medium";
  }
  return (
    <div>
      <h2>{state.chosenClass}</h2>
      <h3>{subtitle}</h3>
      <p>
        Main Stat: {mainStat} Difficulty: {difficulty}
      </p>
      <div>
        <h4>Skills</h4>
        <ClassSkills />
        <h4>Proficiencies</h4>
        <ClassProfChoices />
        <h4>Starting Gear</h4>
        <ClassGear />
        <ClassGearChoices />
      </div>
    </div>
  );
};

export default ClassShowcase;
