import { useContext } from "react";
import { AppContext } from "../../../appProvider";
import {
  simpleWeaponOptions,
} from "../data/weaponTypes,";

export const MonkGear = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <div>
        <input
          type="radio"
          id="Shortsword"
          name="gearClassChoice1"
          value="Shortsword"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
              gearClassChoice1list: false,
            });
          }}
        />
        <label htmlFor="Shortsword">Shortsword</label>
        <input
          type="radio"
          id="Any simple weapon"
          name="gearClassChoice1"
          value="Any simple weapon"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1list: true,
            });
          }}
        />
        <label htmlFor="Any simple weapon">
          Any simple weapon
        </label>
      </div>
      {state.gearClassChoice1list === true && (
        <div className="gearSubchoice">
          <select
            className="choseWeapon"
            onChange={(e) =>
              setState({
                ...state,
                gearClassChoice1: e.target.value,
                classWeapon1: e.target.value,
              })
            }
          >
            {simpleWeaponOptions.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </div>
      )}
      
      <input
          type="radio"
          id="Dungeoneer's Pack"
          name="gearClassChoice2"
          value="Dungeoneer's Pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
            });
          }}
        />
        <label htmlFor="Dungeoneer's Pack">Dungeoneer's Pack</label>
        <input
          type="radio"
          id="Explorer's Pack"
          name="gearClassChoice2"
          value="Explorer's Pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
            });
          }}
        />
        <label htmlFor="Explorer's Pack">Explorer's Pack</label>
    </>
  );
};
