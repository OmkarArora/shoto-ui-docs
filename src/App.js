import { useState } from "react";
import {
  Header,
  Sidenav,
  GettingStarted,
  Avatars,
  Alerts,
  Badges,
  Cards,
  Tags,
  Ratings,
  Snackbars,
  InputDoc,
  ButtonDoc,
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { Snackbar, Alert } from "shoto-ui";
import "./App.css";

function App() {
  const [snackbarText, setSnackbarText] = useState("");
  const [snackbarStyle, setSnackbarStyle] = useState("info");
  const [snackbarStatus, setSnackbarStatus] = useState(false);

  function showSnackbar(text, style) {
    setSnackbarText(text);
    setSnackbarStyle(style);
    setSnackbarStatus(true);
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div className="container-header">
          <Header />
        </div>
        <Sidenav />
        <div className="container-main">
          <Switch>
            <Route path="/gettingstarted">
              <GettingStarted showSnackbar={showSnackbar} />
            </Route>
            <Route path="/avatars">
              <Avatars showSnackbar={showSnackbar} />
            </Route>
            <Route path="/alerts">
              <Alerts showSnackbar={showSnackbar} />
            </Route>
            <Route path="/badges">
              <Badges showSnackbar={showSnackbar} />
            </Route>
            <Route path="/button">
              <ButtonDoc showSnackbar={showSnackbar} />
            </Route>
            <Route path="/input">
              <InputDoc showSnackbar={showSnackbar} />
            </Route>
            <Route path="/cards">
              <Cards showSnackbar={showSnackbar} />
            </Route>
            <Route path="/tags">
              <Tags showSnackbar={showSnackbar} />
            </Route>
            <Route path="/ratings">
              <Ratings showSnackbar={showSnackbar} />
            </Route>
            <Route path="/snackbars">
              <Snackbars showSnackbar={showSnackbar} />
            </Route>
            <Route path="/">
              <GettingStarted showSnackbar={showSnackbar} />
            </Route>
          </Switch>
        </div>
        <Snackbar
          onClose={() => setSnackbarStatus(false)}
          open={snackbarStatus}
          autoHideDuration={2000}
        >
          <Alert
            severity={snackbarStyle}
            onClose={() => setSnackbarStatus(false)}
          >
            {snackbarText}
          </Alert>
        </Snackbar>
      </div>
    </Router>
  );
}

export default App;
