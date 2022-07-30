import { useContext } from "react";
import { AppContext } from "../../appProvider";

const Attacks = () => {
  const [state, setState] = useContext(AppContext);
  let attacksList = state.weaponList.map((e, i) => {
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
            className="userData"
            name={"atkbonus" + i}
            type="text"
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
