import "./Styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import Candidates from "./Components/Candidate/Candidates";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCandidate from "./Components/Candidate/AddCandidate";
import { EditCandidate } from "./Components/Candidate/EditCandidate";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Routes>
                <Route exact path="/" Component={Candidates} />
                <Route exact path="/addcandidate" Component={AddCandidate} />
                <Route
                  exact
                  path="/updatecandidate/:id"
                  Component={EditCandidate}
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
