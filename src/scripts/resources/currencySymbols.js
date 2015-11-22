import times from 'lodash/utility/times';
import sample from 'lodash/collection/sample';

const currencySymbols = [{
  code: '$',
  char: '$',
  prob: 13
}, {
  code: '&#165',
  char: '¥',
  prob: 6
}, {
  code: '&#8364',
  char: '€',
  prob: 5
}, {
  code: '&#163',
  char: '£',
  prob: 5
}, {
  code: '&#8361',
  char: '₩',
  prob: 2
}, {
  code: '&#8373',
  char: '₵',
  prob: 2
}, {
  code: '&#8369',
  char: '₱',
  prob: 2
}, {
  code: '&#3647',
  char: '฿',
  prob: 2
}, {
  code: '&#8377',
  char: '₹',
  prob: 1
}, {
  code: '&#8363',
  char: '₫',
  prob: 1
}, {
  code: '&#8353',
  char: '₡',
  prob: 1
}, {
  code: '&#8366',
  char: '₮',
  prob: 1
}, {
  code: '&#8367',
  char: '₯',
  prob: 1
}];

const currencyHat = currencySymbols.reduce((hat, currency) => {
  times(currency.prob, () => {
    hat.push(currency.char);
  });
  return hat;
}, []);

const randCurrency = () => sample(currencyHat);

export default { currencySymbols, randCurrency };
