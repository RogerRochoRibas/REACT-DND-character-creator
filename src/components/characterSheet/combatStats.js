import { useContext } from "react";
import { AppContext } from "../../appProvider";

export const ArmorClass = () => {
  const [state, setState] = useContext(AppContext);
  let AC = 10;
  if (state.chosenClass === "Fighter") {
    if (state.choice0 === "Chain Mail") {
      AC = 16;
    }
    if (state.choice0 === "Leather armor, longbow and 20 arrows") {
      AC = 11 + state.DEXmodifier;
    }
    if (!state.choice0) {
      AC = 10 + state.DEXmodifier
    }
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
  let modifier = "0";
  if (state.DEXmodifier > 0) {
    modifier = "+" + state.DEXmodifier;
  }
  if (state.DEXmodifier < 0) {
    modifier = state.DEXmodifier;
  }
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
  console.log('fly',state.fly)
  let speed = 30
    if (state.fly > 0) {
      speed = state.speed + "/" + state.fly;
      console.log('speed with fly',speed)
    }
    if ((state.fly === 0)) {
      speed = state.speed;
      console.log('speed without fly',speed)
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
