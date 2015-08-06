import CallToAction from './CallToAction';
import mouseHandler from '../handlers/mouseHandler';
import Tone from '../handlers/audioHandler';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      height: 2000
    };

    this.registrationKey = 'LandingPage';
  }

  componentDidMount() {
    this.tone1 = new Tone(500);
    this.tone2 = new Tone(1000);
    this.tone1.volume = 0.0005;
    this.tone2.volume = 0.0005;
    this.tone2.type = 'sawtooth';

    mouseHandler.register(this.registrationKey, (coords) => {
      let dist = coords.targetDistance / 4;
      this.tone1.freq = Math.min(500 + dist, 2000);
      this.tone2.freq = Math.max(500 - dist, 20);
    });
  }

  componentWillUnmount() {
    mouseHandler.unregister(this.registrationKey);
    this.tone1.kill();
    this.tone2.kill();
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
