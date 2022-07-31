import { useContext } from "react";
import { AppContext } from "../../appProvider";
import { BarbarianGear } from "./classGear/barbarianGear";
import { BardGear } from "./classGear/bardGear";
import { ClericGear } from "./classGear/clericGear";
import { DruidGear } from "./classGear/druidGear";
import { MonkGear } from "./classGear/monkGear";
import { FighterGear } from "./classGear/fighterGear";

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
  if (state.chosenClass === "Monk") {
    return (<MonkGear/>);
  }
  if (state.chosenClass === "Fighter") {
    return (<FighterGear/>);
  }
};

export default ClassGearChoices;
