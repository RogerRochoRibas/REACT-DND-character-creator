import { useContext, useEffect } from "react";
import { ClassAppContext } from "./classProvider";

const SubclassShowcase = () => {
  const [state, setState] = useContext(ClassAppContext);
  if (state.chosenClass === "Fighter") {
    var subclasses = [
      {
        title: "Arcane Archer",
        description:
          "Arcane Archers get access to the Arcane Shots, powerful abilities that imbue their arrows with increased damage and varied effects to hinder the enemy.",
      },
      {
        title: "Battle Master",
        description:
          "Battle Masters can learn special techniques called Maneuvers that allow for a wide range of tactical options, from disarming your opponent to adding more precision or damage to your own attack.",
      },
      {
        title: "Cavalier",
        description:
          "Cavaliers are harded to knock off their mounts, they are also good protectors, making it harded for the enemy to hit your close allies.",
      },
      {
        title: "Champion",
        description:
          "Champions are simple, but effective and versatile. They get twice as many critical hits as other combatants, everyone likes critical hits right?",
      },
      {
        title: "Echo Knight",
        description:
          "The Echo Knight can manifest and echo of himself, allowing him to attack from the echo's position, teleport to it, or use it as cannon fodder.",
      },
      {
        title: "Eldritch Knight",
        description:
          "The most magical of Fighters gets access to a fair ammount of wizard magic. They use Intelligence for the spellcasting. They can also create a magical bond with their weapon and summon it.",
      },
      {
        title: "Psi Warrior",
        description:
          "Psionic powers allow this psychic fighters to protect their allies, bolster their attacks and move things with their mind. This abilities are improved by their Intellect. ",
      },
      {
        title: "Rune Knight",
        description:
          "Using the supernatural power of runes Rune Knights gain enhanced damage, durability or utility. They can also call on the Giant's Might to become temporally larger and stronger. ",
      },
      {
        title: "Samurai",
        description:
          "Samurai can call on Fighting Spirit several times a day to enhance their precission and defense for one turn. The perfect match for Action Surge.",
      },
    ];
  } else { var subclasses = []}
  let subclassesMounted = subclasses.map((element) => {
    return (
      <div className="subclassSection">
        <h4>{element.title}</h4>
        <p>{element.description}</p>
      </div>
    );
  });
  return subclassesMounted;
};

export default SubclassShowcase;