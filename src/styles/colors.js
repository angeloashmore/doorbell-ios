import Color from 'color';

const white = 'white';
const black = 'black';
const tint = '#f0553e';

const colors = new Map();

// Base
colors.set('white', Color(white));
colors.set('black', Color(black));

// Tint
colors.set('tint', Color(tint));
colors.set('tintAlt', Color(tint).darken(0.5));

// Dividers
colors.set('divider', Color(white).darken(0.05));

// Text
colors.set('text', Color(white).darken(0.7));
colors.set('textUnpronounced', Color(white).darken(0.4));
colors.set('textSuperUnpronounced', Color(white).darken(0.1));

// Transform Color objects to RGB strings
colors.forEach((value, key) => colors.set(key, value.rgbString()));

// Transparent
colors.set('transparent', 'transparent');

export default colors;
