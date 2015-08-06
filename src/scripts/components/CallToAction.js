import mouseHandler from '../handlers/mouseHandler';
import colorStore from '../stores/colorStore';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xDiff: 0,
      yDiff: 0,
      targetDistance: 0
    };

    this.styles = {
      width: 200
    };

    this.registrationKey = 'CallToAction';
  }

  setStateVar(k, v) {
    let newState = Object.assign(this.state, {[k]: v});
    this.setState(newState);
  }

  componentDidMount() {
    this.elem = React.findDOMNode(this);

    mouseHandler.updateTarget(this.elem);
    mouseHandler.register(this.registrationKey, (coords) => {
      let { xDiff, yDiff, targetDistance } = coords;

      this.setState({ xDiff, yDiff, targetDistance });
    });
  }

  componentWillUnmount() {
    mouseHandler.unregister(this.registrationKey);
    mouseHandler.updateTarget(this.elem, true);
  }

  updateStyles() {
    // TODO: add transition; huge shadow behind button on hover
    let colors = (
      this.state.hover ?
      [colorStore.colors.primary, colorStore.colors.inverse] :
      [colorStore.colors.inverse, colorStore.colors.primary]
    );

    let [primary, inverse] = colors;

    let newStyles = {
      backgroundColor: inverse,
      color: primary,
      borderColor: primary
    };

    Object.assign(this.styles, newStyles);
  }

  render() {
    this.updateStyles();
    return (
      <button
        style={this.styles}
        onMouseOver={this.setStateVar.bind(this, 'hover', true)}
        onMouseOut={this.setStateVar.bind(this, 'hover', false)}
      >
        {this.state.targetDistance}
      </button>
    );
  }
}

export default CallToAction;
