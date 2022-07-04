import { useContext } from "react";
import { AppContext } from "../../appProvider";

const Features = () => {
  const [state, setState] = useContext(AppContext);
  let featureList = state.features.map((e,i) => {return (
      <li key={i}>
        <p>{e}</p>
      </li>
    );
  });
  return featureList;
};
export default Features;
