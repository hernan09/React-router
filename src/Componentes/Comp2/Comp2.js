import React from 'react';
import './comp.css'
import Image from '../../descarga.jpeg'

class Comp2 extends React.Component {
    constructor(props){
      super(props)

       this.state = {
         load:Boolean = true
       }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({
            load:false
          })
        }, 2000);
    }

  render(){
       if(this.state.load== true){
         return(
          <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
         )
       }else{
        return(
          <div className="jumbotron">
            <blockquote className="text-center">
            <h1 className="display-4">ABOUT!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-block" href="#" role="button">Learn more</a>
            </blockquote>
           
          </div>
        )
       }
      
  }

}

export default Comp2;