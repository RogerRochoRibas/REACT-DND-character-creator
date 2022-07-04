import { useContext } from "react";
import { AppContext } from "../../appProvider";

export const ArmorClass = () => {
  const [state, setState] = useContext(AppContext);
  let AC = 10;
  // Barbarian
  if (state.chosenClass === "Barbarian") {
    AC = 10 + Number(state.CONmodifier) + Number(state.DEXmodifier);
  }
  // Bard, Rogue, Warlock
  if (
    state.chosenClass === "Bard" ||
    state.chosenClass === "Rogue" ||
    state.chosenClass === "Warlock"
  ) {
    AC = 11 + Number(state.DEXmodifier);
  }
  // Cleric, Ranger
  if (state.chosenClass === "Cleric" || state.chosenClass === "Ranger") {
    if (state.choice1 === "Scale mail") {
      AC = 14 + state.ACmodifier;
      if (ACmodifier > 2) {
        AC = 16;
      }
    }
    if (state.choice0 === "Leather armor") {
      AC = 11 + state.ACmodifier;
    }
    if (!state.choice0) {
      AC = 10 + state.ACmodifier;
    }
  }
  // Druid
  if (state.chosenClass === "Druid") {
    if (state.choice0 === "Shield") {
      AC = 13 + state.ACmodifier;
    }
    if (!state.choice0 === "Shield") {
      AC = 11 + state.ACmodifier;
    }
  }
  // Fighter
  if (state.chosenClass === "Fighter") {
    if (state.choice0 === "Chain Mail") {
      AC = 16;
    }
    if (state.choice0 === "Leather armor, longbow and 20 arrows") {
      AC = 11 + state.ACmodifier;
    }
    if (!state.choice0) {
      AC = 10 + state.ACmodifier;
    }
  }
  // Monk
  if (state.chosenClass === "Monk") {
    AC = 10 + Number(state.WISmodifier) + Number(state.DEXmodifier);
  }
  // Paladin
  if (state.chosenClass === "Paladin") {
    if (state.choice0 === "Martial weapon and shield") {
      AC = 18;
    }
    if (!state.choice0 === "Martial weapon and shield") {
      AC = 16;
    }
  }
  // Sorcerer, Wizard
  if (state.chosenClass === "Sorcerer" || state.chosenClass === "Wizard") {
    AC = 10 + state.ACmodifier;
  }

  return (
    <div className="armorclass">
      <div>
        <label htmlFor="armorclass">Armor Class</label>
        <input
          className="userData"
          name="armorclass"
          placeholder={AC}
          type="text"
          disabled
        />
      </div>
    </div>
  );
};

export const Initiative = () => {
  const [state, setState] = useContext(AppContext);
  let modifier = state.DEXmodifier;
  return (
    <div className="initiative">
      <div>
        <label htmlFor="initiative">Initiative</label>
        <input
          className="userData"
          name="initiative"
          placeholder={modifier}
          type="text"
          disabled
        />
      </div>
    </div>
  );
};
export const Speed = () => {
  const [state, setState] = useContext(AppContext);
  let speed = 30;
  if (state.fly > 0) {
    speed = state.speed + "/" + state.fly;
  }
  if (state.fly === 0) {
    speed = state.speed;
  }

  return (
    <div className="speed">
      <div>
        <label htmlFor="speed">Speed</label>
        <input
          className="userData"
          name="speed"
          placeholder={speed}
          type="text"
        />
      </div>
    </div>
  );
};
