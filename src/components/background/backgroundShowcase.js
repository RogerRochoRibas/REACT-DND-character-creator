import { useContext } from "react";
import { AppContext } from "../../appProvider";

const BackgroundShowcase = () => {
  const [state, setState] = useContext(AppContext);
  let chosenBackground = "";
  let backgroundProf = "";
  let backgroundProf2 = "";
  let languages = "";
  let bgEquipment = "";
  let bgFeatureName = "";
  let bgFeatureText = "";

  if (state.background === "Acolyte") {
    chosenBackground = "Acolyte";
    backgroundProf = "Insight";
    backgroundProf2 = "Religion";
    languages = "Two of your choice";
    bgEquipment =
      "A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a belt pouch containing 15 gp";
    bgFeatureName = "Shelter of the Faithful";
    bgFeatureText =
      "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.";
  }

  return (
    <div>
      <h2>{state.background}</h2>
      <p>
        Proficiencies: {backgroundProf} {backgroundProf2}
      </p>
      <p>Languages: {languages}</p>
      <p>Equipment: {bgEquipment}</p>
      <h3>{bgFeatureName}</h3>
      <p>{bgFeatureText}</p>
    </div>
  );
};

export default BackgroundShowcase;
