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
      colorStore.updateStyles(coords.target.distance);
    });

    this.updateStyles();
  }

  updateStyles(amount=0) {
    this.colors.primary = modifyHexHsv(this.baseColor, amount, mod);
    this.colors.inverse = modifyHexHsv(this.baseColor, amount, -mod);
  }

  primary(amount=0) {
    return modifyHexHsv(this.colors.primary, amount, mod);
  }

  inverse(amount=0) {
    return modifyHexHsv(this.colors.inverse, amount, -mod);
  }
}

let colorStore = new ColorStore();

export default colorStore;
