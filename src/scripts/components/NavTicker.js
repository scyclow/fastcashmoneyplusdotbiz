import React from 'react';
// import currencySymbols from '../resources/currencySymbols';

// const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
// const sampleTimes = (arr, times) => {
//   let out = [];
//   for (let t = times; t; t--) {
//     out.push(<span>{sample(arr)}</span>);
//   }
//   return out;
// };

class NavTicker extends React.Component {
  componentWillMount() {
    // const cashMoney = currencySymbols.reduce((symbols, sym) => {
    //   let { prob, code } = sym;
    //   while (prob--) {
    //     symbols.push(<span>{code}</span>);
    //   }
    //   return symbols;
    // }, []);

    this.allChars = {
      fast: <span>{'>'}</span>,
      plus: <span>{'+'}</span>
      // cashMoney,
    };

    // TODO: auto generate quantity
    // maybe make responsive at some point
    this.quantity = 40;


    let output = [];
    for (let i = 0; i < this.quantity; i++) output.push(this.allChars.fast);
    for (let i = 0; i < this.quantity; i++) output.push(<span>{'$'}</span>);
    for (let i = 0; i < this.quantity; i++) output.push(this.allChars.plus);
    this.state = {
      currencyIx: this.quantity,
      output
    };
  }

  // TODO: change currency symbols. react is weird with utf8 codes
  componentDidMount() {
    setInterval(
      () => this.setState( this.getStaticTicker() ),
      25
    );
  }

  getStaticTicker() {
    let {output} = this.state;
    let last = output.pop();
    output.unshift(last);
    return {output};
  }

  // getBase() {
  //   const base = [];
  //   for (let p = this.quantity; p; p--) {
  //     base.unshift(this.allChars.fast);
  //     base.push(this.allChars.plus);
  //   }
  //   return base;
  // }

  // getTicker() {
  //   let output = this.getBase();
  //   let { currencyIx } = this.state;

  //   let front = Math.max(currencyIx - output.length, 0);

  //   for (let f = front; f; f--) {
  //     output.unshift('$');
  //   }

  //   for (
  //     let rest = this.quantity - front, ix = currencyIx;
  //     rest;
  //     rest--, ix++
  //   ) {
  //     output.splice(ix, 0, '$');
  //   }

  //   currencyIx += 1;
  //   if (currencyIx >= output.length) {
  //     currencyIx = 0;
  //   }

  //   return { currencyIx, output };
  // }

  render() {
    return (
      <div>{ this.state.output }</div>
    );
  }
}

export default NavTicker;
