import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import shoes from "./pages/shoes";
import Trade from "./pages/Trade";
import Donate from "./pages/Donate";
import Callback from "./pages/Callback";
import Nav from "./components/Nav";
import SecuredRoute from "./components/SecuredRoute"
import auth0Client from './utils/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false });
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }

  render() {
    return (
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={shoes} />
            <Route exact path="/shoes" component={shoes} />
            <SecuredRoute exact path="/trade" component={Trade} checkingSession={this.state.checkingSession} />
            <SecuredRoute exact path="/donate" component={Donate} checkingSession={this.state.checkingSession} />
            <Route exact path='/callback' component={Callback} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
