import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Provider from "./Provider";
import ShowState from "./Showstate";
import Login from "./Login";
import Stats from "./pages/stats";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Stats />
            <Provider>
              <Login />
              <ShowState />
            </Provider>
          </>
        }
      ></Route>
    </Routes>
  </Router>
);

export default App;
