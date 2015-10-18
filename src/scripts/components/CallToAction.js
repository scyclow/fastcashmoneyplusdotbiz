import React from 'react';

import mouseHandler from '../handlers/mouseHandler';
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

class CallToAction extends React.Component {
  componentWillMount() {
    this.hoverDist = 20;
    this.style = {
      width: 400,
      height: 400,
      borderRadius: 10
    };

    const texts = [
      'CLICK HERE',
      'GET STARTED NOW',
      'SAFE & SECURE',
      'QUICK APPROVAL',
      '100% ONLINE',
      'FUEL YOUR DREAMS TODAY',
      'NEED FAST CASH?',
      'NEED CASH FAST?'
    ];

    setInterval(
      () => this.setState({ text: sample(texts) }),
      2000
    );

    this.state = {
      hover: false,
      clicked: false,
      text: texts[0]
    };
  }

  componentDidMount() {
    this.elem = React.findDOMNode(this);

    mouseHandler.target(this.elem, -this.hoverDist);
  }

  componentWillUnmount() {
    mouseHandler.target();
  }

  onHover() {
    this.setState({ hover: true });
  }

  onUnHover() {
    this.setState({ hover: false, clicked: false });
  }

  onMouseDown() {
    this.setState({ clicked: true });
  }

  onMouseUp() {
    this.setState({ clicked: false });
  }

  onClick() {
    this.onMouseDown();
  }

  updateStyles() {
    let p = this.props.colors.primary;
    let i = this.props.colors.special;

    let [ primary, inverse, shadow ] = this.state.hover ?
      [ p, i, this.hoverDist ] : [ i, p, 0 ];

    let clickProps = this.state.clicked ? {
      transition: 'box-shadow 0.2s, top 0.2s, left 0.2s',
      boxShadow: `0px 0px 0px black`,
      top: 0,
      left: 0
    } : {
      transition: 'box-shadow 0.5s, top 0.5s, left 0.5s',
      boxShadow: `${shadow}px ${shadow}px ${shadow}px black`,
      top: -shadow,
      left: -shadow
    };

    Object.assign(this.style, {
      backgroundColor: inverse,
      color: primary,
      borderColor: primary,
      position: 'relative',
      fontSize: 80,
      width: '100%',
      marginTop: 20,
      marginBottom: 20
    }, clickProps);
  }

  render() {
    this.updateStyles();

    return (
      <button
        style={this.style}
        onMouseOver={() => this.onHover()}
        onMouseOut={() => this.onUnHover()}
        onMouseDown={() => this.onMouseDown()}
        onClick={() => this.onClick()}
        onMouseUp={() => this.onMouseUp()}
      >
        {this.state.text}
      </button>
    );
  }
}

export default CallToAction;
