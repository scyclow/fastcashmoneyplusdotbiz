import mousePosition from '../signals/mousePosition';
// import timeHandler from '../handlers/timeHandler';
import { applyToHex } from '../utilities/colors';

const mod = 3;
const primary = Symbol('primary');

class ColorStore {
  constructor() {
    this.baseColor = '#ff0000';
    this[primary] = this.baseColor;

    mousePosition.register(this, (coords) => {
      let h = coords.target.distance;
      let s = coords.scrollY;
      this.update({h, s});
    });
  }

  update({h, s}) {
    this[primary] = applyToHex(this.baseColor, {h, s}, mod);
  }

  get colors() {
    return {
      primary: this.primary,
      inverse: this.inverse,
      secondary: this.secondary,
    };
  }

  get primary() {
    return this[primary];
  }

  get inverse() {
    return applyToHex(this.primary, { h: 180 });
  }

  get special() {
    return applyToHex(this.primary, { h: 180 });
  }
}

const colorStore = new ColorStore();

export default colorStore;
