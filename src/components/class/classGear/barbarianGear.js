import { useContext } from "react";
import { AppContext } from "../../../appProvider";
import {
  martialMeleeWeaponOptions,
  simpleWeaponOptions,
} from "../data/weaponTypes,";

export const BarbarianGear = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <div>
        <input
          type="radio"
          id="Greataxe"
          name="gearClassChoice1"
          value="Greataxe"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
              gearClassChoice1list: false,
            });
          }}
        />
        <label htmlFor="Greataxe">Greataxe</label>
        <input
          type="radio"
          id="Any martial melee weapon"
          name="gearClassChoice1"
          value="Any martial melee weapon"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: "",
              gearClassChoice1list: true,
            });
          }}
        />
        <label htmlFor="Any martial melee weapon">
          Any martial melee weapon
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
            {martialMeleeWeaponOptions.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </div>
      )}
      <input
        type="radio"
        id="Two handaxes"
        name="gearClassChoice2"
        value="Two handaxes"
        onChange={(e) => {
          setState({
            ...state,
            gearClassChoice2: e.target.value,
            classWeapon2: "Handaxe",
            gearClassChoice2list: false,
          });
        }}
      />
      <label htmlFor="Two handaxes">Two handaxes</label>
      <input
        type="radio"
        id="Any simple weapon"
        name="gearClassChoice2"
        value="Any simple weapon"
        onChange={(e) => {
          setState({
            ...state,
            gearClassChoice2: "",
            classWeapon2: "",
            gearClassChoice2list: true,
          });
        }}
      />
      <label htmlFor="Any simple weapon">Any simple weapon</label>
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
            {simpleWeaponOptions.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};
