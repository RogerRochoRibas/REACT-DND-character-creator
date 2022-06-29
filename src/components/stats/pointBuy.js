import { useContext, useEffect } from "react";
import { AppContext } from "../../appProvider";

const Modify = (props) => {
  const [state, setState] = useContext(AppContext);
  useEffect(() => {
    setState({
      ...state,
      Points: 27,
      pointbuySTR: 8,
      pointbuyDEX: 8,
      pointbuyCON: 8,
      pointbuyINT: 8,
      pointbuyWIS: 8,
      pointbuyCHA: 8,
      pointCostSTR: 0,
      pointCostDEX: 0,
      pointCostCON: 0,
      pointCostINT: 0,
      pointCostWIS: 0,
      pointCostCHA: 0,
    });
  }, []);
  function changePoints(value, changer) {
    let currentValues = {
      pointbuySTR: state.pointbuySTR,
      pointbuyDEX: state.pointbuyDEX,
      pointbuyCON: state.pointbuyCON,
      pointbuyINT: state.pointbuyINT,
      pointbuyWIS: state.pointbuyWIS,
      pointbuyCHA: state.pointbuyCHA,
    };
    let pointCost = {
      pointCostSTR: state.pointCostSTR,
      pointCostDEX: state.pointCostDEX,
      pointCostCON: state.pointCostCON,
      pointCostINT: state.pointCostINT,
      pointCostWIS: state.pointCostWIS,
      pointCostCHA: state.pointCostCHA,
    };
    if (value === "pointbuySTR") {
      let oldValueSTR = Number(state[value]);
      if (changer === "-") {
        if (oldValueSTR > 8) {
          let newValue = oldValueSTR - 1;
          currentValues.pointbuySTR = newValue;
        }
      }
      if (changer === "+") {
        if (oldValueSTR < 15) {
          let newValue = oldValueSTR + 1;
          currentValues.pointbuySTR = newValue;
        }
      }
    }
    if (value === "pointbuyDEX") {
      let oldValueDEX = Number(state[value]);
      if (changer === "-") {
        if (oldValueDEX > 8) {
          let newValue = oldValueDEX - 1;
          currentValues.pointbuyDEX = newValue;
        }
      }
      if (changer === "+") {
        if (oldValueDEX < 15) {
          let newValue = oldValueDEX + 1;
          currentValues.pointbuyDEX = newValue;
        }
      }
    }

    if (value === "pointbuyCON") {
      let oldValueCON = Number(state[value]);
      if (changer === "-") {
        if (oldValueCON > 8) {
          let newValue = oldValueCON - 1;
          currentValues.pointbuyCON = newValue;
        }
      }
      if (changer === "+") {
        if (oldValueCON < 15) {
          let newValue = oldValueCON + 1;
          currentValues.pointbuyCON = newValue;
        }
      }
    }

    if (value === "pointbuyINT") {
      let oldValueINT = Number(state[value]);
      if (changer === "-") {
        if (oldValueINT > 8) {
          let newValue = oldValueINT - 1;
          currentValues.pointbuyINT = newValue;
        }
      }
      if (changer === "+") {
        if (oldValueINT < 15) {
          let newValue = oldValueINT + 1;
          currentValues.pointbuyINT = newValue;
        }
      }
    }

    if (value === "pointbuyWIS") {
      let oldValueWIS = Number(state[value]);
      if (changer === "-") {
        if (oldValueWIS > 8) {
          let newValue = oldValueWIS - 1;
          currentValues.pointbuyWIS = newValue;
        }
      }
      if (changer === "+") {
        if (oldValueWIS < 15) {
          let newValue = oldValueWIS + 1;
          currentValues.pointbuyWIS = newValue;
        }
      }
    }

    if (value === "pointbuyCHA") {
      let oldValueCHA = Number(state[value]);
      if (changer === "-") {
        if (oldValueCHA > 8) {
          let newValue = oldValueCHA - 1;
          currentValues.pointbuyCHA = newValue;
        }
      }
      if (changer === "+") {
        if (oldValueCHA < 15) {
          let newValue = oldValueCHA + 1;
          currentValues.pointbuyCHA = newValue;
        }
      }
    }
    // Point Calculations
    if (currentValues.pointbuySTR < 14) {
      pointCost.pointCostSTR = currentValues.pointbuySTR - 8;
    }
    if (currentValues.pointbuySTR === 14) {
      pointCost.pointCostSTR = 7;
    }
    if (currentValues.pointbuySTR === 15) {
      pointCost.pointCostSTR = 9;
    }
    if (currentValues.pointbuyDEX < 14) {
      pointCost.pointCostDEX = currentValues.pointbuyDEX - 8;
    }
    if (currentValues.pointbuyDEX === 14) {
      pointCost.pointCostDEX = 7;
    }
    if (currentValues.pointbuyDEX === 15) {
      pointCost.pointCostDEX = 9;
    }

    if (currentValues.pointbuyCON < 14) {
      pointCost.pointCostCON = currentValues.pointbuyCON - 8;
    }
    if (currentValues.pointbuyCON === 14) {
      pointCost.pointCostCON = 7;
    }
    if (currentValues.pointbuyCON === 15) {
      pointCost.pointCostCON = 9;
    }
    if (currentValues.pointbuyINT < 14) {
      pointCost.pointCostINT = currentValues.pointbuyINT - 8;
    }
    if (currentValues.pointbuyINT === 14) {
      pointCost.pointCostINT = 7;
    }
    if (currentValues.pointbuyINT === 15) {
      pointCost.pointCostINT = 9;
    }
    if (currentValues.pointbuyWIS < 14) {
      pointCost.pointCostWIS = currentValues.pointbuyWIS - 8;
    }
    if (currentValues.pointbuyWIS === 14) {
      pointCost.pointCostWIS = 7;
    }
    if (currentValues.pointbuyWIS === 15) {
      pointCost.pointCostWIS = 9;
    }
    if (currentValues.pointbuyCHA < 14) {
      pointCost.pointCostCHA = currentValues.pointbuyCHA - 8;
    }
    if (currentValues.pointbuyCHA === 14) {
      pointCost.pointCostCHA = 7;
    }
    if (currentValues.pointbuyCHA === 15) {
      pointCost.pointCostCHA = 9;
    }
    let newPoints =
      27 -
      pointCost.pointCostSTR -
      pointCost.pointCostDEX -
      pointCost.pointCostCON -
      pointCost.pointCostINT -
      pointCost.pointCostWIS -
      pointCost.pointCostCHA;
    setState({
      ...state,
      Points: newPoints,
      pointbuySTR: currentValues.pointbuySTR,
      pointbuyDEX: currentValues.pointbuyDEX,
      pointbuyCON: currentValues.pointbuyCON,
      pointbuyINT: currentValues.pointbuyINT,
      pointbuyWIS: currentValues.pointbuyWIS,
      pointbuyCHA: currentValues.pointbuyCHA,
    });
  }
  return (
    <>
      <button onClick={() => changePoints(props.value, "-")}>-</button>
      <button onClick={() => changePoints(props.value, "+")}>+</button>
    </>
  );
};

const PointBuy = () => {
  const [state, setState] = useContext(AppContext);

  if (state.statsSystem === "Point Buy") {
    return (
      <>
        <h2>{state.statsSystem}</h2>
        <p>Points: {state.Points}</p>
        <h3>STR {state.pointbuySTR}</h3>
        <Modify value="pointbuySTR" />
        <h3>DEX {state.pointbuyDEX}</h3>
        <Modify value="pointbuyDEX" />
        <h3>CON {state.pointbuyCON}</h3>
        <Modify value="pointbuyCON" />
        <h3>INT {state.pointbuyINT}</h3>
        <Modify value="pointbuyINT" />
        <h3>WIS {state.pointbuyWIS}</h3>
        <Modify value="pointbuyWIS" />
        <h3>CHA {state.pointbuyCHA}</h3>
        <Modify value="pointbuyCHA" />
      </>
    );
  }
};

export default PointBuy;
