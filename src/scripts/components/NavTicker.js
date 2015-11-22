import React from 'react';
import times from 'lodash/utility/times';
import { take, takeRight } from 'lodash/array';
import { randCurrency } from '../resources/currencySymbols';

import 'babel-core/polyfill';

class NavTicker extends React.Component {
  componentWillMount() {
    this.ticker = this.getTicker();
    this.nextTicker = () => this.ticker.next().value;

    this.state = { ticker: this.nextTicker() };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ ticker: this.nextTicker() }),
      50
    );
  }

  * getTicker() {
    const quantity = 30;
    const maxIx = quantity * 3;
    let cashIx = 0;

    const allChars = {
      fast: '>',
      cash: '$',
      plus: '+'
    };

    const getStaticTicker = () => {
      let output = [];
      times(quantity, () => output.push(allChars.fast));
      times(quantity, () => output.push(randCurrency()));
      times(quantity, () => output.push(allChars.plus));
      return output;
    };

    const incIndex = (ix) => ix + 1 < maxIx ? ix + 1 : 0;

    let generateTicker = () => {
      cashIx = incIndex(cashIx);
      const staticTicker = getStaticTicker();
      const left = takeRight(staticTicker, cashIx);
      const right = take(staticTicker, maxIx - cashIx);

      return left.concat(right);
    };

/*eslint-disable*/
    while (true) {
      yield generateTicker();
    }
/*eslint-enable*/
  }

  render() {
    return (
      <div>{ this.state.ticker }</div>
    );
  }
}

export default NavTicker;
