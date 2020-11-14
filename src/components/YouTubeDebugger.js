// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {  
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      },
    }
  }

  updateBitrate = () => {
    console.log("updateBitrate:", this.state.settings.video.resolution)
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  updateResolution = () => {
    console.log("updateResolution:", this.state.video)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.updateBitrate} className='bitrate'>Bitrate</button>
        <button onClick={this.updateResolution} className="resolution">Resolution</button>
      </div>
    )
  }
  
}