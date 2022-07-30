import { useContext } from "react";
import { AppContext } from "../../appProvider";
import { BarbarianGear } from "./classGear/barbarianGear";
import { BardGear } from "./classGear/bardGear";
import { ClericGear } from "./classGear/clericGear";
import { DruidGear } from "./classGear/druidGear";

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
  if (state.chosenClass === "Druid") {
    return (<DruidGear/>);
  }
};

export default ClassGearChoices;
