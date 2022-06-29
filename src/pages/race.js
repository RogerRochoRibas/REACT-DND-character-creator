import RaceSelector from "../components/race/raceSelector";
import ChangePage from "../components/changePage";
import RaceShowcase from "../components/race/raceShowcase";

const Race = () => {
  return (
    <div className="raceSelector">
        <ChangePage />
        <div className="raceList">
          <RaceSelector />
        </div>
        <RaceShowcase />
    </div>
  );
};

export default Race;
