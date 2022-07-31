import { useContext } from "react";
import { AppContext } from "../../../appProvider";

const ChosenGear = () => {
  const [state, setState] = useContext(AppContext);
  let gearClass = [];
  gearClass.push(state.gearClassChoice0);
  gearClass.push(state.gearClassChoice1);
  gearClass.push(state.gearClassChoice2);
  gearClass.push(state.gearClassChoice3);
  gearClass.push(state.gearClassChoice4);
  gearClass.push(state.gearClassChoice5);
  gearClass.push(state.gearClassChoice6);
  let gearList = gearClass.map((e,i) => {
    return <p key={e+i}>{e}</p>;
  });
  return gearList;
};
export default ChosenGear;
