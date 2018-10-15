import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"
import "./app.css"

class App extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    vatRate: 25,
    incVat: 0,
    exVat: 0,
    totalVat: 0
  }
}

handleRadioChange = (e) => {
  const vat = parseInt(e.target.value)
  this.setState({
    vatRate: vat
  })
}

handleChangeInc = (e) => {
    const inc = parseInt(e.target.value)
    this.setState ({
      incVat: inc,
      exVat: incVatToExtVat(this.state.vatRate, inc),
      totalVat: inc - incVatToExtVat(this.state.vatRate, inc)
    }
  )
}

handleChangeEx = (e) => {
  const ex = parseInt(e.target.value)
    this.setState ({
      incVat: exVatToIncVat(this.state.vatRate, ex),
      exVat: ex,
      totalVat: exVatToIncVat(this.state.vatRate, ex) - ex
    }
  )
}

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Calculate VAT!</h1>
        </div>
        <form>
          <div className="radiobuttons">
            <div>
              <input
              id="option1"
              type="radio"
              value="25"
              checked={this.state.vatRate === 25}
              onChange={this.handleRadioChange} />
              <label htmlFor="option1">25%</label>
            </div>

            <div>
              <input
                id="option2"
                type="radio"
                value="12"
                checked={this.state.vatRate === 12}
                onChange={this.handleRadioChange} />
                <label htmlFor="option2">12%</label>
            </div>

            <div>
              <input
                id="option3"
                type="radio"
                value="6"
                checked={this.state.vatRate === 6}
                onChange={this.handleRadioChange} />
                <label htmlFor="option3">6%</label>
            </div>
          </div>

          <div className="input-fields">
            <label htmlFor="inkl">Inklusive moms (kr)</label>
              <input
                id="inkl"
                type="text"
                onChange={this.handleChangeInc}
                value={this.state.incVat.toFixed()} />

            <label htmlFor="exkl">Exklusive moms (kr)</label>
              <input
                id="exkl"
                type="text"
                onChange={this.handleChangeEx}
                value={this.state.exVat.toFixed()} />

            <label htmlFor="sum">Momssumma (kr)</label>
              <input
                id="sum"
                type="text"
                value={this.state.totalVat.toFixed()} />

          </div>

          </form>

      </div>
    )
  }

}

export default App
