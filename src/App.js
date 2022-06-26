import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./pages/stats";
import Class from "./pages/class&name";
import Race from "./pages/race";

const App = () => (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Class />}></Route>
        <Route path="/stats" element={<Stats />}></Route>
        <Route path="/race" element={<Race />}></Route>
      </Routes>
    </Router>
);

export default App;
