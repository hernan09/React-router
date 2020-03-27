import React from "react";
import "./comp.css";
import Image from "../../descarga.jpeg";
import Loading from "react-loading-components";

class Comp2 extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      load: (Boolean = true)
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({
        load: false
      });
    }

  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.load == true) {
      return (
        <div className="spinner">
          <Loading
            type="three_dots"
            width={80}
            height={80}
            fill="#0A0909"
          ></Loading>
        </div>
      );
    } else {
      return (
        <div className="jumbotron">
          <blockquote className="text-center">
            <h1 className="display-4">ABOUT!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-outline-light btn-block" href="#" role="button">
              Learn more
            </a>
          </blockquote>
        </div>
      );
    }
  }
}

export default Comp2;
