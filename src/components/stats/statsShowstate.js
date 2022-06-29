import { useContext } from "react";
import { AppContext } from "../../appProvider";
import StandardArray from "./standardArray";
import PointBuy from "./pointBuy";
import RollForstats from "./rollForStats";
import SetManually from "./setManually";

const StatsShowstate = () => {
  const [state, setState] = useContext(AppContext);
  if (state.statsSystem === "Standard Array") {
    return <StandardArray />;
  } else if (state.statsSystem === "Point Buy") {
    return <PointBuy />;
  } else if (state.statsSystem === "Roll for Stats") {
    return <RollForstats />;
  } else if (state.statsSystem === "Set Manually") {
    return <SetManually />;
  }
};

export default StatsShowstate;
