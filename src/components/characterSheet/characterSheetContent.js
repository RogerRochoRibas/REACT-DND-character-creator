import { useContext } from "react";
import { AppContext } from "../../appProvider";
import { ArmorClass, Initiative, Speed } from "./combatStats";
import SkillChecks from "./skillChecks";

const CharacterSheetContent = () => {
  const [state, setState] = useContext(AppContext);
  return (
    <form className="charsheet">
      <header>
        <section className="charname">
          <label htmlFor="charname">Character Name</label>
          <input
            className="userData"
            name="charname"
            placeholder={state.name}
            disabled
          />
        </section>
        <section className="misc">
          <ul>
            <li>
              <label htmlFor="classlevel">Class and Level</label>
              <input
                className="userData"
                name="classlevel"
                placeholder={state.chosenClass + " 1"}
                disabled
              />
            </li>
            <li>
              <label htmlFor="background">Background</label>
              <input
                className="userData"
                name="background"
                placeholder={state.background}
                disabled
              />
            </li>
            <li>
              <label htmlFor="playername">Player Name</label>
              <input
                className="userData"
                name="playername"
                placeholder="Player"
              />
            </li>
            <li>
              <label htmlFor="race">Race</label>
              <input
                className="userData"
                name="race"
                placeholder={state.race}
                disabled
              />
            </li>
            <li>
              <label htmlFor="alignment">Alignment</label>
              <input
                className="userData"
                name="alignment"
                placeholder="Lawful Good"
              />
            </li>
            <li>
              <label htmlFor="experiencepoints">Experience Points</label>
              <input
                className="userData"
                name="experiencepoints"
                placeholder="0"
              />
            </li>
          </ul>
        </section>
      </header>
      <main>
        <section>
          <section className="attributes">
            <div className="scores">
              <ul>
                <li>
                  <div className="score">
                    <label htmlFor="Strength">Strength</label>
                    <input
                      className="userData"
                      name="Strength"
                      placeholder={state.STR}
                      disabled
                    />
                  </div>
                  <div className="modifier">
                    <input
                      className="userData"
                      name="Strengthmod"
                      placeholder={state.STRmodifier}
                      disabled
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Dexterity">Dexterity</label>
                    <input
                      className="userData"
                      name="Dexterity"
                      placeholder={state.DEX}
                      disabled
                    />
                  </div>
                  <div className="modifier">
                    <input
                      className="userData"
                      name="Dexteritymod"
                      placeholder={state.DEXmodifier}
                      disabled
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Constitution">Constitution</label>
                    <input
                      className="userData"
                      name="Constitution"
                      placeholder={state.CON}
                      disabled
                    />
                  </div>
                  <div className="modifier">
                    <input
                      className="userData"
                      name="Constitutionmod"
                      placeholder={state.CONmodifier}
                      disabled
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Intelligence">Intelligence</label>
                    <input
                      className="userData"
                      name="Intelligence"
                      placeholder={state.INT}
                      disabled
                    />
                  </div>
                  <div className="modifier">
                    <input
                      className="userData"
                      name="Intelligencemod"
                      placeholder={state.INTmodifier}
                      disabled
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Wisdom">Wisdom</label>
                    <input
                      className="userData"
                      name="Wisdom"
                      placeholder={state.WIS}
                      disabled
                    />
                  </div>
                  <div className="modifier">
                    <input
                      className="userData"
                      name="Wisdommod"
                      placeholder={state.WISmodifier}
                      disabled
                    />
                  </div>
                </li>
                <li>
                  <div className="score">
                    <label htmlFor="Charisma">Charisma</label>
                    <input
                      className="userData"
                      name="Charisma"
                      placeholder={state.CHA}
                      disabled
                    />
                  </div>
                  <div className="modifier">
                    <input
                      className="userData"
                      name="Charismamod"
                      placeholder={state.CHAmodifier}
                      disabled
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="attr-applications">
              <div className="inspiration box">
                <div className="label-container">
                  <label htmlFor="inspiration">Inspiration</label>
                </div>
                <p className="userData" name="inspiration" type="checkbox"></p>
              </div>
              <div className="proficiencybonus box">
                <div className="label-container">
                  <label htmlFor="proficiencybonus">Proficiency Bonus</label>
                </div>
                <p className="userData" name="proficiencybonus">
                  +2
                </p>
              </div>
              <div className="saves list-section box">
                <ul>
                  <li>
                    <label htmlFor="Strength-save">Strength</label>
                    <input
                      className="userData"
                      name="Strength-save"
                      placeholder={state.STRsave}
                      type="text"
                      disabled
                    />
                    <input
                      className="userData"
                      name="Strength-save-prof"
                      type="checkbox"
                    />
                  </li>
                  <li>
                    <label htmlFor="Dexterity-save">Dexterity</label>
                    <input
                      className="userData"
                      name="Dexterity-save"
                      placeholder={state.DEXsave}
                      type="text"
                      disabled
                    />
                    <input
                      className="userData"
                      name="Dexterity-save-prof"
                      type="checkbox"
                    />
                  </li>
                  <li>
                    <label htmlFor="Constitution-save">Constitution</label>
                    <input
                      name="Constitution-save"
                      placeholder={state.CONsave}
                      type="text"
                      disabled
                    />
                    <input
                      className="userData"
                      name="Constitution-save-prof"
                      type="checkbox"
                    />
                  </li>
                  <li>
                    <label htmlFor="Intelligence-save">Intelligence</label>
                    <input
                      name="Intelligence-save"
                      placeholder={state.INTsave}
                      type="text"
                      disabled
                    />
                    <input
                      className="userData"
                      name="Intelligence-save-prof"
                      type="checkbox"
                    />
                  </li>
                  <li>
                    <label htmlFor="Wisdom-save">Wisdom</label>
                    <input
                      className="userData"
                      name="Wisdom-save"
                      placeholder={state.WISsave}
                      type="text"
                      disabled
                    />
                    <input
                      className="userData"
                      name="Wisdom-save-prof"
                      type="checkbox"
                    />
                  </li>
                  <li>
                    <label htmlFor="Charisma-save">Charisma</label>
                    <input
                      className="userData"
                      name="Charisma-save"
                      placeholder={state.CHAsave}
                      type="text"
                      disabled
                    />
                    <input
                      className="userData"
                      name="Charisma-save-prof"
                      type="checkbox"
                    />
                  </li>
                </ul>
                <div className="label">Saving Throws</div>
              </div>
              <div className="skills list-section box">
                <ul>
                  <SkillChecks />
                </ul>
                <div className="label">Skills</div>
              </div>
            </div>
          </section>
          <div className="passive-perception box">
            <div className="label-container">
              <label htmlFor="passiveperception">
                Passive Wisdom (Perception)
              </label>
            </div>
            <input
              className="userData"
              name="passiveperception"
              placeholder="10"
            />
          </div>
          <div className="otherprofs box textblock">
            <label htmlFor="otherprofs">
              Other Proficiencies and Languages
            </label>
            <textarea name="otherprofs"></textarea>
          </div>
        </section>
        <section>
          <section className="combat">
            <ArmorClass />
            <Initiative />
            <Speed />
            <div className="hp">
              <div className="regular">
                <div className="max">
                  <label htmlFor="maxhp">Hit Point Maximum</label>
                  <input
                    className="userData"
                    name="maxhp"
                    placeholder={state.hitPoints}
                    type="text"
                    disabled
                  />
                </div>
                <div className="current">
                  <label htmlFor="currenthp">Current Hit Points</label>
                  <input
                    className="userData"
                    name="currenthp"
                    type="text"
                    placeholder={state.hitPoints}
                    disabled
                  />
                </div>
              </div>
              <div className="temporary">
                <label htmlFor="temphp">Temporary Hit Points</label>
                <input className="userData" name="temphp" type="text" />
              </div>
            </div>
            <div className="hitdice">
              <div>
                <div className="total">
                  <label htmlFor="totalhd">Total</label>
                  <input
                    className="userData"
                    name="totalhd"
                    placeholder={state.hitDice}
                    type="text"
                  />
                </div>
                <div className="remaining">
                  <label htmlFor="remaininghd">Hit Dice</label>
                  <input
                    className="userData"
                    name="remaininghd"
                    type="text"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
            <div className="deathsaves">
              <div>
                <div className="label">
                  <label>Death Saves</label>
                </div>
                <div className="marks">
                  <div className="deathsuccesses">
                    <label>Successes</label>
                    <div className="bubbles">
                      <input
                        className="userData"
                        name="deathsuccess1"
                        type="checkbox"
                      />
                      <input
                        className="userData"
                        name="deathsuccess2"
                        type="checkbox"
                      />
                      <input
                        className="userData"
                        name="deathsuccess3"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <div className="deathfails">
                    <label>Failures</label>
                    <div className="bubbles">
                      <input
                        className="userData"
                        name="deathfail1"
                        type="checkbox"
                      />
                      <input
                        className="userData"
                        name="deathfail2"
                        type="checkbox"
                      />
                      <input
                        className="userData"
                        name="deathfail3"
                        type="checkbox"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="attacksandspellcasting">
            <div>
              <label>Attacks And Spellcasting</label>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Atk Bonus</th>
                    <th>Damage/Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input className="userData" name="atkname1" type="text" />
                    </td>
                    <td>
                      <input
                        className="userData"
                        name="atkbonus1"
                        type="text"
                      />
                    </td>
                    <td>
                      <input
                        className="userData"
                        name="atkdamage1"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="userData" name="atkname2" type="text" />
                    </td>
                    <td>
                      <input
                        className="userData"
                        name="atkbonus2"
                        type="text"
                      />
                    </td>
                    <td>
                      <input
                        className="userData"
                        name="atkdamage2"
                        type="text"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input className="userData" name="atkname3" type="text" />
                    </td>
                    <td>
                      <input
                        className="userData"
                        name="atkbonus3"
                        type="text"
                      />
                    </td>
                    <td>
                      <input
                        className="userData"
                        name="atkdamage3"
                        type="text"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <textarea></textarea>
            </div>
          </section>
          <section className="equipment">
            <div>
              <label>Equipment</label>
              <div className="money">
                <ul>
                  <li>
                    <label htmlFor="cp">cp</label>
                    <input className="userData" name="cp" />
                  </li>
                  <li>
                    <label htmlFor="sp">cp</label>
                    <input className="userData" name="cp" />
                  </li>
                  <li>
                    <label htmlFor="ep">cp</label>
                    <input className="userData" name="cp" />
                  </li>
                  <li>
                    <label htmlFor="gp">cp</label>
                    <input className="userData" name="cp" />
                  </li>
                  <li>
                    <label htmlFor="pp">cp</label>
                    <input className="userData" name="cp" />
                  </li>
                </ul>
              </div>
              <div className="chosenGear">
                <p>{state.choice0}</p>
                <p>{state.choice1}</p>
                <p>{state.choice2}</p>
                <p>{state.choice3}</p>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section className="flavor">
            <div className="personality">
              <label htmlFor="personality">Personality</label>
              <textarea name="personality"></textarea>
            </div>
            <div className="ideals">
              <label htmlFor="ideals">Ideals</label>
              <textarea name="ideals"></textarea>
            </div>
            <div className="bonds">
              <label htmlFor="bonds">Bonds</label>
              <textarea name="bonds"></textarea>
            </div>
            <div className="flaws">
              <label htmlFor="flaws">Flaws</label>
              <textarea name="flaws"></textarea>
            </div>
          </section>
          <section className="features">
            <div>
              <label htmlFor="features">Features & Traits</label>
              <textarea name="features"></textarea>
            </div>
          </section>
        </section>
      </main>
    </form>
  );
};

export default CharacterSheetContent;
