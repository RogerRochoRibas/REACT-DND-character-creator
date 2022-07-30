import { useContext } from "react";
import { AppContext } from "../../../appProvider";
import {
  simpleWeaponOptions,
  instrumentOptions
} from "../data/weaponTypes,";

export const BardGear = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <div>
        <input
          type="radio"
          id="Rapier"
          name="gearClassChoice1"
          value="Rapier"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
              gearClassChoice1list: false,
            });
          }}
        />
        <label htmlFor="Rapier">Rapier</label>
        <input
          type="radio"
          id="Longsword"
          name="gearClassChoice1"
          value="Longsword"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
              gearClassChoice1list: false,
            });
          }}
        />
        <label htmlFor="Longsword">Longsword</label>
        <input
          type="radio"
          id="Any simple weapon"
          name="gearClassChoice1"
          value="Any simple weapon"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: "",
              gearClassChoice1list: true,
            });
          }}
        />
        <label htmlFor="Any simple weapon">Any simple weapon</label>
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
      <div>
        <input
          type="radio"
          id="Lute"
          name="gearClassChoice2"
          value="Lute"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
              gearClassChoice2list: false,
            });
          }}
        />
        <label htmlFor="Lute">Lute</label>
        <input
          type="radio"
          id="Any musical instrument"
          name="gearClassChoice2"
          value="Any musical instrument"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2list: true,
            });
          }}
        />
        <label htmlFor="Any musical instrument">Any musical instrument</label>
        {state.gearClassChoice2list === true && (
          <div className="gearSubchoice">
            <select
              className="choseWeapon"
              onChange={(e) =>
                setState({
                  ...state,
                  gearClassChoice2: e.target.value,
                })
              }
            >
              {instrumentOptions.map((x, y) => (
                <option key={y}>{x}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div>
        <input
          type="radio"
          id="Diplomat's Pack"
          name="gearClassChoice3"
          value="Diplomat's Pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice3: e.target.value,
            });
          }}
        />
        <label htmlFor="Diplomat's Pack">Diplomat's Pack</label>
        <input
          type="radio"
          id="Entertainer's Pack"
          name="gearClassChoice3"
          value="Entertainer's Pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice3: e.target.value,
            });
          }}
        />
        <label htmlFor="Entertainer's Pack">Entertainer's Pack</label>
      </div>
    </>
  );
};
