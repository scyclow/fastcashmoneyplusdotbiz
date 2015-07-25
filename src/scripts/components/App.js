import Nav from './Nav';
import LandingPage from './LandingPage';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <Nav />
        <LandingPage />
        <Footer />
      </body>
    );
  }
}

export default App;
