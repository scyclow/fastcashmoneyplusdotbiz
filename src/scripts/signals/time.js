import Signal from './signal';

class TimeHandler extends Signal {
  constructor() {
    super();
    this._span = 1000;
  }

  get span() {
    return this._span;
  }

  set span(newSpan) {
    this._span = newSpan;
    return this._span;
  }

  execute(fn) {
    fn();
    // e = fn(); wait this._span
  }
}

const timeHandler = new TimeHandler();

export default timeHandler;
