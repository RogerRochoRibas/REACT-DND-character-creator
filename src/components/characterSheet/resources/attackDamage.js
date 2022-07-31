import { useContext } from "react";
import { AppContext } from "../../../appProvider";

export default function AttackDamage(e) {
  const [state, setState] = useContext(AppContext);
  let attackDamage;
  if (
    e === "Club" ||
    e === "Light Hammer" ||
    e === "Sickle" ||
    e === "Dagger" ||
    e === "Dart" ||
    e === "Sling" ||
    e === "Whip"
  ) {
    attackDamage = "1d4";
  }
  if (
    e === "Handaxe" ||
    e === "Javelin" ||
    e === "Mace" ||
    e === "Quarterstaff" ||
    e === "Spear" ||
    e === "Shortbow" ||
    e === "Scimitar" ||
    e === "Shortsword" ||
    e === "Trident" ||
    e === "Hand Crossbow"
  ) {
    attackDamage = "1d6"
  }
  if (
    e === "Greatclub" ||
    e === "Light Crossbow" ||
    e === "Battleaxe" ||
    e === "Longsword" ||
    e === "Morningstar" ||
    e === "Rapier" ||
    e === "War Pick" ||
    e === "Warhammer" ||
    e === "Longbow"
  ) {
    attackDamage = "1d8"
  }
  if (
    e === "Glaive" ||
    e === "Halberd" ||
    e === "Pike" ||
    e === "Heavy Crossbow"
  ) {
    attackDamage = "1d10"
  }
  if (
    e === "Greataxe" ||
    e === "Lance"
  ) {
    attackDamage = "1d12"
  }
  if (
    e === "Greatsword" ||
    e === "Maul"
  ) {
    attackDamage = "2d6"
  }
  if (
    e === "Blowgun"
  ) {
    attackDamage = "1"
  }
  return attackDamage;
}
