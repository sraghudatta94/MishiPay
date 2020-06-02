import {Dimensions, PixelRatio,Platform,NativeModules} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const {fontScale} = Dimensions.get('window')

const Width = widthPercent => {
  return responsiveWidth(widthPercent);
};
const Height = heightPercent => {
  return responsiveHeight(heightPercent);
};

const FontSize = (size) => {
  return size/fontScale  
}


export {
  Width,
  Height,
  FontSize
};