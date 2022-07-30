import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassGearChoices = () => {
  const [state, setState] = useContext(AppContext);
  var martialMeleeWeaponOptions = [
    "--",
    "Battleaxe",
    "Flail",
    "Glaive",
    "Greataxe",
    "Greatsword",
    "Halberd",
    "Lance",
    "Longsword",
    "Maul",
    "Morningstar",
    "Pike",
    "Rapier",
    "Scimitar",
    "Shortsword",
    "Trident",
    "War Pick",
    "Warhammer",
    "Whip",
  ];
  var martialWeaponOptions = [
    "--",
    "Blowgun",
    "Hand Crossbow",
    "Heavy Crossbow",
    "Longbow",
    "Net",
    "Battleaxe",
    "Flail",
    "Glaive",
    "Greataxe",
    "Greatsword",
    "Halberd",
    "Lance",
    "Longsword",
    "Maul",
    "Morningstar",
    "Pike",
    "Rapier",
    "Scimitar",
    "Shortsword",
    "Trident",
    "War Pick",
    "Warhammer",
    "Whip",
  ];
  var simpleWeaponOptions = [
    "--",
    "Light Crossbow",
    "Dart",
    "Shortbow",
    "Sling",
    "Club",
    "Dagger",
    "Greatclub",
    "Handaxe",
    "Javelin",
    "Light Hammer",
    "Mace",
    "Quarterstaff",
    "Sickle",
    "Spear",
  ];
  var simpleMeleeWeaponOptions = [
    "--",
    "Club",
    "Dagger",
    "Greatclub",
    "Handaxe",
    "Javelin",
    "Light Hammer",
    "Mace",
    "Quarterstaff",
    "Sickle",
    "Spear",
  ];
  var instrumentOptions = [
    "--",
    "Bagpipes",
    "Birdpipes",
    "Drum",
    "Dulcimer",
    "Flute",
    "Glaur",
    "Hand Drum",
    "Horn",
    "Longhorn",
    "Lute",
    "Lyre",
    "Pan Flute",
    "Shawn",
    "Songhorn",
    "Tantan",
    "Thelarr",
    "Tocken",
    "Viol",
    "Wargong",
    "Yarting",
    "Zulkoon",
  ];
  {
    /*new choices*/
  }
  if (state.chosenClass === "Barbarian") {
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
              classWeapon2offhand: "Handaxe OH",
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
              gearClassChoice2: e.target.value,
              classWeapon2: e.target.value,
              classWeapon2offhand: "",
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
  }
  if (state.chosenClass === "Bard") {
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
      </>
    );
  }
};

export default ClassGearChoices;
