import { useContext } from "react";
import { AppContext } from "../../../appProvider";

const PriestExtraChoice2 = () => {
  const [state, setState] = useContext(AppContext);
  if (
    state.selectedSubclass === "Forge" ||
    state.selectedSubclass === "Life" ||
    state.selectedSubclass === "Twilight" ||
    state.selectedSubclass === "Tempest" ||
    state.selectedSubclass === "Order" ||
    state.selectedSubclass === "Nature"
  ) {
    return (
      <>
        <input
          type="radio"
          id="Chain Mail"
          name="gearClassChoice2"
          value="Chain Mail"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
            });
          }}
        />
        <label htmlFor="Chain Mail">Chain Mail</label>
      </>
    );
  }
  if (
    state.selectedSubclass !== "Tempest" &&
    state.selectedSubclass !== "War" &&
    state.race !== "Dwarf Duergar" &&
    state.race !== "Dwarf Hill" &&
    state.race !== "Dwarf Mark of Warding" &&
    state.race !== "Dwarf Mountain"
  ) {
    return (
      <>
        <input
          disabled
          type="radio"
          id="Chain Mail"
          name="gearClassChoice2"
          value="Chain Mail"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
            });
          }}
        />
        <label htmlFor="Chain Mail">
          Chain Mail (only for Forge, Life, Twilight, Tempest, Order
          and Nature Clerics.)
        </label>
      </>
    );
  }
};

export default PriestExtraChoice2;
