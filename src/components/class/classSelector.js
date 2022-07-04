import { useContext, useEffect } from "react";
import { AppContext } from "../../appProvider";

const ClassSelector = () => {
  const [state, setState] = useContext(AppContext);
  let ClassList = [
    "Fighter",
    "Barbarian",
    "Monk",
    "Rogue",
    "Ranger",
    "Paladin",
    "Bard",
    "Cleric",
    "Druid",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];
  useEffect(() => {
    let random = Math.floor(Math.random() * ClassList.length);
    let randomClass = ClassList[random];
    setState({ ...state, chosenClass: randomClass });
  }, []);

  let classesMounted = ClassList.map((element, key) => {
    return (
      <div key={key}>
        <input
          key={key}
          type="radio"
          id={element}
          name="chosen_class"
          value={element}
          onChange={(e) => {
            changeClass(e.target.value);
          }}
        />
        <label htmlFor={element}>{element}</label>
      </div>
    );
  });
  function changeClass(currentClass) {
    if (currentClass === "Fighter") {
      setState({
        ...state,
        chosenClass: "Fighter",
        classHitPoints: 10,
        hitDice: "1d10",
        armorProf: ["Light Armor", "Medium Armor", "Heavy Armor"],
        weaponProf: ["Simple Weapons", "Martial Weapons"],
        tools: false,
        skillProf: [
          "--",
          "Acrobatics",
          "Animal Handling",
          "Athletics",
          "History",
          "Insight",
          "Intimidation",
          "Perception",
          "Survival",
        ],
        profNumber: 2,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1:"Fighting Style",
        classSkill2:"Second Wind",
        skillOtions: [
          "--",
          "Archery",
          "Blind Fighting",
          "Defense",
          "Dueling",
          "Great Weapon Fighting",
          "Interception",
          "Protection",
          "Superior Technique",
          "Thrown Weapon Fighting",
          "Two-Weapon Fighting",
          "Unarmed Fighting",
        ],
        selectedSkillOption: "",
        skillOptionsText:[ 
          "You gain a +2 bonus to attack rolls you make with ranged weapons.",
          "You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
          "While you are wearing armor, you gain a +1 bonus to AC.",
          "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
          "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
          "When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.",
          "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
          "You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest.",
          "You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.",
          "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
          "Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8. At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you",
        
        ]
      });
    }
    if (currentClass === "Barbarian") {
      setState({
        ...state,
        chosenClass: "Barbarian",
        classHitPoints: 12,
        hitDice: "1d12",
        armorProf: ["Light Armor", "Medium Armor", "Shields"],
        weaponProf: ["Simple Weapons", "Martial Weapons"],
        tools: false,
        skillProf: [
          "--",
          "Animal Handling",
          "Athletics",
          "Intimidation",
          "Nature",
          "Perception",
          "Survival",
        ],
        profNumber: 2,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1:"Rage",
        classSkill2:"Unarmored Defense",
        skillOtions: [],
        selectedSkillOption: "",
        skillOptionsText:[]
      });
    }
  }
  return classesMounted;
};

export default ClassSelector;
