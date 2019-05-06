"use strict";
/* jshint node: true */

require("dotenv").config();
//console.log('this is loaded');

exports.auth0 = {
  clientID: process.env.REACT_APP_CLIENT_ID,
  audience: process.env.REACT_APP_AUDIENCE,
  domain: process.env.REACT_APP_DOMAIN,
  redirectUri: (process.env.NODE_ENV === "development") ? process.env.REACT_APP_REDIRECT_DEV : process.env.REACT_APP_REDIRECT_PROD
};
