import React, { Component } from "react";
import imgcard1 from "../../walpgame1.jpg";
import imgcard2 from "../../imgcard2.jpg";
import imgcard3 from "../../walpgame3.jpg";
import "./galery.css";
import Loading from "react-loading-components";

class Galery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: (Boolean = true),
      walpgame1: "http://localhost:3000/static/media/walpgame1.9014911c.jpg"
    };
  }

  changeBackground = e => {
    console.log("asdasda", e.target.src);
    this.setState({
      walpgame1:
        e.target.src ||
        "http://localhost:3000/static/media/walpgame1.9014911c.jpg"
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        load: false
      });
    }, 2000);
  }

  render() {
    if (this.state.load == true) {
      return (
        <div className="spinner">
          <Loading
            type="three_dots"
            width={80}
            height={80}
            fill="#1F497D"
          ></Loading>
        </div>
      );
    } else {
      return (
        <div className="father-container">
          <img className="imgnPadre" src={this.state.walpgame1}></img>
          <div className="container-cards">
            <div onMouseEnter={e => this.changeBackground(e)} className="card1">
              <div className="card">
                <img src={imgcard1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Max effect Andromeda</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="card2">
              <div
                onMouseEnter={e => this.changeBackground(e)}
                className="card"
              >
                <img src={imgcard2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Frefire</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="card3">
              <div
                onMouseEnter={e => this.changeBackground(e)}
                className="card"
              >
                <img src={imgcard3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Shadow of the colosus</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-danger">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Galery;
