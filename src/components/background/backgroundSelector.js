import { useContext } from "react";
import { AppContext } from "../../appProvider";

const BackgroundSelector = () => {
  const [state, setState] = useContext(AppContext);
  let backgroundList = [
    "--",
    "Acolyte",
    "Charlatan",
    "Criminal",
    "Criminal (Spy)",
    "Entertainer",
    "Entertainer (Gladiator)",
    "Folk Hero",
    "Guild Artisan",
    "Guild Artisan (Guild Merchant)",
    "Hermit",
    "Noble",
    "Noble (Knight)",
    "Noble (Retainers)",
    "Outlander",
    "Sage",
    "Sailor",
    "Sailor (Pirate)",
    "Soldier",
    "Urchin",
  ];

  return (
    <div>
        <select
          className="choseBackground"
          onChange={(e) => setState({ ...state, background: e.target.value })}
        >
          {backgroundList.map((x, y) => (
            <option key={y}>{x}</option>
          ))}
        </select>
    </div>
  );
};

export default BackgroundSelector;
