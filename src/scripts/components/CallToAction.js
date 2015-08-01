class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    document.onmousemove = (e) => {
      let mousePosition = {
        x: e.clientX, y: e.clientY
      };

      let xDiff = Math.abs(this.position.x - mousePosition.x);
      let yDiff = Math.abs(this.position.y - mousePosition.y);
      this.setState({xDiff, yDiff});
    };

  }

  get position() {
    let elem = React.findDOMNode(this);
    let x = elem.offsetLeft + (elem.offsetWidth / 2);
    let y = elem.offsetTop + (elem.offsetHeight / 2);
    return { x, y };
  }

  render() {
    return (
      <button>{this.state.xDiff} -- {this.state.yDiff}</button>
    );
  }
}

export default CallToAction;
