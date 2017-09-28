import React from 'react'
import {Col, Row} from 'react-native-easy-grid'
import {Button, Text} from 'native-base'
import PropTypes from 'prop-types'
import TextInput from '../../components/TextInput'

import styles from './styles/SignupForm'

class SignupForm extends React.Component {
  render () {
    const {onSignup, onSwitchForm} = this.props
    return (
      <Col size={70}>
        <Row size={10} />
        <Col size={55} style={styles.controlContainer}>
          <Row>
            <TextInput
              icon='person'
              placeholder='Họ Tên'
              containerStyle={styles.inputContainer} />
          </Row>
          <Row>
            <TextInput
              icon='mail'
              placeholder='Email'
              containerStyle={styles.inputContainer} />
          </Row>
          <Row>
            <TextInput
              icon='lock'
              placeholder='Mật Khẩu'
              secureTextEntry
              containerStyle={styles.inputContainer} />
          </Row>
          <Row>
            <Button iconLeft rounded success style={styles.signupButton} onPress={onSignup}>
              <Text>ĐĂNG KÝ</Text>
            </Button>
          </Row>
        </Col>
        <Row size={10} />
        <Col size={20} style={styles.controlContainer}>
          <Row size={20}>
            <Text>Bạn đã có tài khoản?</Text>
          </Row>
          <Row size={80}>
            <Button transparent success onPress={onSwitchForm}>
              <Text>Đăng Nhập</Text>
            </Button>
          </Row>
        </Col>
      </Col>
    )
  }
}

SignupForm.propTypes = {
  onSignup: PropTypes.func,
  onSwitchForm: PropTypes.func
}

export default SignupForm
