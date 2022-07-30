import ClassSelector from "../components/class/classSelector";
import NameInput from "../components/class/nameInput";
import ClassShowcase from "../components/class/classShowcase";
import ChangePage from "../components/changePage";

const Class = () => {
  return (
    <div>
        <ChangePage />
        <NameInput />
        <div className="classList"><ClassSelector /></div>
        <ClassShowcase />
        <ChangePage />
    </div>
  );
};

export default Class;
