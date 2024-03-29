import color from 'color';

const white = 'white';
const black = 'black';
const tint = '#f0553e';

const colors = new Map();

// Base
colors.set('white', color(white));
colors.set('black', color(black));

// Tint
colors.set('tint', color(tint));
colors.set('tintAlt', color(tint).darken(0.5));

// Backgrounds
colors.set('background', color(white).darken(0.05));

// Dividers
colors.set('divider', color(white).darken(0.05));

// Text
colors.set('text', color(white).darken(0.8));
colors.set('textSlightlyUnpronounced', color(white).darken(0.6));
colors.set('textUnpronounced', color(white).darken(0.4));
colors.set('textSuperUnpronounced', color(white).darken(0.2));

// Alerts
colors.set('alert', color(tint));

// Accent Colors
colors.set('green', color('#a6e864'));
colors.set('purple', color('#e18df2'));
colors.set('yellow', color('#f5d000'));
colors.set('blue', color('#57a5ff'));
colors.set('orange', color('#f5a623'));

// Transform color objects to RGB strings
colors.forEach((value, key) => colors.set(key, value.rgbString()));

// Transparent
colors.set('transparent', 'transparent');

export default colors;
