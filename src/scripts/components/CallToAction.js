import mouseHandler from '../handlers/mouseHandler';
import { modifyHexHue } from '../helpers/colors';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xDiff: 0,
      yDiff: 0
    };

    this.primaryColor = '#ff0000';

    this.styles = {
      color: this.primaryColor,
      backgroundColor: this.primaryColors,
      width: 200
    };

    this.registrationKey = 'CallToAction';
  }

  componentDidMount() {
    mouseHandler.register(this.registrationKey, (mouseCoords) => {
      let xDiff = Math.abs(this.position.x - mouseCoords.x);
      let yDiff = Math.abs(this.position.y - mouseCoords.y);

      this.setState({xDiff, yDiff});
    });
  }

  componentWillUnmount() {
    mouseHandler.unregister(this.registrationKey);
  }

  updateColors() {
    this.styles.backgroundColor = modifyHexHue(this.primaryColor, this.state.xDiff);
    this.styles.color = modifyHexHue(this.primaryColor, this.state.yDiff);
  }

  get position() {
    let elem = React.findDOMNode(this);
    let x = elem.offsetLeft + (elem.offsetWidth / 2);
    let y = elem.offsetTop + (elem.offsetHeight / 2);
    return { x, y };
  }

  render() {
    this.updateColors();
    return (
      <button style={this.styles}>
        {this.state.xDiff} -- {this.state.yDiff}
      </button>
    );
  }
}

export default CallToAction;
