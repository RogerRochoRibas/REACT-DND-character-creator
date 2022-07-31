import { useContext } from "react";
import { AppContext } from "../../appProvider";
import AttackBonus from "./resources/attackBonus";
import AttackDamage from "./resources/attackDamage";

const Attacks = () => {
  const [state, setState] = useContext(AppContext);
  let attacksList = state.weaponList.map((e, i) => {
    let attackBonus = AttackBonus(e);
    let attackModifier;
    if (attackBonus > 0) {
      attackModifier = "+" + String(attackBonus);
    }
    let attackDamage = AttackDamage(e);
    let damageBonus = attackBonus - 2;
    let damageModifier;
    if (damageBonus > 0) {
      damageModifier = "+" + String(damageBonus);
    }
    return (
      <tr key={e + i}>
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
            placeholder={attackModifier}
            disabled
          />
        </td>
        <td>
          <input
            className="userData attackBonus"
            name={"atkdamage" + i}
            type="text"
            placeholder={attackDamage + damageModifier}
            disabled
          />
        </td>
      </tr>
    );
  });
  return attacksList;
};
export default Attacks;
