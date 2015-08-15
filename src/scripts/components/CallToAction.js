import mouseHandler from '../handlers/mouseHandler';

class CallToAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
    this.hoverDist = 20;
    this.style = {
      width: 400,
      height: 400
    };
  }

  componentDidMount() {
    this.elem = React.findDOMNode(this);

    mouseHandler.target(this.elem, -this.hoverDist);
  }

  componentWillUnmount() {
    mouseHandler.target();
  }

  updateColors() {
    let p = this.props.colors.primary;
    let i = this.props.colors.inverse;

    let [ primary, inverse, shadow ] = this.state.hover ?
      [ p, i, this.hoverDist ] : [ i, p, 0 ];


    Object.assign(this.style, {
      backgroundColor: inverse,
      color: primary,
      borderColor: primary,
      boxShadow: `${shadow}px ${shadow}px ${shadow}px black`,
      position: 'relative',
      top: -shadow,
      left: -shadow,
      transition: 'box-shadow 0.5s, top 0.5s, left 0.5s'
    });
  }

  _onHover() {
    this.setState({ hover: true });
  }

  _onUnHover() {
    this.setState({ hover: false });
  }

  render() {
    this.updateColors();

    return (
      <button
        style={this.style}
        onMouseOver={this._onHover.bind(this)}
        onMouseOut={this._onUnHover.bind(this)}
      >
        CLICK HERE
      </button>
    );
  }
}

export default CallToAction;
