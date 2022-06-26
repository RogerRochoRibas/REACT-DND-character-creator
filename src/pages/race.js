import RaceProvider from "../components/race/raceProvider";
import RaceSelector from "../components/race/raceSelector";
import ChangePage from "../components/changePage";
import RaceShowcase from "../components/race/raceShowcase";

const Race = () => {
  return (
    <div  className="raceSelector">
      <RaceProvider>
        <RaceSelector />
        <RaceShowcase />
        <ChangePage />
      </RaceProvider>
    </div>
  );
};

export default Race;
