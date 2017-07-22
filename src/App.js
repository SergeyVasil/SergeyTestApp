import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SergeyButton from './SergeyButton'
import SergeySelect from './SergeySelect'

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.state = { textOut: false }
  }

  displayImportantInformation () {
    return this.state.textOut ? <span>First state</span> : <span>Second state</span>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-select">
          <SergeySelect />
        </div>
        <div className="App-intro">
          <SergeyButton parent={this}/><br/>
          { this.displayImportantInformation() }
        </div>
      </div>
    )
  }
}

export default App
