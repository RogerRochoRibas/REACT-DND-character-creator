import { useContext, useEffect } from "react";
import { AppContext } from "../../appProvider";

const ClassSelector = () => {
  const [state, setState] = useContext(AppContext);
  let ClassList = [
    "Fighter",
    "Barbarian",
    "Monk",
    "Rogue",
    "Ranger",
    "Paladin",
    "Bard",
    "Cleric",
    "Druid",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];
  useEffect(() => {
    let random = Math.floor(Math.random() * ClassList.length);
    let randomClass = ClassList[random];
    setState({ ...state, chosenClass: randomClass });
  }, []);

  let classesMounted = ClassList.map((element, key) => {
    return (
      <div>
        <input
          key={key}
          type="radio"
          id={element}
          name="chosen_class"
          value={element}
          onChange={(e) => {
            changeClass(e.target.value);
          }}
        />
        <label htmlFor={element}>{element}</label>
      </div>
    );
  });
  function changeClass(currentClass) {
    if (currentClass === "Fighter") {
      setState({
        ...state,
        chosenClass: "Fighter",
        hitPoints: 10,
        hitDice: "1d10",
        armorProf: ["Light Armor", "Medium Armor", "Heavy Armor"],
        weaponProf: ["Simple Weapons", "Martial Weapons"],
        tools: false,
        skillProf: [
          "--",
          "Acrobatics",
          "Animal Handling",
          "Athletics",
          "History",
          "Insight",
          "Intimidation",
          "Perception",
          "Survival",
        ],
        skillNumber: 2,
        saveSTR: true,
        saveDEX: false,
        saveCON: true,
        saveINT: false,
        saveWIS: false,
        saveCHA: false,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
      });
    }
  }
  return classesMounted;
};

export default ClassSelector;
