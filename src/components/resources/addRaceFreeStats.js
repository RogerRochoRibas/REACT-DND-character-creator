import { useContext } from "react";
import { AppContext } from "../../appProvider";

export default function CalculateRacefreeStats() {
  const [state, setState] = useContext(AppContext);
  let freeStats = [{"STR": 0},{"DEX": 0},{"CON": 0},{"INT": 0},{"WIS": 0},{"CHA": 0}]
  if (state.racePoint1 === "STR") {
    freeStats.STR = freeStats.STR + 1;
  }
  if (state.racePoint1 === "DEX") {
    freeStats.DEX = freeStats.DEX + 1;
  }
  if (state.racePoint1 === "CON") {
    freeStats.CON = freeStats.CON + 1;
  }
  if (state.racePoint1 === "INT") {
    freeStats.INT = freeStats.INT + 1;
  }
  if (state.racePoint1 === "WIS") {
    freeStats.WIS = freeStats.WIS + 1;
  }
  if (state.racePoint1 === "CHA") {
    freeStats.CHA = freeStats.CHA + 1;
  }
  
  if (state.racePoint2 === "STR") {
    freeStats.STR = freeStats.STR + 1;
  }
  if (state.racePoint2 === "DEX") {
    freeStats.DEX = freeStats.DEX + 1;
  }
  if (state.racePoint2 === "CON") {
    freeStats.CON = freeStats.CON + 1;
  }
  if (state.racePoint2 === "INT") {
    freeStats.INT = freeStats.INT + 1;
  }
  if (state.racePoint2 === "WIS") {
    freeStats.WIS = freeStats.WIS + 1;
  }
  if (state.racePoint2 === "CHA") {
    freeStats.CHA = freeStats.CHA + 1;
  }
  
  if (state.racePoint3 === "STR") {
    freeStats.STR = freeStats.STR + 1;
  }
  if (state.racePoint3 === "DEX") {
    freeStats.DEX = freeStats.DEX + 1;
  }
  if (state.racePoint3 === "CON") {
    freeStats.CON = freeStats.CON + 1;
  }
  if (state.racePoint3 === "INT") {
    freeStats.INT = freeStats.INT + 1;
  }
  if (state.racePoint3 === "WIS") {
    freeStats.WIS = freeStats.WIS + 1;
  }
  if (state.racePoint3 === "CHA") {
    freeStats.CHA = freeStats.CHA + 1;
  }
  return freeStats
}
