import React from 'react'
import Modal from 'react-native-modalbox'
import {Image} from 'react-native'
import {Button, Icon} from 'native-base'
import {Row, Grid} from 'react-native-easy-grid'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import styles from './styles'

class LoginSignupModal extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      isLogin: true
    }
    this._handleCloseDialog = this._handleCloseDialog.bind(this)
    this._onOpen = this._onOpen.bind(this)
    this._onClose = this._onClose.bind(this)
  }

  _onOpen () {
    const {onOpen} = this.props
    this.setState({
      isOpen: true
    }, () => onOpen && onOpen())
  }

  _onClose () {
    const {onClose} = this.props
    this.setState({
      isOpen: false
    }, () => onClose && onClose())
  }

  _handleCloseDialog () {
    this.setState({
      isOpen: false,
      isLogin: true
    })
  }

  render () {
    const {modalRef, onClosingState} = this.props
    const {isLogin} = this.state
    return (
      <Modal
        ref={modalRef}
        swipeToClose={false}
        isOpen={this.state.isOpen}
        style={styles.modal}
        onClosed={this._onClose}
        onOpened={this._onOpen}
        onClosingState={onClosingState}>
        <Grid>
          <Row size={10}>
            <Button
              iconLeft
              transparent
              dark
              onPress={this._handleCloseDialog}
              style={styles.closeButton}>
              <Icon name='close' style={styles.closeButtonIcon} />
            </Button>
          </Row>
          <Row size={5} />
          <Row size={10} style={styles.logoContainer}>
            <Image
              resizeMode='cover'
              source={require('../../assets/images/onboarding_1.png')}
              style={styles.logo} />
          </Row>
          {
            isLogin
              ? <LoginForm onSwitchForm={() => this.setState({isLogin: false})} />
              : <SignupForm onSwitchForm={() => this.setState({isLogin: true})} />
          }
        </Grid>
      </Modal>
    )
  }
}

export default LoginSignupModal
