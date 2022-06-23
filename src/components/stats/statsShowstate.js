import { useContext } from "react";
import { StatsAppContext } from "./statsProvider";
import StandardArray from "./standardArray";
import PointBuy from "./pointBuy";
import RollForstats from "./rollForStats";

const StatsShowstate = () => {
  const [state, setState] = useContext(StatsAppContext);
  if (state.statsSystem === "Standard Array") {
    return <StandardArray />;
  } else if (state.statsSystem === "Point Buy") {
    return <PointBuy />;
  } else if (state.statsSystem === "Roll for Stats") {
    return <RollForstats />;
  } else if (state.statsSystem === "Set Manually") {
    return <h2>{state.statsSystem}</h2>;
  }
};

export default StatsShowstate;
