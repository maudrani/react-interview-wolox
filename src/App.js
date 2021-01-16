import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalStorage } from "./Components/dB/useLocalStorage";
import loadable from "@loadable/component";

const Landing = loadable(() => import("./Components/Landing"));
const Login = loadable(() => import("./Components/Login"));
const TechList = loadable(() => import("./Components/TechList"));
const RouteError = loadable(() => import("./Components/Modules/routeError"));

function App() {
  const [userData, setUserData] = useLocalStorage("user", "");

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing userData={userData} setUserData={setUserData} />
          </Route>
          {!userData && (
            <Route path="/login">
              <Login setUserData={setUserData} />
            </Route>
          )}
          {userData && (
            <Route path="/techlist">
              {" "}
              <TechList userData={userData} setUserData={setUserData} />{" "}
            </Route>
          )}
          <Route component={RouteError} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
