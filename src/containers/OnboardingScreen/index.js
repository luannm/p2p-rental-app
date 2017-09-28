import React from 'react'
import {Image} from 'react-native'
import {Text, View, Button, Icon} from 'native-base'
import {Row, Grid, Col} from 'react-native-easy-grid'
import Swiper from 'react-native-swiper'

import styles from './styles'

import LoginModal from '../LoginModal';

const SLIDE_DATA = [{
  image: require('../../assets/images/onboarding_1.png'),
  title: 'Tăng Thu Nhập',
  description: 'Tăng thêm thu nhập bằng cách cho thuê những sản phẩm bạn có cho người cần chúng.'
}, {
  image: require('../../assets/images/onboarding_2.png'),
  title: 'Tiết Kiệm Thời Gian',
  description: 'Dễ dàng tìm kiếm và thuê đồ từ những người dùng xung quanh bạn chỉ trong vài giây.'
}, {
  image: require('../../assets/images/onboarding_3.png'),
  title: 'Sản Phẩm Chất Lượng',
  description: 'Thuê và sử dụng những sản phẩm chất lượng thay vì phải mua chúng khi bạn chỉ dùng vài lần.'
}, {
  image: require('../../assets/images/onboarding_4.png'),
  title: 'Đăng Tin Dễ Dàng',
  description: 'Đăng tin nhanh chóng và dễ dàng chỉ với vài bước. Mọi tin đăng đều được kiểm duyệt.'
}]

class OnboardingScreen extends React.PureComponent {
  _renderSlide () {
    return SLIDE_DATA.map(slide => (
      <View style={styles.slideContainer} key={slide.title}>
        <Image resizeMode='cover' source={slide.image} style={styles.slideImg} />
        <Text style={styles.slideTitle}>{slide.title}</Text>
        <Text style={styles.slideDesc}>{slide.description}</Text>
      </View>
    ))
  }

  render () {
    return (
      <Grid >
        <Row size={75}>
          <Swiper loop
            dotStyle={styles.swiperDot}
            activeDotStyle={styles.swiperActiveDot}
          >
            {
              this._renderSlide()
            }
          </Swiper>
        </Row>
        <Col size={25}>
          <Row size={40} style={styles.buttonContainer}>
            <Button iconLeft rounded primary style={styles.button}>
              <Icon name='logo-facebook' />
              <Text>ĐĂNG NHẬP VỚI FACEBOOK</Text>
            </Button>
          </Row>
          <Row size={40} style={styles.buttonContainer}>
            <Button iconLeft rounded success style={styles.button} onPress={() => this.loginModal.open()}>
              <Icon name='mail' />
              <Text>ĐĂNG NHẬP VỚI EMAIL</Text>
            </Button>
          </Row>
          <Row size={20} />
        </Col>
        <LoginModal modalRef={(key) => { this.loginModal = key }} />
      </Grid>
    )
  }
}

export default OnboardingScreen
