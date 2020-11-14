// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {  
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  getTimesClicked = () => {
    return this.state.timesClicked
  }

  updateTimesClicked = () => {
    this.setState(previousState => { 
      return {
        timesClicked: previousState.timesClicked + 1 
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.updateTimesClicked}>{this.getTimesClicked()}</button>
      </div>
    )
  }
  
}