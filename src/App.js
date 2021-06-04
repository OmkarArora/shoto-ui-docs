import { Header, Sidenav, GettingStarted, Avatars, Alerts, Badges, Cards, Tags, Ratings, Snackbars, InputDoc, ButtonDoc } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className="App">
        <div className="container-header">
          <Header />
        </div>
        {/* <div className="container-sidenav"> */}
          <Sidenav />
        {/* </div> */}
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
        <Route path="/badges">
          <Badges/>
        </Route>
        <Route path="/button">
          <ButtonDoc/>
        </Route>
        <Route path="/input">
          <InputDoc/>
        </Route>
        <Route path="/cards">
          <Cards/>
        </Route>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/ratings">
          <Ratings/>
        </Route>
        <Route path="/snackbars">
          <Snackbars/>
        </Route>
        <Route path="/">
          <GettingStarted/>
        </Route>
      </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
