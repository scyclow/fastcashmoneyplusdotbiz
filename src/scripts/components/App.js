import React from 'react';
import { connect } from 'react-redux';

import { addTarget, removeTarget, mouseMovement, pageScroll } from '../actions/mouseMovement';
import { applyToHex } from '../utilities/colors';
import { onMouseMove, onScroll } from '../utilities/dom-utils';

import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    onMouseMove(
      (x, y) => dispatch(mouseMovement({ x, y }))
    );

    onScroll(
      scrollY => dispatch(pageScroll(scrollY))
    );
  }

  render() {
    const {
      colors,
      callToActionId,
      dispatch,
      mouseDistance
    } = this.props;

    const mouseTarget = {
      mount: (coords) => dispatch(addTarget(callToActionId, coords)),
      unmount: (coords) => dispatch(removeTarget(callToActionId, coords))
    };

    const { primary, inverse, } = colors;
    const style = {
      color: inverse,
      backgroundColor: primary
    };

    return (
      <div style={style}>
        <Nav colors={colors} />
        <LandingPage
          colors={colors}
          mouseTarget={mouseTarget}
          mouseDistance={mouseDistance}
        />
        <Footer colors={colors} year={2013}/>
      </div>
    );
  }
}

const callToActionId = Symbol('call to action');

const colorState = (primary) => ({
  primary,
  inverse: applyToHex(primary, { h: 180 }),
  special: applyToHex(primary, { h: 180 })
});

const getPrimaryColors = (state) => {
  const scrollY = state.mouseMovement.get('scrollY');
  const h = state.mouseMovement.getIn(
    ['targets', callToActionId, 'distance'], 0
  );
  const s = scrollY;
  let baseColor = '#FF0000';
  return applyToHex(baseColor, { h, s }, 3);
};

function selectColors(state) {
  let primary = getPrimaryColors(state);
  return colorState(primary);
}

function select(state) {
  return {
    colors: selectColors(state),
    mouseDistance: state.mouseMovement.getIn(
      ['targets', callToActionId, 'distance'], 0
    ),
    callToActionId
  };
}

export default connect(select)(App);
