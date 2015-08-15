const mouseHandler = {
  queue: new Map(),
  targetCoords: { x: 0, y: 0 },
  register(obj, fn) {
    this.queue.set(obj, fn);
  },

  unregister(obj) {
    this.queue.delete(obj);
  },

  getTargetDistance(coords) {
    let xDiff = Math.abs(this.targetCoords.x - coords.x);
    let yDiff = Math.abs(this.targetCoords.y - coords.y);
    let distance = Math.sqrt(xDiff**2 + yDiff**2);

    return { xDiff, yDiff, distance };
  },

  update(coords) {
    coords.target = this.getTargetDistance(coords);
    for (let fn of this.queue.values()) {
      fn(coords);
    }
  },

  target(elem, disp) {
    let x, y;

    if (elem) {
      x = elem.offsetLeft + disp + (elem.offsetWidth / 2);
      y = elem.offsetTop + disp + (elem.offsetHeight / 2);
    } else {
      [x, y] = [0, 0];
    }

    this.targetCoords = { x, y };
  }
};

document.onmousemove = (e) => {
  let x = e.clientX + window.pageXOffset;
  let y = e.clientY + window.pageYOffset;

  mouseHandler.update({ x, y });
};

export default mouseHandler;
