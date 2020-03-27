import React from "react";
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';
import ReactPlayer from 'react-player'
import "./Nav.css";
import logo from "../../logoanimado2.gif";
import VideoPlanet from '../../nombre.mp4'
import Raptor from '../../velociraptor.png'


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }



  logout() {
    if (localStorage.getItem('loguedPass') === true || localStorage.getItem('loguedPass') === null)
      console.log('asdsdas')
    localStorage.clear()
    window.location.reload()
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <button className="btn btn-outline-light btn-sm" onClick={this.logout}>Logout</button>
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
        <div id="subheader">
          <div id="logoSubheader"><h2>El Rincon Del Raptor</h2></div>

          <Particles height={200} ></Particles>
        </div>
      </div>
    );
  }
}

export default Nav;
