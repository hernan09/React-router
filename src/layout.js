import React from "react";
import Nav from "./Componentes/Nav/Nav";
import Footer from "./Componentes/Footer/Footer";
import GoogleLogin from 'react-google-login';

import "./layout.css";


class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      logued: false,
      email: ''
    }

  }



  render() {
    const responseGoogle = (response) => {
      console.log(response.profileObj.email);
      this.setState({
        email: response.profileObj.email
      })

      if (this.state.email === 'hernan09.gz@gmail.com') {
        this.setState({
          logued: true
        })
        localStorage.setItem('loguedPass', this.state.logued)
        let autoLink = document.createElement('a')
        autoLink.href = '/home/news'
        autoLink.click()

      }

    }
    if (localStorage.getItem('loguedPass') === false || localStorage.getItem('loguedPass') === null) {
      return (
        <div className="container-google">
          <div className="googleBtn">
            <h1><strong><span className="spanLetraG">G</span>mai<span className="spanLetraL">l</span> <span className="spanLetraL2">L</span>ogi<span className="spanLetraN">n</span></strong></h1>
            <hr></hr>
            <GoogleLogin className="buttonGogle"
              clientId="681263197699-nrrcm6bdv930gjvmheda29j8nts5r0u4.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              redirectUri="/home/galery"
            />
          </div>

        </div>

      )
    } else {
      return (
        <React.Fragment>
          <Nav></Nav>
          {this.props.children}
        </React.Fragment>
      );
    }

  }
}

export default Layout;
