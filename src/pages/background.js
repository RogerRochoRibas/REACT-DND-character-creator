import BackgroundProvider from "../components/background/backgroundProvider";
import BackgroundSelector from "../components/background/backgroundSelector";
import BackgroundShowcase from "../components/background/backgroundShowcase";
import ChangePage from "../components/changePage";

const Background = () => {
  return (
    <div>
      <BackgroundProvider>
        <ChangePage />
        <BackgroundSelector />
        <BackgroundShowcase />
      </BackgroundProvider>
    </div>
  );
};

export default Background;
