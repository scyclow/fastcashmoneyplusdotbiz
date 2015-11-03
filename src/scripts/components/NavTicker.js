import React from 'react';
import times from 'lodash/utility/times';

class NavTicker extends React.Component {
  componentWillMount() {
    this.allChars = {
      fast: <span>{'>'}</span>,
      cash: <span>{'$'}</span>,
      plus: <span>{'+'}</span>
    };

    // TODO: auto generate quantity
    // maybe make responsive at some point
    const quantity = this.quantity = 40;

    let ticker = [];
    times(quantity, () => ticker.push(this.allChars.fast));
    times(quantity, () => ticker.push(this.allChars.cash));
    times(quantity, () => ticker.push(this.allChars.plus));

    this.state = { ticker };
  }

  // TODO: change currency symbols. react is weird with utf8 codes
  componentDidMount() {
    setInterval(
      () => this.setState( this.getTicker() ),
      25
    );
  }

  getTicker() {
    let { ticker } = this.state;
    let last = ticker.pop();
    ticker.unshift(last);
    return { ticker };
  }

  render() {
    return (
      <div>{ this.state.ticker }</div>
    );
  }
}

export default NavTicker;
