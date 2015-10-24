import React from 'react';

import CallToAction from './CallToAction';
import LegalJargon from './LegalJargon';
import Tone from '../handlers/audioHandler';
import landingCopy from '../helpers/landingCopy';

class LandingPage extends React.Component {
  componentWillMount() {
    this.style = {
      padding: 50
    };
  }

  componentDidMount() {
    const toneChange = this.setupTone();
    this.props.mouseHandler.register(this, toneChange);
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

    const toneChange = (coords) => {
      let dist = coords.target.distance / 4;
      this.tone1.freq = Math.min(500 + dist, 2000);
      this.tone2.freq = Math.max(500 - dist, 20);
    };

    return toneChange;
  }

  killTone() {
    this.props.mouseHandler.unregister(this);
    this.tone1.kill();
    this.tone2.kill();
  }

  render() {
    const otherCrap = `
      You can join thousands of people jsut like yourself who have alread realized their dreams by using FastCashMoneyPlus.biz's patented multi-level crowd-sourcing distribution process. Moreover, all users who sign up by {{Date.now()+(5*24*60*60*1000)|format:'shortDate'}} will even receive a substantial FastCash, the value of which will undoubtedly appreciate over time. Trust us, you want to get in on the ground floor.
      `;

    // ES7 ~> <CallToAction {...this.props} />
    return (
      <div style={this.style}>
        <div className="tag-line" style={{
          height: 50,
          fontSize: 24,
        }}>
          Congratulations! You have just discovered a very rare opportunity to achieve untold amounts of wealth. FastCashMoneyPlus.biz is the premier FastCash accumulation platform on the web today!
          <br/>
          Click here to start making FastCash now! >>>>>>>>>>>>>>>>>
        </div>
        <CallToAction
          colors={this.props.colors}
          mouseHandler={this.props.mouseHandler}
        />
        <br/>
        {otherCrap}
        <LegalJargon copy={landingCopy}/>
      </div>
    );
  }
}

export default LandingPage;
