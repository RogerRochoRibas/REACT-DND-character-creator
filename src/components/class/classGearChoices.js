import { useContext } from "react";
import { ClassAppContext } from "./classProvider";

const ClassGearChoices = () => {
  const [state, setState] = useContext(ClassAppContext);
  if (state.chosenClass === "Fighter") {
    var gearOptions = [
      {
        option1: "Chain Mail",
        option2: "Leather armor, longbow and 20 arrows",
      },
      { option1: "Martial weapon and shield", option2: "Two martial weapons" },
      { option1: "Light crossbow and 20 bolts", option2: "Two handaxes" },
      { option1: "Dungeoneer's pack", option2: "Explorer's pack" },
    ];
  } else {
    var gearOptions = [];
  }
  let gearOptionsMounted = gearOptions.map((element, choice) => {
    return (
      <div>
        <input
          type="radio"
          id={element.option1}
          name={"choice" + choice}
          value={element.option1}
          onChange={(e) => {
            setState({ ...state, ["choice" + choice]: e.target.value });
          }}
        />
        <label htmlFor={element.option1}>{element.option1}</label>
        <input
          type="radio"
          id={element.option2}
          name={"choice" + choice}
          value={element.option2}
          onChange={(e) => {
            setState({ ...state, ["choice" + choice]: e.target.value });
          }}
        />
        <label htmlFor={element.option2}>{element.option2}</label>
      </div>
    );
  });
  return gearOptionsMounted;
};
export default ClassGearChoices;
