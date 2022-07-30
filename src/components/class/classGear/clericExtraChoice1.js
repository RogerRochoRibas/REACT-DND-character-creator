import { useContext } from "react";
import { AppContext } from "../../../appProvider";

const PriestExtraChoice1 = () => {
  const [state, setState] = useContext(AppContext);
  if (
    state.selectedSubclass === "Tempest" ||
    state.selectedSubclass === "War" ||
    state.selectedSubclass === "Death" ||
    state.race === "Dwarf Duergar" ||
    state.race === "Dwarf Hill" ||
    state.race === "Dwarf Mark of Warding" ||
    state.race === "Dwarf Mountain"
  ) {
    return (
      <>
        <input
          type="radio"
          id="Warhammer"
          name="gearClassChoice1"
          value="Warhammer"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
            });
          }}
        />
        <label htmlFor="Warhammer">Warhammer</label>
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
          id="Warhammer"
          name="gearClassChoice1"
          value="Warhammer"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
            });
          }}
        />
        <label htmlFor="Warhammer">
          Warhammer (only for Death, Twilight, Tempest and War
          clerics, or dwarfs)
        </label>
      </>
    );
  }
};

export default PriestExtraChoice1;
