import _ from "lodash";
import StereoPannerPolyfill from 'stereo-panner-node';
import './style.css';

// StereoPannerPolyfill.polyfill();

const Pizzicato = require('pizzicato');

var sineWave = new Pizzicato.Sound({ 
  source: 'wave', 
  options: {
      frequency: 440
  }
});
var stereoPanner = new Pizzicato.Effects.StereoPanner({
  pan: 0.0
});

sineWave.addEffect(stereoPanner);
sineWave.play();

function component() {
  var element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "audio"], " ");

  return element;
}

document.body.appendChild(component());
