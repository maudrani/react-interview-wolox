import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalStorage } from "./Components/dB/useLocalStorage";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import RouteError from "./Components/Modules/routeError";
import TechList from "./Components/TechList";

function App() {
  const [isLogged, setIsLogged] = useLocalStorage("user", '');

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          {!isLogged ? null : 
          <Route path="/techlist" component={TechList} />}
          <Route component={RouteError} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
