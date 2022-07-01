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

  function changeBackground(background) {
    let backgroundProf1 = "";
    let backgroundProf2 = ""
    if (background === "Acolyte") {
      backgroundProf1 = "Insight"
      backgroundProf2 = "Religion"
    }
          setState({
            ...state,
            background: background,
            backgroundProf1: backgroundProf1,
            backgroundProf2: backgroundProf2,
          })
  }

  return (
    <div>
      <select
        className="choseBackground"
        onChange={(e) => changeBackground(e.target.value)
        }
      >
        {backgroundList.map((x, y) => (
          <option key={y}>{x}</option>
        ))}
      </select>
    </div>
  );
};

export default BackgroundSelector;
