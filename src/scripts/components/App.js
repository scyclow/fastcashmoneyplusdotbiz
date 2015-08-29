import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';
import mouseHandler from '../handlers/mouseHandler';
import colorStore from '../stores/colorStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.style = {};
    this.state = {
      colors: {}
    };
  }

  componentDidMount() {
    mouseHandler.register(this, () => this.forceUpdate());
  }

  updateColors() {
    let primary = colorStore.colors.primary;
    let inverse = colorStore.colors.inverse;
    let special = colorStore.colors.special;

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
        <LandingPage colors={colors} />
        <Footer colors={colors} />
      </div>
    );
  }
}

export default App;
