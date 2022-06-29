import CharacterSheetContent from "../components/characterSheet/characterSheetContent";
import CharacterSheetProvider from "../components/characterSheet/characterSheetProvider";
import ChangePage from "../components/changePage";

const CharacterSheet = () => {
  return (
    <div>
      <CharacterSheetProvider>
        <ChangePage />
        <CharacterSheetContent />
      </CharacterSheetProvider>
    </div>
  );
};

export default CharacterSheet;
