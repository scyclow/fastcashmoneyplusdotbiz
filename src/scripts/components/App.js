import React from 'react';

import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';
import mouseHandler from '../handlers/mouseHandler';
import colorStore from '../stores/colorStore';

class App extends React.Component {
  componentWillMount() {
    this.style = {};
    this.state = {
      colors: {}
    };
  }

  componentDidMount() {
    mouseHandler.register(this, () => this.forceUpdate());
  }

  updateColors() {
    const { primary, inverse, special } = colorStore.colors;

    this.state.colors = { primary, inverse, special };

    Object.assign(this.style, {
      color: inverse,
      backgroundColor: primary
    });
  }

  render() {
    this.updateColors();
    let colors = this.state.colors;

    return (
      <div style={this.style}>
        <Nav colors={colors} />
        <LandingPage colors={colors} mouseHandler={mouseHandler}/>
        <Footer colors={colors} year={2013}/>
      </div>
    );
  }
}

export default App;
