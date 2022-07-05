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
  
  if (state.chosenClass === "Barbarian") {
    mainStat = "Strength";
    subtitle = "Both Unstoppable Force and Immovable Object";
    difficulty = "Easy";
  }
  if (state.chosenClass === "Bard") {
    mainStat = "Charisma";
    subtitle = "The Right Tool, or Spell, for Every Occasion";
    difficulty = "Hard";
  }
  if (state.chosenClass === "Cleric") {
    mainStat = "Wisdom";
    subtitle = "Everyone's Best Friend";
    difficulty = "Medium";
  }
  if (state.chosenClass === "Druid") {
    mainStat = "Wisdom";
    subtitle = "All of Nature's Gifts and Perils";
    difficulty = "Hard";
  }
  if (state.chosenClass === "Fighter") {
    mainStat = "Strength or Dexterity";
    subtitle = "Master of the Battlefield";
    difficulty = "Easy";
  }
  if (state.chosenClass === "Monk") {
    mainStat = "Dexterity and Wisdom";
    subtitle = "The Speed and Power of the Body";
    difficulty = "Medium";
  }
  if (state.chosenClass === "Paladin") {
    mainStat = "Strength and Charisma";
    subtitle = "Protect the Weak, Smite the Evil";
    difficulty = "Easy";
  }
  if (state.chosenClass === "Ranger") {
    mainStat = "Dexterity and Wisdom";
    subtitle = "Lord of Nature and Exploration";
    difficulty = "Medium";
  }
  if (state.chosenClass === "Rogue") {
    mainStat = "Dexterity";
    subtitle = "All the Cunning, Twice the Versatility";
    difficulty = "Easy";
  }
  if (state.chosenClass === "Sorcerer") {
    mainStat = "Charisma";
    subtitle = "Great Power to Wield Carefully";
    difficulty = "Hard";
  }
  if (state.chosenClass === "Warlock") {
    mainStat = "Charisma";
    subtitle = "An Entirely Different Kind of Magic";
    difficulty = "Medium";
  }
  if (state.chosenClass === "Wizard") {
    mainStat = "Intelligence";
    subtitle = "Raw Magical Prowess";
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
        <h4>Proficiencies</h4>
        <ClassProfChoices />
        <h4>Starting Gear</h4>
        <ClassGear />
        <ClassGearChoices />
        <h4>Skills</h4>
        <ClassSkills />
      </div>
    </div>
  );
};

export default ClassShowcase;
