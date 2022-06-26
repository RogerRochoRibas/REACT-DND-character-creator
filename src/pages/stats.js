import StatsProvider from "../components/stats/statsProvider";
import SystemSelector from "../components/stats/systemSelector";
import StandardArray from "../components/stats/standardArray";
import RollForstats from "../components/stats/rollForStats";
import PointBuy from "../components/stats/pointBuy";
import SetManually from "../components/stats/setManually";
import ChangePage from "../components/changePage";

const Stats = () => {
  return (
    <div>
      <StatsProvider>
        <SystemSelector />
        <StandardArray />
        <RollForstats />
        <PointBuy />
        <SetManually />
        <ChangePage />
      </StatsProvider>
    </div>
  );
};

export default Stats;