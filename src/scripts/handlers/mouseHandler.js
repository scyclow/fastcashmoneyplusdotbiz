const mouseHandler = {
  queue: {},
  target: { x: 0, y: 0},
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

  getTargetDistance(coords) {
    let xDiff = Math.abs(this.target.x - coords.x);
    let yDiff = Math.abs(this.target.y - coords.y);

    return {
      xDiff, yDiff,
      targetDistance: Math.sqrt(xDiff**2 + yDiff**2)
    };
  },

  update(coords) {
    Object.assign(coords, this.getTargetDistance(coords));
    for (let i in this.queue) {
      let fn = this.queue[i];
      fn(coords);
    }
  },

  updateTarget(elem, remove=false) {
    let x, y;

    if (remove) {
      [x, y] = [0, 0];
    } else {
      x = elem.offsetLeft + (elem.offsetWidth / 2);
      y = elem.offsetTop + (elem.offsetHeight / 2);
    }
    this.target = { x, y };
  }
};

document.onmousemove = (e) => {
  let x = e.clientX + window.pageXOffset;
  let y = e.clientY + window.pageYOffset;

  mouseHandler.update({ x, y });
};

export default mouseHandler;
