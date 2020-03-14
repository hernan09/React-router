import React from 'react';
import Nav from './Componentes/Nav/Nav'
import Footer from './Componentes/Footer/Footer'
import Login from './Componentes/Login/Login'
import './layout.css'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autenticado: false
        }

    }


    handleClick = (e) => {
        console.log(e)
        if (e.username === 'hernan' && e.password === '1234') {
            this.setState({
                autenticado: true
            })

            localStorage.setItem('autenticacion', this.state.autenticado)



        } else {
            this.setState({
                autenticado: false
            })
            console.log('no posee permisos para acceder ')
        }
    }
    render() {
        if (this.state.autenticado === false) {
            return (
                <React.Fragment>
                    <Login onFinish={this.handleClick}></Login>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Nav></Nav>
                    {this.props.children}
                    <Footer></Footer>
                </React.Fragment>
            )
        }


    }

}

export default Layout;

