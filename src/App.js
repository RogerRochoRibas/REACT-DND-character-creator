import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./pages/stats";
import Class from "./pages/class&name";

const App = () => (
  <Router className="App">
    <Routes>
      <Route path="/" element={<Class />}></Route>
      <Route path="/stats" element={<Stats />}></Route>
    </Routes>
  </Router>
);

export default App;
