import BackgroundSelector from "../components/background/backgroundSelector";
import BackgroundShowcase from "../components/background/backgroundShowcase";
import ChangePage from "../components/changePage";

const Background = () => {
  return (
    <div>
        <ChangePage />
        <BackgroundSelector />
        <BackgroundShowcase />
    </div>
  );
};

export default Background;
