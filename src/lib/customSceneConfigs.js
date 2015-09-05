import { Navigator } from 'react-native';
import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';
import buildStyleInterpolator from 'buildStyleInterpolator';

// Scene Config
const FlatFloatFromRight = Object.assign({}, Navigator.SceneConfigs.FloatFromRight);
const FlatFadeToTheLeft = {
  transformTranslate: {
    from: {x: 0, y: 0, z: 0},
    to: {x: -Math.round(Dimensions.get('window').width * 0.3), y: 0, z: 0},
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
  opacity: {
    from: 1,
    to: 1,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: false,
    round: 100,
  },
  translateX: {
    from: 0,
    to: -Math.round(Dimensions.get('window').width * 0.3),
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
};
FlatFloatFromRight.animationInterpolators.out = buildStyleInterpolator(FlatFadeToTheLeft);

const FlatFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom);
const FlatToTheBack = {
  // Rotate *requires* you to break out each individual component of
  // rotation (x, y, z, w)
  transformTranslate: {
    from: {x: 0, y: 0, z: 0},
    to: {x: 0, y: 0, z: 0},
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true,
    round: PixelRatio.get(),
  },
  transformScale: {
    from: {x: 1, y: 1, z: 1},
    to: {x: 1, y: 1, z: 1},
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true
  },
  opacity: {
    from: 1,
    to: 1,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: false,
    round: 100,
  },
  scaleX: {
    from: 1,
    to: 1,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true
  },
  scaleY: {
    from: 1,
    to: 1,
    min: 0,
    max: 1,
    type: 'linear',
    extrapolate: true
  },
};
FlatFloatFromBottom.gestures = null;
FlatFloatFromBottom.animationInterpolators.out = buildStyleInterpolator(FlatToTheBack);

export default {
  FlatFloatFromRight,
  FlatFloatFromBottom,
};
