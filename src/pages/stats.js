import StatsProvider from '../components/stats/statsProvider';
import StatsShowstate from '../components/stats/statsShowstate';
import SystemSelector from '../components/stats/systemSelector';

const Stats = () => (
  <div>
    <StatsProvider>
      <SystemSelector />
      <StatsShowstate />
    </StatsProvider>
    </div>
  );

export default Stats;