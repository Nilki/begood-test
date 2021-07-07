import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CheckPlate from "./components/CheckPlate";
import PlateType from "./components/PlateType";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import Delete from "./components/Delete";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Check-Plate">
          <CheckPlate />
        </Route>
        <Route path="/Plate-type">
          <PlateType />
        </Route>
        <Route path="/Create">
          <Create />
        </Route>
        <Route path="/Read">
          <Read />
        </Route>
        <Route path="/Update">
          <Update />
        </Route>
        <Route path="/Delete">
          <Delete />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
