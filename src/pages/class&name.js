import ClassProvider from "../components/class/classProvider";
import ClassSelector from "../components/class/classSelector";
import NameInput from "../components/class/nameInput";
import ClassShowcase from "../components/class/classShowcase";
import ChangePage from "../components/changePage";

const Class = () => {
  return (
    <div>
      <ClassProvider>
        <NameInput />
        <ClassSelector />
        <ClassShowcase />
        <ChangePage />
      </ClassProvider>
    </div>
  );
};

export default Class;
