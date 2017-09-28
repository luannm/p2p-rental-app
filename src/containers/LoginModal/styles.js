import {StyleSheet} from 'react-native'
import CommonStyle from '../../styles/common'

export default StyleSheet.create({
  modal: {
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginTop: 20
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: CommonStyle.DEVICE_WIDTH * 0.4,
    height: CommonStyle.DEVICE_WIDTH * 0.4
  }
})
