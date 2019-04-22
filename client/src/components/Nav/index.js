import React from "react";
import "./style.css"

const styles = {
  nav: {
    margin: 20,
    background: "#4aaaa"
  },
 
};
function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    
      <a className="navbar-brand" href="/">
INSTASHOE
      </a>
    </nav>
  );
}

export default Nav;
