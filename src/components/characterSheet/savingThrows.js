import { useContext } from "react";
import { AppContext } from "../../appProvider";

const SavingThrows = () => {
  const [state, setState] = useContext(AppContext);
  let savesList = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  let savingThrows = savesList.map((e, i) => {
    let name = {e}+"save"
    let save = 0;
    let checked = false;
    if (e === "Strength") {
      save = Number(state.STRsave);
      if (state.chosenClass === "Barbarian" || state.chosenClass === "Fighter" || state.chosenClass === "Monk" || state.chosenClass === "Ranger") {
        checked = true
      }
    }
    if (e === "Dexterity") {
      save = Number(state.DEXsave);
      if (state.chosenClass === "Bard" || state.chosenClass === "Rogue" || state.chosenClass === "Monk" || state.chosenClass === "Ranger") {
        checked = true
      }
    }
    if (e === "Constitution") {
      save = Number(state.CONsave);
      if (state.chosenClass === "Barbarian" || state.chosenClass === "Fighter" || state.chosenClass === "Sorcerer") {
        checked = true
      }
    }
    if (e === "Intelligence") {
      save = Number(state.INTsave);
      if (state.chosenClass === "Druid" || state.chosenClass === "Rogue" || state.chosenClass === "Wizard") {
        checked = true
      }
    }
    if (e === "Wisdom") {
      save = Number(state.WISsave);
      if (state.chosenClass === "Cleric" || state.chosenClass === "Druid" || state.chosenClass === "Paladin" || state.chosenClass === "Warlock" || state.chosenClass === "Wizard") {
        checked = true
      }
    }
    if (e === "Charisma") {
      save = Number(state.CHAsave);
      if (state.chosenClass === "Cleric" || state.chosenClass === "Bard" || state.chosenClass === "Paladin" || state.chosenClass === "Warlock" || state.chosenClass === "Sorcerer") {
        checked = true
      }
    }
    if (save > 0) {save = "+"+save}
    return (
      <li key={i}>
        <label htmlFor={e}>{e}</label>
        <input
          className="userData"
          name={e}
          placeholder={save}
          type="text"
          disabled
        />
        <input
          className="userData"
          name={name}
          type="checkbox"
          checked={checked}
          disabled
        />
      </li>
    );
  });
  return savingThrows
};

export default SavingThrows;
