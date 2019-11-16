// This component handles the App template used on every page.
import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div>
        {/*<Header />*/}

        <Route exact path="/" component={Dashboard} />
      </div>
    );
  }
}

export default App;
