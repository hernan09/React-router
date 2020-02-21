import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
      super(props)
  }

  render(){
      return(
        <nav className="navbar navbar-light bg-light">
          <ul class="nav justify-content-start">
          <Link className="navbar-brand" to="/home">Home</Link>
          <Link className="navbar-brand " to="/home/news">About</Link>
          </ul> 
        </nav>
      )
  }

}

export default Nav;