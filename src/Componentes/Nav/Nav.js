import React from 'react';

class Nav extends React.Component {
  constructor(props){
      super(props)
  }

  render(){
      return(
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
           NavFijo
          </a>
        </nav>
      )
  }

}

export default Nav;