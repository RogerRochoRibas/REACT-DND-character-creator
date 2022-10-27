import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./pages/stats";
import Class from "./pages/class&name";
import Race from "./pages/race";
import Background from "./pages/background";
import CharacterSheet from "./pages/characterSheet";
import AppProvider from "./appProvider";

const App = () => (
  <AppProvider>
    <Router className="App">
      <Routes>
        <Route path="/REACT-DND-character-creator" element={<Class />}></Route>
        <Route path="/REACT-DND-character-creator/stats" element={<Stats />}></Route>
        <Route path="/REACT-DND-character-creator/race" element={<Race />}></Route>
        <Route path="/REACT-DND-character-creator/background" element={<Background />}></Route>
        <Route path="/REACT-DND-character-creator/charactersheet" element={<CharacterSheet />}></Route>
      </Routes>
    </Router>
  </AppProvider>
);

export default App;
