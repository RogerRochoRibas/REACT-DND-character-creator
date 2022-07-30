import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassGearChoices = () => {
  const [state, setState] = useContext(AppContext);
  var gearOptions = [];
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

  if (state.chosenClass === "Barbarian") {
    gearOptions = [
      {
        option1: "Greataxe",
        option2: "Any martial melee weapon",
      },
      { option1: "Two handaxes", option2: "Any simple weapon" },
    ];
  } else if (state.chosenClass === "Bard") {
    gearOptions = [
      {
        option1: "Rapier",
        option2: "Longsword",
      },
      { option1: "A lute", option2: "Any other musical instrument" },
      { option1: "Diplomnat's Pack", option2: "Entertainer's Pack" },
    ];
  } else if (state.chosenClass === "Cleric") {
    gearOptions = [
      {
        option1: "Mace",
        option2: "Warhammer (only if proficient)",
      },
      { option1: "Light crossbow and 20 bolts", option2: "Any simple weapon" },
      { option1: "Scale mail", option2: "Leather armor" },
      { option1: "Priest's Pack", option2: "Explorer's Pack" },
    ];
  } else if (state.chosenClass === "Druid") {
    gearOptions = [
      {
        option1: "Shield",
        option2: "Any simple Weapon",
      },
      { option1: "Scimitar", option2: "Any simple melee weapon" },
    ];
  } else if (state.chosenClass === "Fighter") {
    gearOptions = [
      { option1: "Martial weapon and shield", option2: "Two martial weapons" },
      {
        option1: "Chain mail",
        option2: "Leather armor, longbow and 20 arrows",
      },
      { option1: "Light crossbow and 20 bolts", option2: "Two handaxes" },
      { option1: "Dungeoneer's Pack", option2: "Explorer's Pack" },
    ];
  } else if (state.chosenClass === "Monk") {
    gearOptions = [
      {
        option1: "Shortsword",
        option2: "Any simple weapon",
      },
      { option1: "Dungeoner's Pack", option2: "Explorer's Pack" },
    ];
  } else if (state.chosenClass === "Paladin") {
    gearOptions = [
      {
        option1: "Martial weapon and shield",
        option2: "Two martial weapons",
      },
      { option1: "Five javelins", option2: "Any simple melee weapon" },
      { option1: "Priest's Pack", option2: "Explorer's Pack" },
    ];
  } else if (state.chosenClass === "Ranger") {
    gearOptions = [
      {
        option1: "Scale mail",
        option2: "Leather armor",
      },
      { option1: "Two shortswords", option2: "Two simple melee weapons" },
      { option1: "Dungeoneer's Pack", option2: "Explorer's Pack" },
    ];
  } else if (state.chosenClass === "Rogue") {
    gearOptions = [
      {
        option1: "Rapier",
        option2: "Shortsword",
      },
      { option1: "Shortbow, quiver and 20 arrows", option2: "Shortsword" },
      { option1: "Dungeoner's Pack", option2: "Burglar's Pack" },
    ];
  } else if (state.chosenClass === "Sorcerer") {
    gearOptions = [
      {
        option1: "Light crossbow and 20 bolts",
        option2: "Any simple weapon",
      },
      { option1: "Component pouch", option2: "Arcane focus" },
      { option1: "Dungeoneer's Pack", option2: "Explorer's Pack" },
    ];
  } else if (state.chosenClass === "Warlock") {
    gearOptions = [
      {
        option1: "Light crossbow and 20 bolts",
        option2: "Any simple weapon",
      },
      { option1: "Component pouch", option2: "Arcane focus" },
      { option1: "Scholar's Pack", option2: "Dungeoneer's Pack" },
    ];
  } else if (state.chosenClass === "Wizard") {
    gearOptions = [
      {
        option1: "Quarterstaff",
        option2: "Dagger",
      },
      { option1: "Component pouch", option2: "Arcane focus" },
      { option1: "Scholar's Pack", option2: "Explorer's Pack" },
    ];
  } else {
    gearOptions = [];
  }
  let gearOptionsMounted = gearOptions.map((element, choice) => {
    return (
      <div key={choice}>
        <input
          type="radio"
          id={element.option1}
          name={"gearClassChoice" + choice}
          value={element.option1}
          onChange={(e) => {
            setState({
              ...state,
              ["gearClassChoice" + choice]: e.target.value,
            });
          }}
        />
        <label htmlFor={element.option1}>{element.option1}</label>
        <input
          type="radio"
          id={element.option2}
          name={"gearClassChoice" + choice}
          value={element.option2}
          onChange={(e) => {
            setState({
              ...state,
              ["gearClassChoice" + choice]: e.target.value,
            });
          }}
        />
        <label htmlFor={element.option2}>{element.option2}</label>
        {/*Barbarian weapon choices*/}
        {state.gearClassChoice0 === "Any martial melee weapon" &&
          element.option2 === "Any martial melee weapon" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon1: e.target.value })
                }
              >
                {martialMeleeWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {state.gearClassChoice1 === "Any simple weapon" &&
          element.option2 === "Any simple weapon" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon2: e.target.value })
                }
              >
                {simpleWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {/*Fighter and Paladin weapon choices*/}
        {state.gearClassChoice0 === "Martial weapon and shield" &&
          element.option1 === "Martial weapon and shield" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon1: e.target.value })
                }
              >
                {martialWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {state.gearClassChoice0 === "Two martial weapons" &&
          element.option2 === "Two martial weapons" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon1: e.target.value })
                }
              >
                {martialWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon2: e.target.value })
                }
              >
                {martialWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {/*Druid, Monk, Sorcerer and Warlock first simple weapon choices*/}
        {state.gearClassChoice0 === "Any simple weapon" &&
          element.option2 === "Any simple weapon" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon1: e.target.value })
                }
              >
                {simpleWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {/*Cleric simple weapon choices*/}
        {state.gearClassChoice1 === "Any simple weapon" &&
          element.option2 === "Any simple weapon" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon2: e.target.value })
                }
              >
                {simpleWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {/*Druid and Paladin simple melee weapon choices*/}
        {state.gearClassChoice1 === "Any simple melee weapon" &&
          element.option2 === "Any simple melee weapon" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon2: e.target.value })
                }
              >
                {simpleMeleeWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}
          {/*Ranger two simple melee weapon choices*/}
        {state.gearClassChoice1 === "Two simple melee weapons" &&
          element.option2 === "Two simple melee weapons" && (
            <div className="gearSubchoice">
              <select
                className="choseWeapon"
                onChange={(e) =>
                  setState({ ...state, classWeapon2: e.target.value })
                }
              >
                {simpleMeleeWeaponOptions.map((x, y) => (
                  <option key={y}>{x}</option>
                ))}
              </select>
            </div>
          )}          
          {/*Bard instrument choices*/}
          {state.gearClassChoice1 === "Any other musical instrument" &&
            element.option2 === "Any other musical instrument" && (
              <div className="gearSubchoice">
                <select
                  className="choseWeapon"
                  onChange={(e) =>
                    setState({ ...state, classWeapon2: e.target.value })
                  }
                >
                  {instrumentOptions.map((x, y) => (
                    <option key={y}>{x}</option>
                  ))}
                </select>
              </div>
            )}
      </div>
    );
  });
  return gearOptionsMounted;
};
export default ClassGearChoices;
