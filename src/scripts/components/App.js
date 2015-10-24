import React from 'react';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';
import mouseHandler from '../handlers/mouseHandler';
import colorStore from '../stores/colorStore';

class App extends React.Component {
  componentWillMount() {
    mouseHandler.register(this, () => this.forceUpdate());
  }

  render() {
    const { colors } = colorStore;
    const { primary, inverse, } = colors;
    const style = {
      color: inverse,
      backgroundColor: primary
    };

    return (
      <div style={style}>
        <Nav colors={colors} />
        <LandingPage colors={colors} mouseHandler={mouseHandler}/>
        <Footer colors={colors} year={2013}/>
      </div>
    );
  }
}

export default App;
