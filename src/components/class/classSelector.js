import { useContext, useEffect } from "react";
import { ClassAppContext } from "./classProvider";

const ClassSelector = () => {
  const [state, setState] = useContext(ClassAppContext);
  let ClassList = ["Fighter", "Barbarian", "Monk", "Rogue", "Ranger", "Paladin", "Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"]
  useEffect(() => {
    let random = Math.floor(Math.random() * ClassList.length);
    let randomClass = ClassList[random]
    setState({ ...state, chosenClass: randomClass });
  }, []);

  let classesMounted = ClassList.map((element,key) => {
    return (
      <div>
        <input
        key={key}
          type="radio"
          id={element}
          name="chosen_class"
          value={element}
          onChange={(e) => {
            setState({ ...state, chosenClass: e.target.value });
          }}
        />
        <label htmlFor={element}>{element}</label>
      </div>
    );
  });
  return classesMounted;

};

export default ClassSelector;
