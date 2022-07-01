import { useContext } from "react";
import { AppContext } from "../../appProvider";

const SubclassShowcase = () => {
  const [state, setState] = useContext(AppContext);
  if (state.chosenClass === "Sorcerer") {
    var subclasses = [
      {
        title: "Aberrant Mind",
        description:
          "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. ",
      },
    ];
  } else { var subclasses = []}
  let subclassesMounted = subclasses.map((element, index) => {
    return (
      <div key={index} className="subclassSection">
        <h4>{element.title}</h4>
        <p>{element.description}</p>
      </div>
    );
  });
  return subclassesMounted;
};

export default SubclassShowcase;