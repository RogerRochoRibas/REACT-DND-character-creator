import { useContext } from "react";
import { AppContext } from "../../../appProvider";

export default function AttackBonus(e) {
  const [state, setState] = useContext(AppContext);
  let attackBonus;
  let attackModifier;
  if (
    e === "Club" ||
    e === "Greatclub" ||
    e === "Handaxe" ||
    e === "Javelin" ||
    e === "Light Hammer" ||
    e === "Mace" ||
    e === "Quarterstaff" ||
    e === "Sickle" ||
    e === "Spear" ||
    e === "Battleaxe" ||
    e === "Flail" ||
    e === "Glaive" ||
    e === "Greataxe" ||
    e === "Greatsword" ||
    e === "Halberd" ||
    e === "Lance" ||
    e === "Longsword" ||
    e === "Maul" ||
    e === "Morningstar" ||
    e === "Pike" ||
    e === "Trident" ||
    e === "War Pick" ||
    e === "Warhammer"
  ) {
    attackBonus = Number(state.STRmodifier) + 2;
  }
  if (
    e === "Light Crossbow" ||
    e === "Dart" ||
    e === "Shortbow" ||
    e === "Sling" ||
    e === "Dagger" ||
    e === "Blowgun" ||
    e === "Hand Crossbow" ||
    e === "Heavy Crossbow" ||
    e === "Longbow" ||
    e === "Rapier" ||
    e === "Scimitar" ||
    e === "Shortsword" ||
    e === "Whip"
  ) {
    attackBonus = Number(state.DEXmodifier) + 2;
  }
  if (attackBonus > 0) {
    attackModifier = "+" + String(attackBonus);
  }
  return attackModifier;
}
