import React from 'react';
import CallToAction from './CallToAction';
import LegalJargon from './LegalJargon';
import Tone from '../utilities/tone';
import landingCopy from '../resources/landingCopy';

class LandingPage extends React.Component {
  componentDidMount() {
    this.setupTone();
  }

  componentWillUnmount() {
    this.killTone();
  }

  setupTone() {
    this.tone1 = new Tone(500);
    this.tone2 = new Tone(1000);
    this.tone1.volume = 0.0005;
    this.tone2.volume = 0.0005;
    this.tone2.type = 'sawtooth';

    this.toneChange = (coords) => {
      const dist = coords / 4;
      this.tone1.freq = Math.min(500 + dist, 2000);
      this.tone2.freq = Math.max(500 - dist, 20);
    };
  }

  toneChange() {}

  killTone() {
    this.tone1.kill();
    this.tone2.kill();
  }

  render() {
    const otherCrap = `
      You can join thousands of people jsut like yourself who have alread realized their dreams by using FastCashMoneyPlus.biz's patented multi-level crowd-sourcing distribution process. Moreover, all users who sign up by {{Date.now()+(5*24*60*60*1000)|format:'shortDate'}} will even receive a substantial FastCash, the value of which will undoubtedly appreciate over time. Trust us, you want to get in on the ground floor.
    `;

    const style = {
      padding: 50
    };

    const textStyle = {
      height: 50,
      fontSize: 24
    };

    const { colors, mouseDistance, mouseTarget } = this.props;
    this.toneChange(mouseDistance);

    // ES7 ~> <CallToAction {...this.props} />
    return (
      <div style={style}>
        <div style={textStyle}>
          Congratulations! You have just discovered a very rare opportunity to achieve untold amounts of wealth. FastCashMoneyPlus.biz is the premier FastCash accumulation platform on the web today!
          <br/>
          Click here to start making FastCash now! >>>>>>>>>>>>>>>>>
        </div>
        <CallToAction
          colors={colors}
          mouseTarget={mouseTarget}
        />
        {otherCrap}
        <LegalJargon copy={landingCopy} />
      </div>
    );
  }
}

export default LandingPage;
