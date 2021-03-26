import { Header, Sidenav, GettingStarted, Avatars, Alerts } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-header">
          <Header />
        </div>
        <div className="container-sidenav">
          <Sidenav />
        </div>
        <div className="container-main">
        <Switch>
        <Route path="/gettingstarted">
          <GettingStarted/>
        </Route>
        <Route path="/avatars">
          <Avatars/>
        </Route>
        <Route path="/alerts">
          <Alerts/>
        </Route>
      </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
