import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appProvider";

const ChangePage = () => {
  const [state, setState] = useContext(AppContext);
  function calculateSheet() {
    let STR = 10;
    let DEX = 10;
    let CON = 10;
    let INT = 10;
    let WIS = 10;
    let CHA = 10;
    let STRprof = 0;
    let DEXprof = 0;
    let CONprof = 0;
    let INTprof = 0;
    let WISprof = 0;
    let CHAprof = 0;
    if (state.statsSystem === "Point Buy") {
      STR = state.raceSTR+state.pointbuySTR;
      DEX = state.raceDEX+state.pointbuyDEX;
      CON = state.raceCON+state.pointbuyCON;
      INT = state.raceINT+state.pointbuyINT;
      WIS = state.raceWIS+state.pointbuyWIS;
      CHA = state.raceCHA+state.pointbuyCHA;
    }
    if (state.statsSystem === "Roll for Stats") {
      STR = state.raceSTR+state.rollSTR;
      DEX = state.raceDEX+state.rollDEX;
      CON = state.raceCON+state.rollCON;
      INT = state.raceINT+state.rollINT;
      WIS = state.raceWIS+state.rollWIS;
      CHA = state.raceCHA+state.rollCHA;
    }
    if (state.statsSystem === "Set Manually") {
      STR = state.raceSTR+state.manualSTR;
      DEX = state.raceDEX+state.manualDEX;
      CON = state.raceCON+state.manualCON;
      INT = state.raceINT+state.manualINT;
      WIS = state.raceWIS+state.manualWIS;
      CHA = state.raceCHA+state.manualCHA;
    }
    if (state.statsSystem === "Standard Array") {
      STR = state.raceSTR+state.standardSTR;
      DEX = state.raceDEX+state.standardDEX;
      CON = state.raceCON+state.standardCON;
      INT = state.raceINT+state.standardINT;
      WIS = state.raceWIS+state.standardWIS;
      CHA = state.raceCHA+state.standardCHA;
    }
    let STRmodifier = Math.floor(STR / 2 - 5);
    let DEXmodifier = Math.floor(DEX / 2 - 5);
    let CONmodifier = Math.floor(CON / 2 - 5);
    let INTmodifier = Math.floor(INT / 2 - 5);
    let WISmodifier = Math.floor(WIS / 2 - 5);
    let CHAmodifier = Math.floor(CHA / 2 - 5);
    if (state.chosenClass === "Barbarian") {
      STRprof = 2;
      CONprof = 2;
    }if (state.chosenClass === "Bard") {
      DEXprof = 2;
      CHAprof = 2;
    }if (state.chosenClass === "Cleric") {
      WISprof = 2;
      CHAprof = 2;
    }if (state.chosenClass === "Druid") {
      INTprof = 2;
      WISprof = 2;
    }if (state.chosenClass === "Fighter") {
      STRprof = 2;
      CONprof = 2;
    }if (state.chosenClass === "Monk") {
      STRprof = 2;
      DEXprof = 2;
    }if (state.chosenClass === "Paladin") {
      WISprof = 2;
      CHAprof = 2;
    }if (state.chosenClass === "Ranger") {
      STRprof = 2;
      DEXprof = 2;
    }if (state.chosenClass === "Rogue") {
      DEXprof = 2;
      INTprof = 2;
    }if (state.chosenClass === "Sorcerer") {
      CONprof = 2;
      CHAprof = 2;
    }if (state.chosenClass === "Warlock") {
      WISprof = 2;
      CHAprof = 2;
    }if (state.chosenClass === "Wizard") {
      INTprof = 2;
      WISprof = 2;
    }

    // saving throws plus symbol
    let STRsave = Number(STRmodifier) + STRprof;
    let DEXsave = Number(DEXmodifier) + DEXprof;
    let CONsave = Number(CONmodifier) + CONprof;
    let INTsave = Number(INTmodifier) + INTprof;
    let WISsave = Number(WISmodifier) + WISprof;
    let CHAsave = Number(CHAmodifier) + CHAprof;
    let STRSaveSymbol = ""
    let DEXSaveSymbol = ""
    let CONSaveSymbol = ""
    let INTSaveSymbol = ""
    let WISSaveSymbol = ""
    let CHASaveSymbol = ""
    if (STRsave > 0) {
      STRSaveSymbol = "+"
    }
    if (DEXsave > 0) {
      DEXSaveSymbol = "+"
    }
    if (CONsave > 0) {
      CONSaveSymbol = "+"
    }
    if (INTsave > 0) {
      INTSaveSymbol = "+"
    }
    if (WISsave > 0) {
      WISSaveSymbol = "+"
    }
    if (CHAsave > 0) {
      CHASaveSymbol = "+"
    }
    // stat modifiers plus symbol
    let STRModSymbol = ""
    let DEXModSymbol = ""
    let CONModSymbol = ""
    let INTModSymbol = ""
    let WISModSymbol = ""
    let CHAModSymbol = ""
    if (STRmodifier > 0) {
      STRModSymbol = "+"
    }
    if (DEXmodifier > 0) {
      DEXModSymbol = "+"
    }
    if (CONmodifier > 0) {
      CONModSymbol = "+"
    }
    if (INTmodifier > 0) {
      INTModSymbol = "+"
    }
    if (WISmodifier > 0) {
      WISModSymbol = "+"
    }
    if (CHAmodifier > 0) {
      CHAModSymbol = "+"
    }

    // Proficiencies
    let totalProf = []
    totalProf[1] = state.classProf1
    totalProf[2] = state.classProf2
    totalProf[3] = state.classProf3
    totalProf[4] = state.classProf4
    totalProf[5] = state.backgroundProf1
    totalProf[6] = state.backgroundProf2
    totalProf[7] = state.raceProf1
    totalProf[8] = state.raceProf2
    let proficiencyList = ["Acrobatics","Animal Handling","Arcana","Athletics","Deception","History","Insight","Intimidation","Investigation","Medicine","Nature","Perception","Performance","Persuasion","Religion","Sleight of Hand","Stalth","Survival"]
    let profValues = []
    proficiencyList.map((e) => {if (totalProf.includes(e)) {profValues[e]=2} else {profValues[e]=0}})

    // hp
    let hitPoints = state.classHitPoints+Number(state.CONmodifier)
    setState({
      ...state,
      hitPoints:hitPoints,
      profValues:profValues,
      ACmodifier:DEXmodifier,
      STRmodifier: STRModSymbol+STRmodifier,
      STR: STR,
      STRsave: STRSaveSymbol + STRsave,
      DEXmodifier: DEXModSymbol+DEXmodifier,
      DEX: DEX,
      DEXsave: DEXSaveSymbol + DEXsave,
      CONmodifier: CONModSymbol+CONmodifier,
      CON: CON,
      CONsave: CONSaveSymbol + CONsave,
      INTmodifier: INTModSymbol+INTmodifier,
      INT: INT,
      INTsave: INTSaveSymbol + INTsave,
      WISmodifier: WISModSymbol+WISmodifier,
      WIS: WIS,
      WISsave: WISSaveSymbol + WISsave,
      passiveWIS:10+WISmodifier,
      CHAmodifier: CHAModSymbol+CHAmodifier,
      CHA: CHA,
      CHAsave: CHASaveSymbol + CHAsave,
    });
  }

  return (
    <div>
      <Link to="/">
        <button>Class</button>
      </Link>
      <Link to="/stats">
        <button>Stats</button>
      </Link>
      <Link to="/race">
        <button>Race</button>
      </Link>
      <Link to="/background">
        <button>Background</button>
      </Link>
      <Link to="/CharacterSheet">
        <button onClick={() => calculateSheet()}>Character Sheet</button>
      </Link>
    </div>
  );
};

export default ChangePage;
