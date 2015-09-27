

const tones = new Set();

class Tone {
  constructor(startValue = 200) {
    this.aCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.gainNode = this.aCtx.createGain();
    this.gainNode.connect(this.aCtx.destination);
    this.gainNode.gain.value = 0.02;

    this.oscillator = this.aCtx.createOscillator();
    this.oscillator.connect(this.gainNode);

    this.oscillator.type = 'square';
    this.oscillator.detune.value = 100;
    this.oscillator.frequency.value = 8000;
    this.oscillator.start(0);
    setTimeout(() => {
      this.oscillator.frequency.value = startValue;
    }, 100);

    tones.add(this);
  }

  get freq() {
    return this.oscillator.frequency.value;
  }

  set freq(val) {
    let out = this.oscillator.frequency.value = val;
    return out;
  }

  get volume() {
    return this.gainNode.gain.value;
  }

  set volume(val) {
    let out = this.gainNode.gain.value = Math.max(val, 0.05);
    return out;
  }

  get type() {
    return this.oscillator.type;
  }

  set type(type) {
    let out = this.oscillator.type = type;
    return out;
  }

  kill() {
    this.oscillator.stop();
    tones.delete(this);
  }

  upNote(step = 8) {
    const val = this.freq;
    this.freq += val / step;
  }

  downNote(step = 8) {
    const val = this.freq;
    this.freq -= (val * 0.5) / step;
  }
}

export default Tone;
