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

export default {
  FlatFloatFromRight,
};
