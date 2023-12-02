import "./App.css";
import { Home } from "./componts/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  
import { Singup } from "./componts/loginsysytem/Singup";
import { Login } from "./componts/loginsysytem/Login";
import { CssVarsBasic } from "./componts/Test/Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test">
          <CssVarsBasic />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/singup">
          <Singup />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
