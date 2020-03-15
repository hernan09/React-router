import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../logoo.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <ul className="nav justify-content-start ml-auto">
            <Link className="navbar-brand" to="/home">
              Home
            </Link>
            <Link className="navbar-brand " to="/home/news">
              About
            </Link>
            <Link className="navbar-brand " to="/home/galery">
              Galery
            </Link>
            <Link className="navbar-brand " to="/home/galery/rickandmorty">
              Rick Galery
            </Link>
          </ul>
        </nav>
        <div id="subheader"></div>
      </div>
    );
  }
}

export default Nav;
