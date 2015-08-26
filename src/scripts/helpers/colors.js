// 255 => 'ff'
function cToHex(c) {
  let hex = Math.round(c).toString(16);
  return (hex.length === 1) ? '0' + hex : hex;
}

// { r:255, g:0, b:0 } => '#ff0000'
function rgbToHex(rgb) {
  let r = cToHex(rgb.r);
  let g = cToHex(rgb.g);
  let b = cToHex(rgb.b);

  return ['#', r, g, b].join('');
}

// 'ff' => 255
function hexToC(hex) {
  return parseInt(hex, 16);
}
// '#ff0000' => { r:255, g:0, b:0 }
function hexToRgb(hex) {
  let r = hexToC( hex.slice(1, 3) );
  let g = hexToC( hex.slice(3, 5) );
  let b = hexToC( hex.slice(5, 7) );

  return {r: r, g: g, b: b};
}

// http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
// {r: 255, g: 0, b: 255} => {h: 100, s: 1, v: 1}
function rgbToHsv(rgb) {
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let diff = max - min;
  let value = max;
  let saturation = max ? diff / max : 0;

  let hue;
  if (!diff) {
    hue = 0;

  // For some reason website says "mod 6". This returns wonky
  // values, while + 6 appears to return the correct values.
  } else if (r === max) {
    hue = ((g - b) / diff) + 6;

  } else if (g === max) {
    hue = ((b - r) / diff) + 2;

  } else if (b === max) {
    hue = ((r - g) / diff) + 4;
  }

  hue *= 60;

  return {h: hue, s: saturation, v: value};
}

function hsvToRgb(hsv) {
  let c = hsv.v * hsv.s;
  let h = hsv.h / 60;
  let x = c * (1 - Math.abs(h % 2 - 1));
  let m = hsv.v - c;

  let r, g, b;
  switch( Math.floor(h) ) {
    case 0:
    case 6:
      r = c; g = x; b = 0; break;
    case 1:
      r = x; g = c; b = 0; break;
    case 2:
      r = 0; g = c; b = x; break;
    case 3:
      r = 0; g = x; b = c; break;
    case 4:
      r = x; g = 0; b = c; break;
    case 5:
      r = c; g = 0; b = x; break;
  }

  return {
    r: (r + m) * 255,
    g: (g + m) * 255,
    b: (b + m) * 255
  };
}

function hsvToHex(hsv) {
  let rgb = hsvToRgb(hsv);
  return rgbToHex(rgb);
}

function hexToHsv(hex) {
  return rgbToHsv( hexToRgb(hex) );
}

function handleOverflow(original, amount, modifier) {
  let total = original + (Math.round(amount) / Math.abs(modifier));
  let excess = total > 360 ? total - 360 : 0;

  if (modifier < 0) {
    total += 180;
  }

  return {total, excess};
}

function applyHsvSat(hsv, hsvChange={}, modifier=1) {
  if (!modifier) { return hsv; }

  let amount = hsvChange.s || 0;
  let { h, s, v } = hsv;

  if (modifier && amount) {
    s = 1 - ( amount / 360 );
    s = s > 0 ? s : 0;
  }

  if (modifier < 0 && amount) {
    v = s;
  } else if (modifier > 0) {
    v = 1;
  }

  return { h, s, v };
}

function applyHsvHue(hsv, hsvChange={}, modifier=1) {
  if (!modifier) { return hsv; }

  let { h, s, v } = hsv;
  let totalH = handleOverflow(h, hsvChange.h, modifier).total;

  h = (totalH) % 360;

  return { h, s, v };
}

function modifyHex(transform, hex, ...params) {
  let hsv = hexToHsv(hex);
  let transformed = transform(hsv, ...params);
  return hsvToHex(transformed);
}

function modifyHexHue(hex, ...params) {
  return modifyHex(applyHsvHue, hex, ...params);
}

function modifyHexSaturation(hex, ...params) {
  return modifyHex(applyHsvSat, hex, ...params);
}

function modifyHexHsv(hex, ...params) {
  let hsv = hexToHsv(hex);
  let hued = applyHsvHue(hsv, ...params);
  let sated = applyHsvSat(hued, ...params);

  return hsvToHex(sated);
}

export default { modifyHexHsv, modifyHexHue, modifyHexSaturation, hsvToHex };
