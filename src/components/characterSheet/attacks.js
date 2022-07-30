import { useContext } from "react";
import { AppContext } from "../../appProvider";
import AttackBonus from "./resources/attackBonus";

const Attacks = () => {
  const [state, setState] = useContext(AppContext);
  let attacksList = state.weaponList.map((e, i) => {
    let attackBonus = AttackBonus(e)
    return (
      <tr key={e+i}>
        <td>
          <input
            className="userData"
            name={"atkname" + i}
            type="text"
            placeholder={e}
            disabled
          />
        </td>
        <td>
          <input
            className="userData attackBonus"
            name={"atkbonus" + i}
            type="text"
            placeholder={attackBonus}
            disabled
          />
        </td>
        <td>
          <input
            className="userData"
            name={"atkdamage" + i}
            type="text"
            disabled
          />
        </td>
      </tr>
    );
  });
  return attacksList;
};
export default Attacks;
