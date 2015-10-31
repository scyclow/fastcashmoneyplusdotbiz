class Signal {
  constructor() {
    this._subs = new Map();
    this._queue = [];
  }

  queueAll() {
    for (let sub of this._subs) {
      this.addToQueue(sub);
    }
  }

  addToQueue(sub) {
    this._queue.push(sub);
  }

  executeAll() {
    while (this._queue.length) {
      let fn = this._queue.shift()[1];
      this.execute(fn);
    }
  }

  update() {
    this.queueAll();
    this.executeAll();
  }

  execute(fn) {
    fn();
  }

  register(obj, fn) {
    this._subs.set(obj, fn);
    this.update();
  }

  unregister(obj) {
    this._subs.delete(obj);
  }
}

export default Signal;
