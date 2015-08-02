import CallToAction from './CallToAction';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      height: 2000
    };
  }

  render() {
    return (
      <div style={this.styles}>
        <div className="tag-line">
          The Hottest Crypto-Currency Alternative on The Web
        </div>
        <CallToAction />
      </div>
    );
  }
}

export default LandingPage;
