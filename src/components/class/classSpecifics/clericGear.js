import { useContext } from "react";
import { AppContext } from "../../../appProvider";
import PriestExtraChoice1 from "./clericExtraChoice1";
import PriestExtraChoice2 from "./clericExtraChoice2";
import {
  simpleWeaponOptions,
} from "../data/weaponTypes,";

export const ClericGear = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <div>
        <input
          type="radio"
          id="Mace"
          name="gearClassChoice1"
          value="Mace"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
              classWeapon1: e.target.value,
            });
          }}
        />
        <label htmlFor="Mace">Mace</label>
        <PriestExtraChoice1 />
      </div>
      <div>
        <input
          type="radio"
          id="Scale Mail"
          name="gearClassChoice2"
          value="Scale Mail"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
            });
          }}
        />
        <label htmlFor="Scale Mail">Scale Mail</label>
        <input
          type="radio"
          id="Leather Armor"
          name="gearClassChoice2"
          value="Leather Armor"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice2: e.target.value,
            });
          }}
        />
        <label htmlFor="Leather Armor">Leather Armor</label>
        <PriestExtraChoice2 />
      </div>
      <div>
        <input
          type="radio"
          id="Light Crossbow"
          name="gearClassChoice3"
          value="Light Crossbow"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice3: e.target.value,
              gearClassChoice3list: false,
            });
          }}
        />
        <label htmlFor="Light Crossbow">Light Crossbow and 20 bolts</label>
        <input
          type="radio"
          id="Any simple weapon"
          name="gearClassChoice3"
          value="Any simple weapon"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice3: "",
              gearClassChoice3list: true,
            });
          }}
        />
        <label htmlFor="Any simple weapon">Any simple weapon</label>
        {state.gearClassChoice3list === true && (
          <div className="gearSubchoice">
            <select
              className="choseWeapon"
              onChange={(e) =>
                setState({
                  ...state,
                  gearClassChoice3: e.target.value,
                  classWeapon3: e.target.value,
                })
              }
            >
              {simpleWeaponOptions.map((x, y) => (
                <option key={y}>{x}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div>
        <input
          type="radio"
          id="Priest's Pack"
          name="gearClassChoice4"
          value="Priest's Pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice4: e.target.value,
            });
          }}
        />
        <label htmlFor="Priest's Pack">Priest's Pack</label>
        <input
          type="radio"
          id="Explorer's Pack"
          name="gearClassChoice4"
          value="Explorer's Pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice4: e.target.value,
            });
          }}
        />
        <label htmlFor="Explorer's Pack">Explorer's Pack</label>
      </div>
    </>
  ) }