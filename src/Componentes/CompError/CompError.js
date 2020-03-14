import React from 'react';
import './compError.css'
import errorImagen from '../../error.png'


class CompError extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-error">
        <img className='imagenError' src={errorImagen}></img>
      </div>
    )
  }

}

export default CompError;