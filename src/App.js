// This component handles the App template used on every page.
import React from "react";
import { Route, Switch } from "react-router-dom";
//import Dashboard from "./views/Dashboard/Dashboard";
//import Admin from "./layouts/Admin";
import AppContainer from "./views/AppContainer";
import Dashboard from "./views/Dashboard/Dashboard";
import UserProfile from "./views/UserProfile/UserProfile";
import Icons from "./views/Icons/Icons";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <AppContainer>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/icons" component={Icons} />
          </AppContainer>
        </Switch>
      </div>
    );
  }
}

export default App;
