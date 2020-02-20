import React from 'react';
import Nav from './Componentes/Nav/Nav'
import Footer from './Componentes/Footer/Footer'
class Layout extends React.Component {
     constructor(props){
         super(props)

         console.log(this.props.children)
     }
   render(){
      
       return(
           <React.Fragment>
               <Nav></Nav>
               {this.props.children}
               <Footer></Footer>
           </React.Fragment>
       )
   }

}

export default Layout;

