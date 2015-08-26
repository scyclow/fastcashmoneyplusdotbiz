import mouseHandler from '../handlers/mouseHandler';
import { modifyHexHsv } from '../helpers/colors';

const mod = 3;

class ColorStore {
  constructor() {
    this.baseColor = '#ff0000';
    this.colors = {
      primary: this.baseColor,
      inverse: modifyHexHsv(this.baseColor, 0, -mod)
    };

    mouseHandler.register(this, (coords) => {
      let h = coords.target.distance;
      let s = coords.scrollY;
      this.update({h, s});
    });
  }

  update({h, s}) {
    this.colors.primary = modifyHexHsv(this.baseColor, {h, s}, mod);
    this.colors.inverse = modifyHexHsv(this.baseColor, {h, s}, -mod);
  }

  primary(h=0, s=0) {
    return modifyHexHsv(this.colors.primary, {h, s}, mod);
  }

  inverse(h=0, s=0) {
    return modifyHexHsv(this.colors.inverse, {h, s}, -mod);
  }
}

let colorStore = new ColorStore();

export default colorStore;
