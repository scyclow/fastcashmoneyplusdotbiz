import CallToAction from './CallToAction';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="tag-line">
          The Hottest Crypto-Currency Alternative on The Web
        </div>
        <CallToAction />
      </div>
    );
  }
}

export default LandingPage;
