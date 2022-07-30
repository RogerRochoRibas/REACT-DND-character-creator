import { useContext, useEffect } from "react";
import { AppContext } from "../../appProvider";
import barbarian from "../../img/barbarian.png";
import bard from "../../img/bard.png";
import cleric from "../../img/cleric.png";
import druid from "../../img/druid.png";
import fighter from "../../img/fighter.png";
import monk from "../../img/monk.png";
import paladin from "../../img/paladin.png";
import ranger from "../../img/ranger.png";
import rogue from "../../img/rogue.png";
import sorcerer from "../../img/sorcerer.png";
import warlock from "../../img/warlock.png";
import wizard from "../../img/wizard.png";

const ClassSelector = () => {
  const [state, setState] = useContext(AppContext);
  let ClassList = [
    { name: "Barbarian", url: barbarian },
    { name: "Bard", url: bard },
    { name: "Cleric", url: cleric },
    { name: "Druid", url: druid },
    { name: "Fighter", url: fighter },
    { name: "Monk", url: monk },
    { name: "Paladin", url: paladin },
    { name: "Ranger", url: ranger },
    { name: "Rogue", url: rogue },
    { name: "Sorcerer", url: sorcerer },
    { name: "Warlock", url: warlock },
    { name: "Wizard", url: wizard },
  ];
  let classesMounted = ClassList.map((element, key) => {
    return (
      <div className="classOption" key={key}>
        <input
          key={key}
          type="radio"
          id={element.name}
          name="chosen_class"
          value={element.name}
          className="hidden"
          onChange={(e) => {
            changeClass(e.target.value);
          }}
        />
        <label htmlFor={element.name}>
          <div className="classImage">
            <img className="classImage-profile-img" src={element.url} alt="" />
          </div>
        </label>
      </div>
    );
  });
  function changeClass(currentClass) {
    if (currentClass === "Barbarian") {
      setState({
        ...state,
        chosenClass: "Barbarian",
        classHitPoints: 12,
        hitDice: "1d12",
        armorProf: ["Light Armor", "Medium Armor", "Shields"],
        weaponProf: ["Simple Weapons", "Martial Weapons"],
        basicClassGear: "An explorer's pack, and four javelins",
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
        classSkill1: "Rage",
        classSkill2: "Unarmored Defense",
        skillOptions: [],
        selectedSkillOption: "",
        skillOptionsText: [],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
      });
    }
    if (currentClass === "Bard") {
      setState({
        ...state,
        chosenClass: "Bard",
        classHitPoints: 8,
        hitDice: "1d8",
        armorProf: ["Light Armor"],
        weaponProf: [
          "Simple Weapons",
          "Hand crossbows",
          "Longswords",
          "Rapiers",
          "Shortswords",
        ],
        basicClassGear: "Leather armor, and a dagger",
        tools: false,
        skillProf: [
          "--",
          "Acrobatics",
          "Animal Handling",
          "Arcana",
          "Athletics",
          "Deception",
          "History",
          "Insight",
          "Intimidation",
          "Investigation",
          "Medicine",
          "Nature",
          "Perception",
          "Performance",
          "Persuasion",
          "Religion",
          "Sleight of Hand",
          "Stalth",
          "Survival",
        ],
        profNumber: 3,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1: "Bardic Inspiration",
        classSkill2: "Spellcasting",
        skillOptions: [],
        selectedSkillOption: "",
        skillOptionsText: [],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "Dagger",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
      });
    }
    if (currentClass === "Cleric") {
      setState({
        ...state,
        chosenClass: "Cleric",
        classHitPoints: 8,
        hitDice: "1d8",
        armorProf: ["Light Armor", "Medium Armor", "Shields"],
        weaponProf: ["Simple Weapons"],
        basicClassGear: "A shield and a holy simbol",
        tools: false,
        skillProf: [
          "--",
          "History",
          "Insight",
          "Medicine",
          "Persuasion",
          "Religion",
        ],
        profNumber: 2,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1: "Divine Domain",
        classSkill2: "Spellcasting",
        skillOptions: [
          "--",
          "Arcana",
          "Death",
          "Forge",
          "Grave",
          "Knowledge",
          "Life",
          "Light",
          "Nature",
          "Order",
          "Peace",
          "Tempest",
          "Trickery",
          "Twilight",
          "War",
        ],
        selectedSubclass: "",
        selectedSkillOption: "",
        skillOptionsText: [],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
        subclass1Text: [
          "Arcane Initiate: When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips.",
          "Arcana Domain Spells: At first level you learn: Detect Magic and Magic Missile",
        ],
        subclass2Text: [
          "Reaper: At 1st level, the cleric learns one necromancy cantrip of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other.",
          "Bonus Proficiency: When the cleric chooses this domain at 1st level, he or she gains proficiency with martial weapons.",
          "Death Domain Spells: At first level you learn: False Life and Ray of Sickness",
        ],
        subclass3Text: [
          "Blessing of the Forge: At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon. Once you use this feature, you can't use it again until you finish a long rest.",
          "Bonus Proficiency: When you choose this domain at 1st level, you gain proficiency with heavy armor and smith's tools.",
          "Forge Domain Spells: At first level you learn: Identify and Searing Smite",
        ],
        subclass4Text: [
          "Circle of Mortality: At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die. In addition, you learn the spare the dying cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action.",
          "Eyes of the Grave: At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest.",
          "Grave Domain Spells: At first level you learn: Bane and False Life",
        ],
        subclass5Text: [
          "Blessing of Knowledge: At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills.",
          "Knowledge Domain Spells: At first level you learn: Command and Identify",
        ],
        subclass6Text: [
          "Disciple of Life: Your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
          "Bonus Proficiency: When you choose this domain at 1st level, you gain proficiency with heavy armor.",
          "Life Domain Spells: At first level you learn: Bless and Cure Wounds",
        ],
        subclass7Text: [
          "Warding Flare: Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
          "Bonus Cantrip: When you choose this domain at 1st level, you gain the light cantrip if you don't already know it. This cantrip doesn't count against the number of cleric cantrips you know.",
          "Light Domain Spells: At first level you learn: Burning Hands and Faerie Fire",
        ],
        subclass8Text: [
          "Acolyte of Nature: At 1st level, you learn one druid cantrip of your choice. This cantrip doesn't count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.",
          "Bonus Proficiency: When you choose this domain at 1st level, you gain proficiency with heavy armor.",
          "Nature Domain Spells: At first level you learn: Animal Friendship and Speak With Animals",
        ],
        subclass9Text: [
          "Voice of Authority: Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see. If the spell targets more than one ally, you choose the ally who can make the attack.",
          "Bonus Proficiency: When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the Intimidation or Persuasion skill (your choice).",
          "Order Domain Spells: At first level you learn: Command and classImageism",
        ],
        subclass10Text: [
          "Emboldening Bond: You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a d4 and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the d4 no more than once per turn. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
          "Implement of Peace: You gain proficiency in the Insight, Performance, or Persuasion skill (your choice).",
          "Peace Domain Spells: At first level you learn: classImageism and Sanctuary",
        ],
        subclass11Text: [
          "Wrath of the Storm: You can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
          "Bonus Proficiencies: You gain proficiency with martial weapons and heavy armor.",
          "Tempest Domain Spells: At first level you learn: Fog Cloud and Thunderwave",
        ],
        subclass12Text: [
          "Blessing of the Trickster: Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.",
          "Trickery Domain Spells: At first level you learn: Charm Person and Disguise Self",
        ],
        subclass13Text: [
          "Eyes of the Night: You can see through the deepest gloom. You have darkvision out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light. As an action, you can magically share the darkvision of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared darkvision lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again.",
          "Vigilant Blessing: The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again.",
          "Bonus Proficiencies: You gain proficiency with martial weapons and heavy armor.",
          "Twilight Domain Spells: At first level you learn: Faerie Fire and Sleep",
        ],
        subclass14Text: [
          "War Priest: From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
          "Bonus Proficiencies: At 1st level, you gain proficiency with martial weapons and heavy armor.",
          "War Domain Spells: At first level you learn: Divine Favor and Shield of Faith",
        ],
      });
    }
    if (currentClass === "Druid") {
      setState({
        ...state,
        chosenClass: "Druid",
        classHitPoints: 8,
        hitDice: "1d8",
        armorProf: ["Light Armor", "Medium Armor", "Shields"],
        weaponProf: [
          "Clubs",
          "Daggers",
          "Darts",
          "Javelins",
          "Maces",
          "Quarterstaffs",
          "Scimitars",
          "Sickles",
          "Slings",
          "Spears",
        ],
        basicClassGear:
          "Leather armor, an explorer's pack, and a druidic focus",
        tools: "Herbalism Kit",
        skillProf: [
          "--",
          "Arcana",
          "Animal Handling",
          "Insight",
          "Medicine",
          "Nature",
          "Perception",
          "Religion",
          "Survival",
        ],
        profNumber: 2,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1: "Druidic",
        classSkill2: "Spellcasting",
        skillOptions: [],
        selectedSkillOption: "",
        skillOptionsText: [],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
      });
    }
    if (currentClass === "Fighter") {
      setState({
        ...state,
        chosenClass: "Fighter",
        classHitPoints: 10,
        hitDice: "1d10",
        armorProf: ["Light Armor", "Medium Armor", "Heavy Armor"],
        weaponProf: ["Simple Weapons", "Martial Weapons"],
        basicClassGear: "An explorer's pack, and four javelins",
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
        classSkill1: "Fighting Style",
        classSkill2: "Second Wind",
        skillOptions: [
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
        skillOptionsText: [
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
        ],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
      });
    }
    if (currentClass === "Monk") {
      setState({
        ...state,
        chosenClass: "Monk",
        classHitPoints: 8,
        hitDice: "1d8",
        armorProf: [""],
        weaponProf: ["Simple Weapons", "Shortswords"],
        tools:
          "Any one type of Artisan's tools or any Musical Instrument of your choice",
        skillProf: [
          "--",
          "Acrobatics",
          "Athletics",
          "History",
          "Insight",
          "Religion",
          "Stealth",
        ],
        profNumber: 2,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1: "Unarmored Defense",
        classSkill2: "Martial Arts",
        skillOptions: [],
        selectedSkillOption: "",
        skillOptionsText: [],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
      });
    }
    if (currentClass === "Rogue") {
      setState({
        ...state,
        chosenClass: "Rogue",
        classHitPoints: 8,
        hitDice: "1d8",
        armorProf: ["Light armor"],
        weaponProf: [
          "Simple Weapons",
          "Hand crossbows",
          "Longswords",
          "Rapiers",
          "Shortswords",
        ],
        basicClassGear: "Leather armor, two daggers, and thieves' tools",
        tools: "Thieves' tools",
        skillProf: [
          "--",
          "Acrobatics",
          "Athletics",
          "Deception",
          "Insight",
          "Intimidation",
          "Investigation",
          "Perception",
          "Performance",
          "Persuasion",
          "Sleight of Hand",
          "Stealth",
        ],
        profNumber: 4,
        classProf1: "",
        classProf2: "",
        classProf3: "",
        classProf4: "",
        classSkill1: "Expertise",
        classSkill2: "Sneak Attack",
        skillOptions: [],
        selectedSkillOption: "",
        skillOptionsText: [],
        classWeapon1: "",
        classWeapon1offhand: "",
        classWeapon1second: "",
        classWeapon2: "",
        classWeapon2offhand: "",
        classWeapon2second: "",
        classWeapon3: "",
        classWeapon3offhand: "",
        classWeapon3second: "",
      });
    }
  }
  return classesMounted;
};

export default ClassSelector;
