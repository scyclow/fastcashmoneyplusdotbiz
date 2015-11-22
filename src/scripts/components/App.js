import { addTarget, removeTarget, mouseMovement, pageScroll } from '../actions/mouseMovement';
import { applyToHex } from '../utilities/colors';
import { onMouseMove, onScroll } from '../utilities/dom-utils';
import { connect } from 'react-redux';

import React from 'react';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';

const callToActionId = Symbol('CALL TO ACTION');

const colorState = (primary, s) => ({
  primary,
  inverse: applyToHex(primary, { h: 180, v: s }),
  special: applyToHex(primary, { h: 180, v: s })
});

const getPrimaryColors = (state) => {
  const scrollY = state.mouseMovement.get('scrollY');
  const h = state.mouseMovement.getIn(
    ['targets', callToActionId, 'distance'], 0
  );
  const scroll = scrollY || 1;
  const adjustment = 175;

  const s = 1 - (scroll / adjustment);

  let baseColor = '#FF0000';

  return {
    s,
    primary: applyToHex(
      baseColor,
      { h, s },
      3
    )
  };
};

function selectColors(state) {
  let { primary, s } = getPrimaryColors(state);
  return colorState(primary, s);
}

function select(state) {
  return {
    colors: selectColors(state),
    scrollY: state.mouseMovement.get('scrollY'),
    mouseDistance: state.mouseMovement.getIn(
      [ 'targets', callToActionId, 'distance' ],
      0
    ),
    callToActionId
  };
}

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    onMouseMove((x, y) => dispatch(
      mouseMovement({ x, y })
    ));

    onScroll(() => dispatch(
      pageScroll()
    ));
  }

  render() {
    const {
      colors,
      dispatch,
      scrollY,
      mouseDistance
    } = this.props;

    const { primary, inverse, } = colors;
    const style = {
      color: inverse,
      backgroundColor: primary
    };

    const mouseTarget = {
      mount: (coords) => dispatch(addTarget(callToActionId, coords)),
      unmount: (coords) => dispatch(removeTarget(callToActionId, coords))
    };

    return (
      <div style={style}>
        <Nav colors={colors} />
        <LandingPage
          colors={colors}
          mouseTarget={mouseTarget}
          mouseDistance={mouseDistance}
          scrollY={scrollY}
        />
        <Footer colors={colors} year={2013}/>
      </div>
    );
  }
}

export default connect(select)(App);
