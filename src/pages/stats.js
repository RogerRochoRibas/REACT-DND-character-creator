import StatsProvider from '../components/stats/statsProvider';
import SystemSelector from '../components/stats/systemSelector';
import StandardArray from '../components/stats/standardArray';
import RollForstats from '../components/stats/rollForStats';
import PointBuy from '../components/stats/pointBuy';


const Stats = () => (
  <div>
    <StatsProvider>
      <SystemSelector />
      <StandardArray />
      <RollForstats />
      <PointBuy />
    </StatsProvider>
    </div>
  );

export default Stats;