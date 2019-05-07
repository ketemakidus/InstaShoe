import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import auth0Client from '../../utils/Auth';

class Nav extends Component {
  render() {
    const signOut = () => {
      auth0Client.signOut();
      this.props.history.replace('/');
    };
    
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">INSTASHOE</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={this.props.location.pathname === '/trade' ? 'nav-item active' : 'nav-item'} >
                <Link className="nav-link" to="/trade">Trade</Link>
              </li>
              <li className={this.props.location.pathname === '/donate' ? 'nav-item active' : 'nav-item'} >
                <Link className="nav-link" to="/donate">Donate</Link>
              </li>
            </ul>
          </div>
        {
          !auth0Client.isAuthenticated() &&
          <button className="btn btn-primary" onClick={auth0Client.signIn}>Sign In</button>
        }
        {
          auth0Client.isAuthenticated() &&
          <div>
            <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
            <button className="btn btn-primary" onClick={() => {signOut()}}>Sign Out</button>
          </div>
        }
      </nav>
    );
  }
}

export default withRouter(Nav);