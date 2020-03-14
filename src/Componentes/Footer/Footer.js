import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div className="container-son-one">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/home/news">Library</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/home/news">Library</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>
        <div className="container-son-two">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/home/news">Library</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
        </div>

      </div>
    )
  }

}

export default Footer;