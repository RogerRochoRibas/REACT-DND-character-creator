import { useContext, useEffect } from "react";
import { ClassAppContext } from "./classProvider";

const ClassShowcase = () => {
  const [state, setState] = useContext(ClassAppContext);

  return (
    <div>
      <h2>{state.chosenClass}</h2>
    </div>
  );
}

export default ClassShowcase;
