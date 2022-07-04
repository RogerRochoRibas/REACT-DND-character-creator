import { useContext } from "react";
import { AppContext } from "../../appProvider";

const ClassSkills = () => {
  const [state, setState] = useContext(AppContext);
  let skillOptions = state.skillOtions;
  console.log(skillOptions);
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
        {state.selectedSkillOption === "Archery" && (
          <p>{state.skillOptionsText[0]}</p>
        )}
        {state.selectedSkillOption === "Blind Fighting" && (
          <p>{state.skillOptionsText[1]}</p>
        )}
        {state.selectedSkillOption === "Defense" && (
          <p>{state.skillOptionsText[2]}</p>
        )}
        {state.selectedSkillOption === "Dueling" && (
          <p>{state.skillOptionsText[3]}</p>
        )}
        {state.selectedSkillOption === "Great Weapon Fighting" && (
          <p>{state.skillOptionsText[4]}</p>
        )}
        {state.selectedSkillOption === "Interception" && (
          <p>{state.skillOptionsText[5]}</p>
        )}
        {state.selectedSkillOption === "Protection" && (
          <p>{state.skillOptionsText[6]}</p>
        )}
        {state.selectedSkillOption === "Superior Technique" && (
          <p>{state.skillOptionsText[7]}</p>
        )}
        {state.selectedSkillOption === "Thrown Weapon Fighting" && (
          <p>{state.skillOptionsText[8]}</p>
        )}
        {state.selectedSkillOption === "Two-Weapon Fighting" && (
          <p>{state.skillOptionsText[9]}</p>
        )}
        {state.selectedSkillOption === "Unarmed Fighting" && (
          <p>{state.skillOptionsText[10]}</p>
        )}
      </div>
    );
  }
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
};
export default ClassSkills;
