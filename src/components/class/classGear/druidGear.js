import { useContext } from "react";
import { AppContext } from "../../../appProvider";
import {
  simpleMeleeWeaponOptions,
  simpleWeaponOptions,
} from "../data/weaponTypes,";

export const DruidGear = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <div>
        <input
          type="radio"
          id="Shield"
          name="gearClassChoice1"
          value="Shield"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              gearClassChoice1list: false,
              classWeapon1: "",
            });
          }}
        />
        <label htmlFor="Shield">Shield</label>
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
        id="Scimitar"
        name="gearClassChoice2"
        value="Scimitar"
        onChange={(e) => {
          setState({
            ...state,
            gearClassChoice2: e.target.value,
            classWeapon2: e.target.value,
            gearClassChoice2list: false,
          });
        }}
      />
      <label htmlFor="Scimitar">Scimitar</label>
      <input
        type="radio"
        id="Any simple melee weapon"
        name="gearClassChoice2"
        value="Any simple melee weapon"
        onChange={(e) => {
          setState({
            ...state,
            gearClassChoice2: "",
            classWeapon2: "",
            gearClassChoice2list: true,
          });
        }}
      />
      <label htmlFor="Any simple melee weapon">Any simple melee weapon</label>
      {state.gearClassChoice2list === true && (
        <div className="gearSubchoice">
          <select
            className="choseWeapon"
            onChange={(e) =>
              setState({
                ...state,
                gearClassChoice2: e.target.value,
                classWeapon2: e.target.value,
              })
            }
          >
            {simpleMeleeWeaponOptions.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
