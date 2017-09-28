import React from 'react'
import {Col, Row} from 'react-native-easy-grid'
import {Button, Text} from 'native-base'
import PropTypes from 'prop-types'
import TextInput from '../../components/TextInput'

import styles from './styles/LoginForm'

class LoginForm extends React.Component {
  render () {
    const {onLogin, onSwitchForm} = this.props
    return (
      <Col size={70}>
        <Row size={15} />
        <Col size={30} style={styles.controlContainer}>
          <Row size={35}>
            <TextInput
              icon='mail'
              placeholder='Email'
              containerStyle={styles.inputContainer} />
          </Row>
          <Row size={35}>
            <TextInput
              icon='lock'
              placeholder='Mật Khẩu'
              secureTextEntry
              containerStyle={styles.inputContainer} />
          </Row>
          <Row size={30}>
            <Button
              iconLeft
              rounded
              success
              style={styles.loginButton}
              onPress={onLogin}>
              <Text>ĐĂNG NHẬP</Text>
            </Button>
          </Row>
        </Col>
        <Row size={10} />
        <Col size={15} style={styles.controlContainer}>
          <Row size={20}>
            <Text>Bạn chưa có tài khoản?</Text>
          </Row>
          <Row size={80}>
            <Button transparent success onPress={onSwitchForm}>
              <Text>Đăng Ký</Text>
            </Button>
          </Row>
        </Col>
      </Col>
    )
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
  onSwitchForm: PropTypes.func
}

export default LoginForm
