import React, { Component } from "react";
import Loading from "react-loading-components";
import { Link } from "react-router-dom";
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



  fetchcontentNext(event) {
    console.log(event)
    this._isMounted = true;
    setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character?page=${this.state.next || 1}`).then(resp => resp.json()).then(data => {
        console.log(data)

        if (this._isMounted || (this.state.next < 25 && event === 'next')) {
          this.setState({
            objImgs: data.results,
            loading: false,
            next: this.state.next + 1
          })

        }
        else {
          this.setState({
            objImgs: data.results,
            loading: false,
            next: this.state.next
          })
        }

      }).catch(error => {
        console.log('acaba de pasar el error aca', error)
      })
    }, 2000)

    localStorage.setItem('pagina', this.state.next)

  }
  goToBoard = (item) => {
    this.props.history.push(`/home/galery/rickandmorty/${item.id}`, { item: item });
  }

  render() {

    const ImagenesRickAndMorty = this.state.objImgs.map((item, index) => {
      return (
        <div key={index} className="card">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{item.name}</p>
            <button className="btn btn-outline-primary btn-sm" onClick={() => this.goToBoard(item)}>View Details</button>
          </div>
        </div>
      )
    })
    return (
      <div className="rickContainer">
        <button style={{ margin: 10 }} onClick={(event) => this.fetchcontentNext('next')} className="btn btn-outline-light btn-sm">Next</button>
        {/* <button style={{ margin: 10 }} onClick={(event) => this.fetchcontentNext('back')} className="btn2 btn-outline-light btn-sm">Back</button> */}
        <div className="rick-container-hijo">
          <div className="aside">
            <h3>Hello is this aside</h3>
            <p> asdasda lorem i sim and toem esoasdasda asdasdasdasd iuoiyot hualsh aas  u8yqi hjkashdajklsh  klasjdalksja aklsalsk asdasdasd fdgdfgdg twrtasdagb
               adawasdasdasd hdgfdffg  asdasdasd dfgdf awasda dfgdf d gas aasd as we qweqweq asdasdasda
            </p>
            <button className="btn btn-success btn-sm">View More</button>
          </div>
          {!this.state.loading && ImagenesRickAndMorty}
          {this.state.loading && <div>
            <Loading className="spinner"
              type="three_dots"
              width={80}
              height={80}
              fill="#0A0909"></Loading>
          </div>}
        </div>
      </div>
    )
  }


}

export default RickGalery;