import Signal from './signal';

class MousePosition extends Signal {
  constructor() {
    super();
    this._targetCoords = { x: 0, y: 0 };
    this._coords = {
      x: 0,
      y: 0,
      scrollY: 0,
      target: {
        x: 0,
        y: 0,
        distance: 0
      }
    };

    document.onmousemove = (e) => this._onMouseMove(e);
    window.addEventListener('scroll', () => this.scrollY = window.scrollY);
  }

  execute(fn) {
    fn(this.coords);
  }

  _onMouseMove(e) {
    let x = e.clientX + window.pageXOffset;
    let y = e.clientY + window.pageYOffset;
    this.coords = { x, y };
  }

  set coords(coords) {
    this._coords = coords;
    this._coords.target = this.getTargetDistance(coords);
    this.update();

    return this._coords;
  }

  get coords() {
    return this._coords;
  }

  _onScroll() {
    this.scrollY = window.scrollY;
  }

  set scrollY(y) {
    this._coords.scrollY = y;
    this.update();

    return this._coords.scrollY;
  }

  get scrollY() {
    return this._coords.scrollY;
  }

  getTargetDistance(coords) {
    let xDiff = Math.abs(this._targetCoords.x - coords.x);
    let yDiff = Math.abs(this._targetCoords.y - coords.y);
    let distance = Math.sqrt((xDiff ** 2) + (yDiff ** 2));

    return { xDiff, yDiff, distance };
  }

  target(elem, disp) {
    let x, y;

    if (elem) {
      x = elem.offsetLeft + disp + (elem.offsetWidth / 2);
      y = elem.offsetTop + disp + (elem.offsetHeight / 2);
    } else {
      [x, y] = [0, 0];
    }

    this._targetCoords = { x, y };
  }
}

const mousePosition = new MousePosition();

export default mousePosition;