import React from 'react';
import ReactDOM from 'react';
import Radium from 'radium';

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

class CallToAction extends React.Component {
  componentWillMount() {
    this.hover = 20;

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
      text: texts[0]
    };
  }

  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this);
    const disp = -this.hover;

    let x, y;
    if (elem) {
      x = elem.offsetLeft + disp + (elem.offsetWidth / 2);
      y = elem.offsetTop + disp + (elem.offsetHeight / 2);
    } else {
      [x, y] = [0, 0];
    }

    this.props.mouseTarget.mount({ x, y });
  }

  componentWillUnmount() {
    this.props.mouseTarget.unmount();
  }

  stateStyles() {
    const { primary, inverse } = this.props.colors;
    const hover = this.hover;

    const style = {
      color: inverse,
      borderColor: inverse,
      backgroundColor: primary,
      marginTop: hover * 2,
      top: 0,
      left: 0,
      transition: 'box-shadow 0.5s, top 0.5s, left 0.5s',
      ':hover': {
        color: primary,
        borderColor: primary,
        backgroundColor: inverse,
        transition: 'box-shadow 0.5s, top 0.5s, left 0.5s',
        boxShadow: `${hover}px ${hover}px ${hover}px black`,
        top: -hover,
        left: -hover
      },
      ':active': {
        backgroundColor: '#ffffff',
        color: '#000000',
        borderColor: '#000000',
        transition: 'box-shadow 0.2s, top 0.2s, left 0.2s',
        boxShadow: `0px 0px 0px black`,
        top: 0,
        left: 0
      }
    };

    return style;
  }

  render() {
    const stateStyle = this.stateStyles();
    const staticStyle = {
      width: '100%',
      height: 400,
      borderRadius: 10,
      borderWidth: 15,
      position: 'relative',
      fontSize: 130,
      marginTop: 20,
      marginBottom: 20
    };

    return (
      <button style={[staticStyle, stateStyle]}>
        {this.state.text}
      </button>
    );
  }
}

export default Radium(CallToAction);
