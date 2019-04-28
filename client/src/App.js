import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import shoes from "./pages/shoes";
import Trade from "./pages/Trade";
import Donate from "./pages/Donate";
import Callback from "./pages/Callback";
import Nav from "./components/Nav";
import SecuredRoute from "./components/SecuredRoute"



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={shoes} />
          <Route exact path="/shoes" component={shoes} />
          <Route exact path="/Trade/:id" component={Trade} />
<<<<<<< HEAD
          <Route exact path="/donate" component={Donate} />
=======
          <SecuredRoute exact path="/donate" component={Donate} />
          <Route exact path='/callback' component={Callback}/>
>>>>>>> origin/master
        </Switch>
      </div>
    </Router>
  );
}
export default App;