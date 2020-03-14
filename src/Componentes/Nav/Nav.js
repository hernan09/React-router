import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../engranajes.png'

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }


  reloadPage = () => {
    localStorage.removeItem('autenticacion')
    window.location.reload()
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#"><img id="loguito" src={logo}></img></a>

          <ul className="nav justify-content-start ml-auto">
            <Link className="navbar-brand" to="/home">Home</Link>
            <Link className="navbar-brand " to="/home/news">About</Link>
            <Link className="navbar-brand" to="/home">Section</Link>
            <Link className="navbar-brand " to="/home/news">Aside</Link>
            <Link className="navbar-brand " onClick={this.reloadPage} to="/login">Log Out</Link>
          </ul>
        </nav>
        <div id="subheader">

        </div>
      </div>

    )
  }

}

export default Nav;