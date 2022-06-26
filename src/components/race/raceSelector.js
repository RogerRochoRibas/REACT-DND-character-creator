import { useContext } from "react";
import { RaceAppContext } from "./raceProvider";

const RaceSelector = () => {
  const [state, setState] = useContext(RaceAppContext);
  var raceList =
    [
      "Aaracokra",
      "Aasimar Fallen",
      "Aasimar Protector",
      "Aasimar Scourge",
      "Bugbear",
      "Centaur",
      "Changeling",
      "Dhamppir",
      "Dragonborn",
      "Dragonborn Chromatic",
      "Dragonborn Draconblood",
      "Dragonborn Gem",
      "Dragonborn Metallic",
      "Dragonborn Ravenite",
      "Duergar",
      "Dwarf Duergar",
      "Dwarf Hill",
      "Dwarf Mark of Warding",
      "Dwarf Mountain",
      "Eladrin",
      "Elf Drow",
      "Elf Eladrin",
      "Elf High",
      "Elf Mark of Shadow",
      "Elf Pallid",
      "Elf Sea",
      "Elf Shadar-Kai",
      "Elf Wood",
      "Fairy",
      "Firbolg",
      "Genasi Air",
      "Genasi Earth",
      "Genasi Fire",
      "Genasi water",
      "Gith Githyanki",
      "Gith Githzerai",
      "Gnome Deep/Svirfneblin",
      "Gnome Forest",
      "Gnome Mark of Scribing",
      "Gnome Rock",
      "Goblin",
      "Goliath",
      "Half-Elf",
      "Half-Elf Aquatic",
      "Half-Elf Drow",
      "Half-Elf Mark of Detection",
      "Half-Elf Mark of Storm",
      "Half-Elf Moon Elf / Sun Elf",
      "Half-Elf Wood Elf",
      "Half-Orc",
      "Half-Orc Mark of Finding",
      "Hafling Ghostwise",
      "Hafling Lightfoot",
      "Hafling Lotusden",
      "Hafling Mark of Healing",
      "Hafling Mark of Hospitality",
      "Hafling Stout",
      "Herengon",
      "Hexblood",
      "Hobgoblin",
      "Human",
      "Human Mark of Finding",
      "Human Mark of Handling",
      "Human Mark of Making",
      "Human Mark of Passage",
      "Human Mark of Sentinel",
      "Human Variant",
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
      "Shifter Beasthide",
      "Shifter Longtooth",
      "Shifter Swiftstride",
      "Shifter Wildhunt",
      "Simic Hybrid",
      "Tabaxi",
      "Tiefling",
      "Tiefling Asmodeus",
      "Tiefling Baalzebul",
      "Tiefling Dispater",
      "Tiefling Fierna",
      "Tiefling Glasya",
      "Tiefling Levistus",
      "Tiefling Mammon",
      "Tiefling Mephistopheles",
      "Tiefling Devil's Tongue",
      "Tiefling Hellfire",
      "Tiefling Infernal Legacy",
      "Tiefling Winged",
      "Tiefling Zariel",
      "Tortle",
      "Triton",
      "Vedalken",
      "Verdan",
      "Warforged",
      "Yuan-Ti",
      "Yuan-Ti Pureblood",
    ]
  let racesMounted = raceList.map((element) => {
    return (
      <div>
        <input
          type="radio"
          id={element}
          name="chosen_race"
          value={element}
          onChange={(e) => {
            changeStats(e.target.value);
          }}
        />
        <label htmlFor={element}>{element}</label>
      </div>
    );
  });

  function changeStats(race) {
    if (race === "Aaracokra") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Aasimar Fallen") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Aasimar Protector") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Aasimar Scourge") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 1,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Bugbear") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Centaur") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Changeling") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Dhamppir") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Dragonborn") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Dragonborn Chromatic") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Dragonborn Draconblood") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Dragonborn Gem") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 0,
        cha: 1,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Dragonborn Metallic") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 0,
        cha: 1,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Dragonborn Ravenite") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 1,
        int: 2,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Duergar") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Dwarf Duergar") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Dwarf Hill") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Dwarf Mark of Warding") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 1,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Dwarf Mountain") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Eladrin") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Elf Drow") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf Eladrin") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf High") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 1,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf Mark of Shadow") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf Pallid") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf Sea") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf Shadar-Kai") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Elf Wood") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Fairy") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Small",
      });
    }
    if (race === "Firbolg") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 0,
        int: 0,
        wis: 2,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Genasi Air") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Genasi Earth") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Genasi Fire") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 1,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Genasi water") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Gith Githyanki") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Gith Githzerai") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 2,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Gnome Deep/Svirfneblin") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 2,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Gnome Forest") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 2,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Gnome Mark of Scribing") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Gnome Rock") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 1,
        int: 2,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Goblin") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Goliath") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 2,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf Aquatic") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 2,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf Drow") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 2,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf Mark of Detection") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 2,
        cha: 0,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf Mark of Storm") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf Moon Elf / Sun Elf") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 2,
        volume: "Medium",
      });
    }
    if (race === "Half-Elf Wood Elf") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 2,
        volume: "Medium",
      });
    }
    if (race === "Half-Orc") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Half-Orc Mark of Finding") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 2,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Hafling Ghostwise") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Hafling Lightfoot") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Hafling Lotusden") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Hafling Mark of Healing") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Hafling Mark of Hospitality") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Hafling Stout") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Herengon") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Hexblood") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Hobgoblin") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 1,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Human") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 1,
        con: 1,
        int: 1,
        wis: 1,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Human Mark of Finding") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 2,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Human Mark of Handling") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 2,
        cha: 0,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Human Mark of Making") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 0,
        cha: 0,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Human Mark of Passage") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Human Mark of Sentinel") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Human Variant") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 2,
        volume: "Medium",
      });
    }
    if (race === "Kalashtar") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 2,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Kenku") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Kobold") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Small",
      });
    }
    if (race === "Leonin") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Lizardfolk") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Loxodon") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Minotaur") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Orc") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Owlin") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Reborn") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Satyr") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Shadar-Kai") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Shifter Beasthide") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Shifter Longtooth") {
      setState({
        ...state,
        race: race,
        str: 2,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Shifter Swiftstride") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Shifter Wildhunt") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 2,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Simic Hybrid") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Tabaxi") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 2,
        con: 0,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Asmodeus") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Baalzebul") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Dispater") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Fierna") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Glasya") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 1,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Levistus") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Mammon") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Mephistopheles") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Devil's Tongue") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Hellfire") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 1,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Infernal Legacy") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Winged") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tiefling Zariel") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Tortle") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Triton") {
      setState({
        ...state,
        race: race,
        str: 1,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 1,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Vedalken") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 2,
        wis: 1,
        cha: 0,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Verdan") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 1,
        int: 0,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
    if (race === "Warforged") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 2,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 1,
        volume: "Medium",
      });
    }
    if (race === "Yuan-Ti") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        freeStat: 3,
        volume: "Medium",
      });
    }
    if (race === "Yuan-Ti Pureblood") {
      setState({
        ...state,
        race: race,
        str: 0,
        dex: 0,
        con: 0,
        int: 1,
        wis: 0,
        cha: 2,
        freeStat: 0,
        volume: "Medium",
      });
    }
  }
  return racesMounted;
};

export default RaceSelector;
