import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassSkills = () => {
  const [state, setState] = useContext(AppContext);
  let skillOptions = state.skillOtions;

  if (state.chosenClass === "Barbarian") {
    return (
      <div>
        <div>
          <h4>Rage</h4>
          <p>
            In battle, you fight with primal ferocity. On your turn, you can
            enter a rage as a bonus action.
          </p>

          <p>
            While raging, you gain the following benefits if you aren't wearing
            heavy armor:
          </p>
          <ul>
            <li>
              You have advantage on Strength checks and Strength saving throws.
            </li>
            <li>
              When you make a melee weapon attack using Strength, you gain a +2
              bonus to the damage roll. This bonus increases as you level.
            </li>
            <li>
              You have resistance to bludgeoning, piercing, and slashing damage.
            </li>
          </ul>
          <p>
            If you are able to cast spells, you can't cast them or concentrate
            on them while raging.
          </p>

          <p>
            Your rage lasts for 1 minute. It ends early if you are knocked
            unconscious or if your turn ends and you haven't attacked a hostile
            creature since your last turn or taken damage since then. You can
            also end your rage on your turn as a bonus action.
          </p>

          <p>
            Once you have raged the maximum number of times for your barbarian
            level, you must finish a long rest before you can rage again. You
            may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6
            at 17th.
          </p>
          <h4>Unarmored Defense</h4>
          <p>
            While you are not wearing any armor, your Armor Class equals 10 +
            your Dexterity modifier + your Constitution modifier. You can use a
            shield and still gain this benefit.
          </p>
        </div>
      </div>
    );
  }
  if (state.chosenClass === "Bard") {
    return (
      <div>
        <h4>Bardic Inspiration</h4>
        <p>
          You can inspire others through stirring words or music. To do so, you
          use a bonus action on your turn to choose one creature other than
          yourself within 60 feet of you who can hear you. That creature gains
          one Bardic Inspiration die, a d6.
        </p>
        <p>
          Once within the next 10 minutes, the creature can roll the die and add
          the number rolled to one ability check, attack roll, or saving throw
          it makes. The creature can wait until after it rolls the d20 before
          deciding to use the Bardic Inspiration die, but must decide before the
          DM says whether the roll succeeds or fails. Once the Bardic
          Inspiration die is rolled, it is lost. A creature can have only one
          Bardic Inspiration die at a time.
        </p>
        <p>
          You can use this feature a number of times equal to your Charisma
          modifier (a minimum of once). You regain any expended uses when you
          finish a long rest.
        </p>
        <p>
          Your Bardic Inspiration die changes when you reach certain levels in
          this class. The die becomes a d8 at 5th level, a d10 at 10th level,
          and a d12 at 15th level.
        </p>
        <h4>Spellcasting</h4>
        <p>
          You have learned to untangle and reshape the fabric of reality in
          harmony with your wishes and music. Your spells are part of your vast
          repertoire, magic that you can tune to different situations.
        </p>
        <h5>Cantrips</h5>
        <p>
          You know two cantrips of your choice from the bard spell list. You
          learn additional bard cantrips at level 4 and 10.
        </p>
        <h5>Spells</h5>
        <p>
          You know four 1st-level spells of your choice from the bard spell
          list.
        </p>
        <p>
          You learn an additional bard spell of your choice at each level except
          12th, 16th, 19th, and 20th.
        </p>
        <h5>Spell Slots</h5>
        <p>
          To cast a Spell (not a Cantrip) you consume a Spell Slot. At level 1
          you have 2 1st-level Spell Slots and recover all of them with a Long
          Rest.
        </p>
        <h5>Spellcasting Ability</h5>
        <p>
          You use your Charisma modifier when setting the saving throw DC for a
          bard spell you cast and when making an attack roll with one.
        </p>
        <p>
          Spell save DC = 8 + your proficiency bonus + your Charisma modifier
        </p>
        <p>
          Spell attack modifier = your proficiency bonus + your Charisma
          modifier
        </p>
        <h5>Ritual Casting</h5>
        <p>
          You can cast any bard spell you know as a ritual if that spell has the
          ritual tag.
        </p>
        <h5>Spellcasting Focus</h5>
        <p>
          You can use a musical instrument as a spellcasting focus for your bard
          spells.
        </p>
      </div>
    );
  }
  if (state.chosenClass === "Fighter") {
    return (
      <div>
        <h4>Fighting Style</h4>
        <p>
          You adopt a particular style of fighting as your specialty. Choose one
          of the following options. You can't take the same Fighting Style
          option more than once, even if you get to choose again.
        </p>
        <select
          className="choseSkill"
          onChange={(e) =>
            setState({ ...state, selectedSkillOption: e.target.value })
          }
        >
          {skillOptions.map((x, y) => (
            <option key={y}>{x}</option>
          ))}
        </select>
        {state.selectedSkill1Option1 === "Archery" && (
          <p>{state.skillOptionsText[0]}</p>
        )}
        {state.selectedSkill1Option1 === "Blind Fighting" && (
          <p>{state.skillOptionsText[1]}</p>
        )}
        {state.selectedSkill1Option1 === "Defense" && (
          <p>{state.skillOptionsText[2]}</p>
        )}
        {state.selectedSkill1Option1 === "Dueling" && (
          <p>{state.skillOptionsText[3]}</p>
        )}
        {state.selectedSkill1Option1 === "Great Weapon Fighting" && (
          <p>{state.skillOptionsText[4]}</p>
        )}
        {state.selectedSkill1Option1 === "Interception" && (
          <p>{state.skillOptionsText[5]}</p>
        )}
        {state.selectedSkill1Option1 === "Protection" && (
          <p>{state.skillOptionsText[6]}</p>
        )}
        {state.selectedSkill1Option1 === "Superior Technique" && (
          <p>{state.skillOptionsText[7]}</p>
        )}
        {state.selectedSkill1Option1 === "Thrown Weapon Fighting" && (
          <p>{state.skillOptionsText[8]}</p>
        )}
        {state.selectedSkill1Option1 === "Two-Weapon Fighting" && (
          <p>{state.skillOptionsText[9]}</p>
        )}
        {state.selectedSkill1Option1 === "Unarmed Fighting" && (
          <p>{state.skillOptionsText[10]}</p>
        )}
      </div>
    );
  }
  if (state.chosenClass === "Monk") {
    return (
      <div>
        <div>
          <h4>Martial Arts</h4>
          <p>
            Your practice of martial arts gives you mastery of combat styles
            that use unarmed strikes and monk weapons, which are shortswords and
            any simple melee weapons that don't have the two-handed or heavy
            property.
          </p>

          <p>
            You gain the following benefits while you are unarmed or wielding
            only monk weapons and you aren't wearing armor or wielding a shield:
          </p>
          <ul>
            <li>
              You can use Dexterity instead of Strength for the attack and
              damage rolls of your unarmed strikes and monk weapons.
            </li>
            <li>
              You can roll a d4 in place of the normal damage of your unarmed
              strike or monk weapon. This die changes as you gain monk levels,
              as shown in the Martial Arts column of the Monk table.
            </li>
            <li>
              When you use the Attack action with an unarmed strike or a monk
              weapon on your turn, you can make one unarmed strike as a bonus
              action. For example, if you take the Attack action and attack with
              a quarterstaff, you can also make an unarmed strike as a bonus
              action, assuming you haven't already taken a bonus action this
              turn.
            </li>
          </ul>
          <p>
            Certain monasteries use specialized forms of the monk weapons. For
            example, you might use a club that is two lengths of wood connected
            by a short chain (called a nunchaku) or a sickle with a shorter,
            straighter blade (called a kama).
          </p>
          <h4>Unarmored Defense</h4>
          <p>
            Beginning at 1st level, while you are wearing no armor and not
            wielding a shield, your AC equals 10 + your Dexterity modifier +
            your Wisdom modifier.
          </p>
        </div>
      </div>
    );
  }
  if (state.chosenClass === "Rogue") {
    return (
      <div>
        <div>
          <h4>Expertise</h4>
          <p>
            At 1st level, choose two of your skill proficiencies, or one of your
            skill proficiencies and your proficiency with thieves' tools. Your
            proficiency bonus is doubled for any ability check you make that
            uses either of the chosen proficiencies.
          </p>
          <p>
            At 6th level, you can choose two more of your proficiencies (in
            skills or with thieves' tools) to gain this benefit.
          </p>

          <h4>Sneak Attack</h4>
          <p>
            Beginning at 1st level, you know how to strike subtly and exploit a
            foe's distraction. Once per turn, you can deal an extra 1d6 damage
            to one creature you hit with an attack if you have advantage on the
            attack roll. The attack must use a finesse or a ranged weapon.
          </p>
          <p>
            You don't need advantage on the attack roll if another enemy of the
            target is within 5 feet of it, that enemy isn't incapacitated, and
            you don't have disadvantage on the attack roll.
          </p>
          <p>
            The amount of the extra damage increases as you gain levels in this
            class, as shown in the Sneak Attack column of the Rogue table.
          </p>
        </div>
      </div>
    );
  }
};
export default ClassSkills;
