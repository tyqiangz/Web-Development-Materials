import React from "react";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Drawer from "./Components/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/contact" render={props => <Contact {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;