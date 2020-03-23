import React, { Component } from 'react'
import './Details.css'
import { element } from 'prop-types'


class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayResp: [],
      objDetail: {}
    }
  }

  componentDidMount() {
    fetch(`https://rickandmortyapi.com/api/character?page=${localStorage.getItem('pagina') || 1}`).then(data => data.json()).then(resp => {
      this.setState({
        arrayResp: resp.results
      })

      this.state.arrayResp.forEach(element => {
        console.log(element.id)
        if (element.id == this.props.match.params.id) {
          console.log(element)
          this.setState({
            objDetail: element
          })
        } else {
          console.log('no matchio un carajo')
        }
      })
    })

  }

  render() {
    console.log(this.props.match.params.id)
    return (
      <div className="containerCard">
        <div className="cardGrande">
          <div className="cardGrande-header">
            <img src={this.state.objDetail.image} alt="...." />
          </div>
          <div className="cardGrande-body">
            <h2 className="Title-card">{this.state.objDetail.name}</h2>
            <strong><p className="text-card">{this.state.objDetail.type || 'Undefined'}</p></strong>
            <strong>
              <p className="text-card2">{this.state.objDetail.species}</p>
            </strong>
            <strong>
              <p className="text-card2">{this.state.objDetail.status}</p>
            </strong>
          </div>

        </div>
      </div>


    )
  }
}

export default Details