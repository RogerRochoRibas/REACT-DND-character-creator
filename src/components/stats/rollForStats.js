import { useContext, useEffect } from "react";
import { AppContext } from "../../appProvider";

const RollStats = () => {
  const [state, setState] = useContext(AppContext);
  function rollStats() {
    function roll6() {return (Math.floor(Math.random() * 6) + 1)}
    function rollAndCalculate(iteration) {
    var iteration = [roll6(),roll6(),roll6(),roll6()]
    iteration.sort();
    var addedDice = iteration[1] + iteration[2] + iteration[3];
    iteration[4] = addedDice;
    return iteration
    }
    var dice1 = rollAndCalculate("One")
    var dice2 = rollAndCalculate("Two")
    var dice3 = rollAndCalculate("Three")
    var dice4 = rollAndCalculate("Four")
    var dice5 = rollAndCalculate("Five")
    var dice6 = rollAndCalculate("Six")

    setState({
      ...state,
      total1: dice1[4],
      roll10: dice1[0],
      roll11: dice1[1],
      roll12: dice1[2],
      roll13: dice1[3],

      total2: dice2[4],
      roll20: dice2[0],
      roll21: dice2[1],
      roll22: dice2[2],
      roll23: dice2[3],

      total3: dice3[4],
      roll30: dice3[0],
      roll31: dice3[1],
      roll32: dice3[2],
      roll33: dice3[3],
      
      total4: dice4[4],
      roll40: dice4[0],
      roll41: dice4[1],
      roll42: dice4[2],
      roll43: dice4[3],
      
      total5: dice5[4],
      roll50: dice5[0],
      roll51: dice5[1],
      roll52: dice5[2],
      roll53: dice5[3],
      
      total6: dice6[4],
      roll60: dice6[0],
      roll61: dice6[1],
      roll62: dice6[2],
      roll63: dice6[3],
    });
  }
  return <button onClick={() => rollStats()}>Roll Stats</button>;
};

const SelectRolled = (props) => {
  const [state, setState] = useContext(AppContext);
  const options = [
    "--",
    state.total1,
    state.total2,
    state.total3,
    state.total4,
    state.total5,
    state.total6,
  ];
  if (
    state.STRoption === 1 ||
    state.DEXoption === 1 ||
    state.CONoption === 1 ||
    state.INToption === 1 ||
    state.WISoption === 1 ||
    state.CHAoption === 1
  ) {
    options[1] = "--";
  } else {
    options[1] = state.total1;
  }
  if (
    state.STRoption === 2 ||
    state.DEXoption === 2 ||
    state.CONoption === 2 ||
    state.INToption === 2 ||
    state.WISoption === 2 ||
    state.CHAoption === 2
  ) {
    options[2] = "--";
  } else {
    options[2] = state.total2;
  }
  if (
    state.STRoption === 3 ||
    state.DEXoption === 3 ||
    state.CONoption === 3 ||
    state.INToption === 3 ||
    state.WISoption === 3 ||
    state.CHAoption === 3
  ) {
    options[3] = "--";
  } else {
    options[3] = state.total3;
  }
  if (
    state.STRoption === 4 ||
    state.DEXoption === 4 ||
    state.CONoption === 4 ||
    state.INToption === 4 ||
    state.WISoption === 4 ||
    state.CHAoption === 4
  ) {
    options[4] = "--";
  } else {
    options[4] = state.total4;
  }
  if (
    state.STRoption === 5 ||
    state.DEXoption === 5 ||
    state.CONoption === 5 ||
    state.INToption === 5 ||
    state.WISoption === 5 ||
    state.CHAoption === 5
  ) {
    options[5] = "--";
  } else {
    options[5] = state.total5;
  }
  if (
    state.STRoption === 6 ||
    state.DEXoption === 6 ||
    state.CONoption === 6 ||
    state.INToption === 6 ||
    state.WISoption === 6 ||
    state.CHAoption === 6
  ) {
    options[6] = "--";
  } else {
    options[6] = state.total6;
  }
  return (
    <select
      onChange={(e) => {
        if (e.target.value == options[1]) {
          var selectedIndex = 1;
        }
        if (e.target.value == options[2]) {
          var selectedIndex = 2;
        }
        if (e.target.value == options[3]) {
          var selectedIndex = 3;
        }
        if (e.target.value == options[4]) {
          var selectedIndex = 4;
        }
        if (e.target.value == options[5]) {
          var selectedIndex = 5;
        }
        if (e.target.value == options[6]) {
          var selectedIndex = 6;
        }

        setState({
          ...state,
          [props.value]: [e.target.value],
          [props.option]: selectedIndex,
        });
      }}
    >
      {options.map((x, y) => (
        <option key={y}>{x}</option>
      ))}
    </select>
  );
};
const RollOneResult = (props) => {
  return (
    <div className={"dice" + props.roll}>
      <span></span>
      <span></span>
      <span></span>
      <div className="column">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="column">
        <span></span>
      </div>
      <div className="column">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
const RollResults = (props) => {
  return (
    <div className="diceWrap">
      <h3>{props.total}</h3>
      <RollOneResult roll={props.roll0} />
      <RollOneResult roll={props.roll1} />
      <RollOneResult roll={props.roll2} />
      <RollOneResult roll={props.roll3} />
    </div>
  );
};
const RollForstats = () => {
  useEffect(() => {
    setState({
      ...state,
      totalSTR: "",
      totalDEX: "",
      totalCON: "",
      totalINT: "",
      totalWIS: "",
      totalCHA: "",
      STRoption: "",
      DEXoption: "",
      CONoption: "",
      INToption: "",
      WISoption: "",
      CHAoption: "",
      total1: "",
      total2: "",
      total3: "",
      total4: "",
      total5: "",
      total6: "",
      roll11:"",
      roll12:"",
      roll13:"",
      roll10:"",
      roll21:"",
      roll22:"",
      roll23:"",
      roll20:"",
      roll31:"",
      roll32:"",
      roll33:"",
      roll30:"",
      roll41:"",
      roll42:"",
      roll43:"",
      roll40:"",
      roll51:"",
      roll52:"",
      roll53:"",
      roll50:"",
      roll61:"",
      roll62:"",
      roll63:"",
      roll60:"",
    });
  }, []);
  const [state, setState] = useContext(AppContext);

  if (state.statsSystem === "Roll for Stats") {
    return (
      <>
        <h2>{state.statsSystem}</h2>
        <RollStats />
        <RollResults
          total={state.total1}
          roll0={state.roll10}
          roll1={state.roll11}
          roll2={state.roll12}
          roll3={state.roll13}
        />
        <RollResults
          total={state.total2}
          roll0={state.roll20}
          roll1={state.roll21}
          roll2={state.roll22}
          roll3={state.roll23}
        />
        <RollResults
          total={state.total3}
          roll0={state.roll30}
          roll1={state.roll31}
          roll2={state.roll32}
          roll3={state.roll33}
        />
        <RollResults
          total={state.total4}
          roll0={state.roll40}
          roll1={state.roll41}
          roll2={state.roll42}
          roll3={state.roll43}
        />
        <RollResults
          total={state.total5}
          roll0={state.roll50}
          roll1={state.roll51}
          roll2={state.roll52}
          roll3={state.roll53}
        />
        <RollResults
          total={state.total6}
          roll0={state.roll60}
          roll1={state.roll61}
          roll2={state.roll62}
          roll3={state.roll63}
        />
        <h3>STR {state.totalSTR}</h3>
        <SelectRolled value="totalSTR" option="STRoption" />
        <h3>DEX {state.totalDEX}</h3>
        <SelectRolled value="totalDEX" option="DEXoption" />
        <h3>CON {state.totalCON}</h3>
        <SelectRolled value="totalCON" option="CONoption" />
        <h3>INT {state.totalINT}</h3>
        <SelectRolled value="totalINT" option="INToption" />
        <h3>WIS {state.totalWIS}</h3>
        <SelectRolled value="totalWIS" option="WISoption" />
        <h3>CHA {state.totalCHA}</h3>
        <SelectRolled value="totalCHA" option="CHAoption" />
      </>
    );
  }
};

export default RollForstats;
