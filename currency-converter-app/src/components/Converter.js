import React, { Component } from 'react'
import './Converter.css'

export default class Converter extends Component {
  constructor(props){
    super(props)

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }
    this.conversor = this.conversor.bind(this)
  }

  conversor() {
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=9c96fa3d06496725613d`
    fetch(url)
      .then(res => {
        return res.json()
    })
    .then(json => {
      let cotacao = json[de_para]
      let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
      this.setState({moedaB_valor})
    })
  }
  

  render() {
    return (
      <div className="converter">
        <h2>{this.props.moedaA} to {this.props.moedaB}</h2>
        <input type="text" onChange={(event)=> {this.setState({moedaA_valor: event.target.value})}} className="input-converter"></input>
        <input type="button" value="Converter" onClick={this.conversor} className="button-converter"></input>
        <h3>Converted value: <span>{this.state.moedaB_valor}</span></h3>
      </div>
    )
  }
}
