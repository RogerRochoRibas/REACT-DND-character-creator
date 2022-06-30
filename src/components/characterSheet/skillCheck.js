import { useContext } from "react";
import { AppContext } from "../../appProvider";

const SkillCheck = (skill, attribute) => {
  const [state, setState] = useContext(AppContext);
  return (
    <li>
      <label htmlFor={skill}>
        {skill} <span className="skill">(Dex)</span>
      </label>
      <input className="userData" name={skill} placeholder="+0" type="text" />
      <input className="userData" name={skill} type="checkbox" />
    </li>
  );
};

export default SkillCheck