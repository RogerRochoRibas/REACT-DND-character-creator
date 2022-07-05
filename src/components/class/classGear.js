import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassGear = () => {
  const [state, setState] = useContext(AppContext);
  
  var classGear = "";
  if (state.chosenClass === "Barbarian") {
    classGear = "An explorer's pack, and four javelins"
  } else if (state.chosenClass === "Bard") {
    classGear = "Leather armor, and a dagger"
  } else if (state.chosenClass === "Cleric") {
    classGear = "A shield and a holy symbol"
  } else if (state.chosenClass === "Druid") {
    classGear = "Leather armor, an explorer's pack, and a druidic focus"
  } else if (state.chosenClass === "Fighter") {
    classGear = ""
  } else if (state.chosenClass === "Monk") {
    classGear = "10 darts"
  } else if (state.chosenClass === "Paladin") {
    classGear = "Chain mail and a holy symbol"
  } else if (state.chosenClass === "Ranger") {
    classGear = "A longbow and a quiver of 20 arrows"
  } else if (state.chosenClass === "Rogue") {
    classGear = "Leather armor, two daggers, and thieves' tools"
  } else if (state.chosenClass === "Sorcerer") {
    classGear = "Two daggers"
  } else if (state.chosenClass === "Warlock") {
    classGear = "Leather armor, any simple weapon, and two daggers"
  } else if (state.chosenClass === "Wizard") {
    classGear = "A spellbook"
  }
  return (
    <p>{classGear}</p>
  )
}

export default ClassGear