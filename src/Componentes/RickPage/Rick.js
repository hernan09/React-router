import React, { Component } from "react";
import Loading from "react-loading-components";

import './Rick.css'

class RickGalery extends Component {
  _isMounted = false;
  constructor(props) {
    super(props)

    this.state = {
      loading: Boolean = true,
      objImgs: [],
      img: String,
      name: String,
      next: 1,
      back: String
    }
  }


  componentDidMount() {
    this.fetchcontentNext()

  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchcontentNext() {
    this._isMounted = true;
    fetch(`https://rickandmortyapi.com/api/character?page=${this.state.next || 1}`, { method: 'GET' }).then(resp => resp.json()).then(data => {
      console.log(data)

      if (this._isMounted || this.state.next < 25) {
        this.setState({
          objImgs: data.results,
          loading: false,
          next: this.state.next + 1
        })
      } else {
        this.setState({
          objImgs: data.results,
          loading: false,
          next: this.state.next
        })
      }

    }).catch(error => {
      console.log('acaba de pasar el error aca', error)
    })
  }

  render() {
    const ImagenesRickAndMorty = this.state.objImgs.map((item, index) => {
      return (
        <div key={index} className="card">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{item.name}</p>
          </div>
        </div>
      )
    })
    return (
      <div className="rickContainer">
        <button style={{ margin: 10 }} onClick={() => this.fetchcontentNext()} className="btn btn-success btn-sm">Next</button>
        <div className="rick-container-hijo">
          {!this.state.loading && ImagenesRickAndMorty}
        </div>


        {this.state.loading && <div>
          <Loading className="spinner"
            type="three_dots"
            width={80}
            height={80}
            fill="#0A0909"></Loading>
        </div>}
      </div>
    )
  }


}

export default RickGalery;