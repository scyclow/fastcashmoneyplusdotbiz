import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';
import mouseHandler from '../handlers/mouseHandler';
import colorStore from '../stores/colorStore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {};
  }

  componentDidMount() {
    mouseHandler.register('App', () => this.forceUpdate());
  }

  updateStyles() {
    let primary = colorStore.colors.primary;
    let inverse = colorStore.colors.inverse;

    let newStyles = {
      backgroundColor: primary,
      color: inverse
    };

    Object.assign(this.styles, newStyles);
  }

  render() {
    this.updateStyles();

    return (
      <div style={this.styles}>
        <Nav />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
