import { useContext, useEffect } from "react";
import { ClassAppContext } from "./classProvider";

const ClassSelector = () => {
  const [state, setState] = useContext(ClassAppContext);
  useEffect(() => {
    let ClassList = ["Fighter", "Barbarian", "Monk", "Rogue", "Ranger", "Paladin", "Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"]
    let random = Math.floor(Math.random() * ClassList.length);
    let randomClass = ClassList[random]
    setState({ ...state, chosenClass: randomClass });
  }, []);

  return (
    <div>
      <input
        type="radio"
        id="Fighter"
        name="chosen_class"
        value="Fighter"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Fighter">Fighter</label>
      <input
        type="radio"
        id="Barbarian"
        name="chosen_class"
        value="Barbarian"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Barbarian">Barbarian</label>
      <input
        type="radio"
        id="Monk"
        name="chosen_class"
        value="Monk"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Monk">Monk</label>
      <input
        type="radio"
        id="Rogue"
        name="chosen_class"
        value="Rogue"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Rogue">Rogue</label>
      <input
        type="radio"
        id="Ranger"
        name="chosen_class"
        value="Ranger"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Ranger">Ranger</label>
      <input
        type="radio"
        id="Paladin"
        name="chosen_class"
        value="Paladin"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Paladin">Paladin</label>
      <input
        type="radio"
        id="Bard"
        name="chosen_class"
        value="Bard"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Bard">Bard</label>
      <input
        type="radio"
        id="Cleric"
        name="chosen_class"
        value="Cleric"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Cleric">Cleric</label>
      <input
        type="radio"
        id="Druid"
        name="chosen_class"
        value="Druid"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Druid">Druid</label>
      <input
        type="radio"
        id="Sorcerer"
        name="chosen_class"
        value="Sorcerer"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Sorcerer">Sorcerer</label>
      <input
        type="radio"
        id="Warlock"
        name="chosen_class"
        value="Warlock"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Warlock">Warlock</label>
      <input
        type="radio"
        id="Wizard"
        name="chosen_class"
        value="Wizard"
        onChange={(e) => {
          setState({ ...state, chosenClass: e.target.value });
        }}
      />
      <label htmlFor="Wizard">Wizard</label>
    </div>
  );
};

export default ClassSelector;
