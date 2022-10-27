import { useContext } from "react";
import { AppContext } from "../../appProvider";
import ClassProfChoices from "./classProfChoices";
import ClassSkills from "./classSkills";
import ClassGear from "./classGear";
import ChangePage from "../changePage";

const ClassShowcase = () => {
  const [state, setState] = useContext(AppContext);
  var mainStat = "";
  var subtitle = "";

  if (state.chosenClass === "Barbarian") {
    mainStat = "Strength";
    subtitle = "Both Unstoppable Force and Immovable Object";
  }
  if (state.chosenClass === "Bard") {
    mainStat = "Charisma";
    subtitle = "The Right Tool, or Spell, for Every Occasion";
  }
  if (state.chosenClass === "Cleric") {
    mainStat = "Wisdom";
    subtitle = "Everyone's Best Friend";
  }
  if (state.chosenClass === "Druid") {
    mainStat = "Wisdom";
    subtitle = "All of Nature's Gifts and Perils";
  }
  if (state.chosenClass === "Fighter") {
    mainStat = "Strength or Dexterity";
    subtitle = "Master of the Battlefield";
  }
  if (state.chosenClass === "Monk") {
    mainStat = "Dexterity and Wisdom";
    subtitle = "The Speed and Power of the Body";
  }
  if (state.chosenClass === "Paladin") {
    mainStat = "Strength and Charisma";
    subtitle = "Protect the Weak, Smite the Evil";
  }
  if (state.chosenClass === "Ranger") {
    mainStat = "Dexterity and Wisdom";
    subtitle = "Lord of The Wild and Beyond";
  }
  if (state.chosenClass === "Rogue") {
    mainStat = "Dexterity";
    subtitle = "All the Cunning, Twice the Versatility";
  }
  if (state.chosenClass === "Sorcerer") {
    mainStat = "Charisma";
    subtitle = "Great Power to Wield Carefully";
  }
  if (state.chosenClass === "Warlock") {
    mainStat = "Charisma";
    subtitle = "An Otherworldly Kind of Magic";
  }
  if (state.chosenClass === "Wizard") {
    mainStat = "Intelligence";
    subtitle = "Raw Magical Prowess";
  }
  if (state.chosenClass !== undefined) {
    return (
      <div className="Showcase">
        <h2>{state.chosenClass}</h2>
        <h3>{subtitle}</h3>
        <p>Main Stat: {mainStat}</p>
        <div className="classFeatures">
          <ClassSkills />
          <ClassProfChoices />
          <ClassGear />
          <ChangePage />
        </div>
      </div>
    );
  }
};

export default ClassShowcase;
