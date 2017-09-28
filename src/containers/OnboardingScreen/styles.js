import {StyleSheet} from 'react-native'
import CommonStyle from '../../styles/common'

export default StyleSheet.create({
  swiperDot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(21, 180, 241, .2)'
  },
  swiperActiveDot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: '#15B4F1'
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideImg: {
    paddingTop: CommonStyle.PADDING,
    width: CommonStyle.DEVICE_WIDTH * 0.6,
    height: CommonStyle.DEVICE_WIDTH * 0.6,
    overflow: 'visible'
  },
  slideTitle: {
    color: 'black',
    fontFamily: 'AvenirNext_demi_bold',
    fontSize: CommonStyle.FONT_SIZE_H2,
    paddingTop: CommonStyle.PADDING
  },
  slideDesc: {
    color: 'black',
    paddingTop: '2%',
    paddingHorizontal: CommonStyle.PADDING,
    textAlign: 'center'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '90%',
    height: '90%',
    justifyContent: 'center'
  }
})
