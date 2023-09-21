import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState => ({
      count: prevState.count + 10,
    }))
  }

  brake = () => {
    this.setState(prevState => ({
      count: prevState.count - 10,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="imageH1">
          <h1 className="h1">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>

        <h1 className="changeSpeed">Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="bCon">
          <button className="speed" onClick={this.accelerate} type="button">
            Accelerate
          </button>
          <button className="brakes" onClick={this.brake} type="button">
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
