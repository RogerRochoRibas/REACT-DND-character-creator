import ClassSelector from "../components/class/classSelector";
import NameInput from "../components/class/nameInput";
import ClassShowcase from "../components/class/classShowcase";
import ChangePage from "../components/changePage";

const Class = () => {
  return (
    <div>
        <ChangePage />
        <NameInput />
        <ClassSelector />
        <ClassShowcase />
    </div>
  );
};

export default Class;
