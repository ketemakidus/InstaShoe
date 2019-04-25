import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import shoes from "./pages/shoes";
import Trade from "./pages/Trade";
import Donate from "./pages/Donate";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={shoes} />
          <Route exact path="/shoes" component={shoes} />
          <Route exact path="/Trade/:id" component={Trade} />
          <Route component="/donate" component={Donate} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;