export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    
    this.state = {
      timesClicked: 0,
    };
  }
  
  handleClick =()=> {
    this.setState({
      timesClicked: ${this.state.timeClicked + 1},
    });
  }
  
  render() {
    return ();
  }
}