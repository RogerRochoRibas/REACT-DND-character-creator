import { useContext, useEffect } from "react";
import { StatsAppContext } from "./statsProvider";

const RollStats = () => {
  const [state, setState] = useContext(StatsAppContext);
  function rollStats() {
    var dice1 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    var unsortedDice1 = dice1;
    dice1.sort();
    var addedDice1 = dice1[1] + dice1[2] + dice1[3];

    var dice2 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    var unsortedDice2 = dice2;
    dice2.sort();
    var addedDice2 = dice2[1] + dice2[2] + dice2[3];

    var dice3 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    var unsortedDice3 = dice3;
    dice3.sort();
    var addedDice3 = dice3[1] + dice3[2] + dice3[3];

    var dice4 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    var unsortedDice4 = dice4;
    dice4.sort();
    var addedDice4 = dice4[1] + dice4[2] + dice4[3];

    var dice5 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    var unsortedDice5 = dice5;
    dice5.sort();
    var addedDice5 = dice5[1] + dice5[2] + dice5[3];

    var dice6 = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    var unsortedDice6 = dice6;
    dice6.sort();
    var addedDice6 = dice6[1] + dice6[2] + dice6[3];

    setState({
      ...state,
      roll1: unsortedDice1,
      total1: addedDice1,
      roll2: unsortedDice2,
      total2: addedDice2,
      roll3: unsortedDice3,
      total3: addedDice3,
      roll4: unsortedDice4,
      total4: addedDice4,
      roll5: unsortedDice5,
      total5: addedDice5,
      roll6: unsortedDice6,
      total6: addedDice6,
    });
  }
  return <button onClick={() => rollStats()}>Roll All Stats</button>;
};

const SelectRolled = (props) => {
  const [state, setState] = useContext(StatsAppContext);
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
      roll1: ["", "", "", ""],
      roll2: ["", "", "", ""],
      roll3: ["", "", "", ""],
      roll4: ["", "", "", ""],
      roll5: ["", "", "", ""],
      roll6: ["", "", "", ""],
    });
  }, []);
  const [state, setState] = useContext(StatsAppContext);

  if (state.statsSystem === "Roll for Stats") {
    return (
      <>
        <h2>{state.statsSystem}</h2>
        <RollStats />
        <RollResults
          total={state.total1}
          roll0={state.roll1[0]}
          roll1={state.roll1[1]}
          roll2={state.roll1[2]}
          roll3={state.roll1[3]}
        />
        <RollResults
          total={state.total2}
          roll0={state.roll2[0]}
          roll1={state.roll2[1]}
          roll2={state.roll2[2]}
          roll3={state.roll2[3]}
        />
        <RollResults
          total={state.total3}
          roll0={state.roll3[0]}
          roll1={state.roll3[1]}
          roll2={state.roll3[2]}
          roll3={state.roll3[3]}
        />
        <RollResults
          total={state.total4}
          roll0={state.roll4[0]}
          roll1={state.roll4[1]}
          roll2={state.roll4[2]}
          roll3={state.roll4[3]}
        />
        <RollResults
          total={state.total5}
          roll0={state.roll5[0]}
          roll1={state.roll5[1]}
          roll2={state.roll5[2]}
          roll3={state.roll5[3]}
        />
        <RollResults
          total={state.total6}
          roll0={state.roll6[0]}
          roll1={state.roll6[1]}
          roll2={state.roll6[2]}
          roll3={state.roll6[3]}
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
