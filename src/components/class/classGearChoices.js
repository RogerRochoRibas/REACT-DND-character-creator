import { useContext } from "react";
import { AppContext } from "../../appProvider";
import { BarbarianGear } from "./classSpecifics/barbarianGear";
import { BardGear } from "./classSpecifics/bardGear";
import { ClericGear } from "./classSpecifics/clericGear";

const ClassGearChoices = () => {
  const [state, setState] = useContext(AppContext);
  if (state.chosenClass === "Barbarian") {
    return <BarbarianGear />;
  }
  if (state.chosenClass === "Bard") {
    return <BardGear />;
  }
  if (state.chosenClass === "Cleric") {
    return (<ClericGear/>);
  }
};

export default ClassGearChoices;
