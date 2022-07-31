import { useContext } from "react";
import { AppContext } from "../../../appProvider";
import { martialWeaponOptions } from "../data/weaponTypes,";

export const FighterGear = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <>
      <div>
        <input
          type="radio"
          id="Chain Mail"
          name="gearClassChoice1"
          value="Chain Mail"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice1: e.target.value,
            });
          }}
        />
        <label htmlFor="Chain Mail">Chain Mail</label>
        <input
          type="radio"
          id="Leather Armor"
          name="gearClassChoice1"
          value="Leather Armor"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice0: e.target.value,
              gearClassChoice1: "Longbow and 20 arrows",
              classWeapon1: "Longbow",
            });
          }}
        />
        <label htmlFor="Leather Armor">
          Leather armor, longbow, and 20 arrows
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="A martial weapon and a shield"
          name="gearClassChoice2"
          value="A martial weapon and a shield"
          onChange={(e) => {
            setState({
              ...state,
              shield: true,
              gearClassChoice2: "",
              gearClassChoice3: "Shield",
              classWeapon2: "",
              gearClassChoice2list: true,
              gearClassChoice3list: false,
            });
          }}
        />
        <label htmlFor="A martial weapon and a shield">
          A martial weapon and a shield
        </label>
        <input
          type="radio"
          id="Two martial weapons"
          name="gearClassChoice2"
          value="Two martial weapons"
          onChange={(e) => {
            setState({
              ...state,
              shield: false,
              gearClassChoice2: "",
              gearClassChoice3: "",
              classWeapon2: "",
              gearClassChoice2list: true,
              gearClassChoice3list: true,
            });
          }}
        />
        <label htmlFor="Two martial weapons">Two martial weapons</label>
      </div>
      <div className="gearSubchoice">
        {state.gearClassChoice2list === true && (
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
            {martialWeaponOptions.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        )}
        {state.gearClassChoice3list === true && (
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
            {martialWeaponOptions.map((x, y) => (
              <option key={y}>{x}</option>
            ))}
          </select>
        )}
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
              gearClassChoice4: e.target.value,
              gearClassChoice5: "20 bolts",
            });
          }}
        />
        <label htmlFor="Light Crossbow">Light Crossbow and 20 bolts</label>
        <input
          type="radio"
          id="Two handaxes"
          name="gearClassChoice3"
          value="Two handaxes"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice4: "Two handaxes",
              gearClassChoice5: "",
              classWeapon4: "Handaxe",
            });
          }}
        />
        <label htmlFor="Two handaxes">Two handaxes</label>
      </div>
      <div>
        <input
          type="radio"
          id="Dungeoneer's pack"
          name="gearClassChoice4"
          value="Dungeoneer's pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice6: e.target.value,
            });
          }}
        />
        <label htmlFor="Dungeoneer's pack">Dungeoneer's pack</label>
        <input
          type="radio"
          id="Explorer's pack"
          name="gearClassChoice4"
          value="Explorer's pack"
          onChange={(e) => {
            setState({
              ...state,
              gearClassChoice6: e.target.value,
            });
          }}
        />
        <label htmlFor="Explorer's pack">Explorer's pack</label>
      </div>
    </>
  );
};
