import Dimensions from 'Dimensions'
import ThemeVariables from '../../native-base-theme/variables/material'

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width
const y = Dimensions.get('window').height

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1

// We set our base font size value
const baseUnit = ThemeVariables.fontSizeBase

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX

// We add an em() shortcut function
function em (value) {
  return unit * value
}

// Then we set our styles with the help of the em() function
export default {
  em,
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_H2: em(1.5)
}
