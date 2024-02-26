import {Component} from 'react'
import './App.css'

// Replace your code here

class App extends Component {
  state = {wordsList: []}

  render() {
    return (
      <div className="page">
        <div className="card-1">
          <div className="heading-card">
            <h1 className="heading1">
              Count the characters like a <br /> Boss...
            </h1>
          </div>
          <div className="img-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="img"
            />
          </div>
        </div>
        <div className="card-2">k</div>
      </div>
    )
  }
}

export default App
