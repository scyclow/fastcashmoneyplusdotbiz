const mouseHandler = {
  queue: {},
  register(id, fn) {
    if (this.queue[id]) {
      console.log(`${id} is already registered`);
      return;
    }

    this.queue[id] = fn;
  },

  unregister(id) {
    if (!this.queue[id]) {
      console.log(`${id} is already registered`);
      return;
    }
    delete this.queue[id];
  },

  update(coords) {
    for (let i in this.queue) {
      let fn = this.queue[i];
      fn(coords);
    }
  }
};

document.onmousemove = (e) => {
  mouseHandler.update({
    x: e.clientX, y: e.clientY
  });
};

export default mouseHandler;
