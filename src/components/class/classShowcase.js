import { useContext } from "react";
import { ClassAppContext } from "./classProvider";
import SubclassShowcase from "./subclassShowcase";
import ClassChoices from "./classChoices";

const ClassShowcase = () => {
  const [state, setState] = useContext(ClassAppContext);
  if (state.chosenClass === "Fighter") {
    var mainStat = "Strength or Dexterity";
    var subtitle = "Master of the Battlefield";
    var explanation =
      "Fighters are artisans of war. They are proficient with all types of armor, shields, and every simple and martial weapon in the game. A fighter can be anything from a heavily armored frontline tank to a quick and nimble archer.";
    var difficulty = "Low";
    var abilityTitle1 = "More Extra Attacks";
    var abilityDesc1 =
      "Extra attack lets you Attack twice on the same turn. All martial classes get Extra Attack at level 5, but only fighters get it again at level 11 and 20. This makes them capable of up to 4 attack actions in one turn.";
    var abilityTitle2 = "Action Surge";
    var abilityDesc2 =
      'From level 2 onwards Fighters can Action Surge once a day, this allows them to take action twice in a single turn. The perfect skill for the "do ir die" moment.';
    var subclassLevel = "Subclass at level 3";
    var subclassGeneralExplain =
      "Fighter Subclasses have a great impact on the way you play them, from a nimble archer raining arrows on the enemy, to a heavy knight protecting his allies, they can even add magic to their toolkit.";
    var choseSubclass =
      "Even if Fighters don't get to chose a Subclass until level 3, this may help you decide how do you wanna build your character.";
  }
  return (
    <div>
      <h2>{state.chosenClass}</h2>
      <h3>{subtitle}</h3>
      <p>
        Main Stat: {mainStat} Difficulty: {difficulty}
      </p>
      <p>{explanation}</p>
      <div>
        <h3>Main Skills</h3>
        <div>
          <h4>{abilityTitle1}</h4>
          <p>{abilityDesc1}</p>
        </div>
        <div>
          <h4>{abilityTitle2}</h4>
          <p>{abilityDesc2}</p>
        </div>
      </div>
      <div>
        <h3>{subclassLevel}</h3>
        <p>{subclassGeneralExplain}</p>
        <p>{choseSubclass}</p>
        <SubclassShowcase />
        <ClassChoices />
      </div>
    </div>
  );
};

export default ClassShowcase;
