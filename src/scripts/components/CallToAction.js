import mouseHandler from '../handlers/mouseHandler';
import { modifyHexHue } from '../helpers/colors';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xDiff: 0,
      yDiff: 0,
      targetDist: 0
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
    this.elem = React.findDOMNode(this);

    mouseHandler.updateTarget(this.elem);
    mouseHandler.register(this.registrationKey, (mouseCoords) => {
      let { xDiff, yDiff, targetDist } = mouseCoords;

      this.setState({ xDiff, yDiff, targetDist });
    });
  }

  componentWillUnmount() {
    mouseHandler.unregister(this.registrationKey);
    mouseHandler.updateTarget(this.elem, true);
  }

  updateColors() {
    this.styles.backgroundColor = modifyHexHue(
      this.primaryColor,
      this.state.targetDist
    );

    this.styles.color = modifyHexHue(
      this.primaryColor,
      this.state.targetDist + 180
    );
  }

  render() {
    this.updateColors();
    return (
      <button style={this.styles}>
        {this.state.targetDist}
      </button>
    );
  }
}

export default CallToAction;
