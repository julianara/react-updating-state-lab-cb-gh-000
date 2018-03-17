import React from 'react';

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    
    this.state = {
      timesClicked: 0,
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick =()=> {
    this.setState({
      timesClicked: ++this.state.timeClicked,
    });
  }
  
  render() {
    return (
      <button onClick={this.handleClick}></button>
      );
  }
}