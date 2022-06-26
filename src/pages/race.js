import RaceProvider from "../components/race/raceProvider";
import RaceSelector from "../components/race/raceSelector";

const Race = () => {
  return (
    <div>
      <RaceProvider>
        <RaceSelector />
      </RaceProvider>
    </div>
  );
};

export default Race;
