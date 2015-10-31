import mousePosition from '../signals/mousePosition';
// import timeHandler from '../handlers/timeHandler';
import { modifyHexHsv } from '../utilities/colors';

const mod = 3;

class ColorStore {
  constructor() {
    this.baseColor = '#ff0000';
    let primary = this.baseColor;
    let inverse = modifyHexHsv(this.baseColor, 0, -mod);
    let special = modifyHexHsv(this.baseColor, 0, -mod);

    this.colors = { primary, inverse, special };

    mousePosition.register(this, (coords) => {
      let h = coords.target.distance;
      let s = coords.scrollY;
      this.update({h, s});
    });
  }

  update({h, s}) {
    this.colors.primary = modifyHexHsv(this.baseColor, {h, s}, mod);
    this.colors.inverse = modifyHexHsv(this.baseColor, {h, s}, -mod);
  }

  primary(h = 0, s = 0) {
    return modifyHexHsv(this.colors.primary, {h, s}, mod);
  }

  inverse(h = 0, s = 0) {
    return modifyHexHsv(this.colors.inverse, {h, s}, -mod);
  }
}

const colorStore = new ColorStore();

export default colorStore;
