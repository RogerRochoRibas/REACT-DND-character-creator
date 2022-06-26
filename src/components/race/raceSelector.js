import { useContext, useEffect } from "react";
import { RaceAppContext } from "./RaceProvider";

const RaceSelector = () => {
  const [state, setState] = useContext(RaceAppContext);
  useEffect(() => {
    let raceList = [
      "Aaracokra",
      "Aasimar",
      "Bugbear",
      "Centaur",
      "Changeling",
      "Custom Lineage",
      "Dhamppir",
      "Dragonborn",
      "Duergar",
      "Dwarf",
      "Eladrin",
      "Elf",
      "Fairy",
      "Firbolg",
      "Genasi",
      "Gith",
      "Gnome",
      "Goblin",
      "Goliath",
      "Hafling",
      "Half-Elf",
      "Half-Orc",
      "Herengon",
      "Hexblood",
      "Hobgoblin",
      "Human",
      "Kalashtar",
      "Kenku",
      "Kobold",
      "Leonin",
      "Lizardfolk",
      "Loxodon",
      "Minotaur",
      "Orc",
      "Owlin",
      "Reborn",
      "Satyr",
      "Shadar-Kai",
      "Shifter",
      "Simic Hybrid",
      "Tabaxi",
      "Tiefling",
      "Tortle",
      "Triton",
      "Vedalken",
      "Verdan",
      "Warforged",
      "Yuan-Ti",
    ];
    let random = Math.floor(Math.random() * raceList.length);
    let randomRace = raceList[random];
    setState({ ...state, chosenRace: randomRace });
  }, []);
  let racesMounted = raceList.map((element) => {
    return (
      <div>
        <input
          type="radio"
          id={element}
          name="chosen_race"
          value={element}
          onChange={(e) => {
            setState({ ...state, chosenRace: e.target.value });
          }}
        />
        <label htmlFor="Fighter">Fighter</label>
      </div>
    );
  });
  return racesMounted;
};

export default RaceSelector;
