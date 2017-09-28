import React from 'react'
import Modal from 'react-native-modalbox'
import {Image} from 'react-native'
import {Button, Icon, Input, Item} from 'native-base'
import {Row, Grid, Col} from 'react-native-easy-grid'

import styles from './styles'

class LoginModal extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpen: true
    }
    this._handleCloseDialog = this._handleCloseDialog.bind(this)
    this._onOpen = this._onOpen.bind(this)
    this._onClose = this._onClose.bind(this)
  }

  _onOpen () {
    const { onOpen } = this.props
    this.setState({
      isOpen: true
    }, () => onOpen && onOpen())
  }

  _onClose () {
    const { onClose } = this.props
    this.setState({
      isOpen: false
    }, () => onClose && onClose())
  }

  _handleCloseDialog () {
    this.setState({
      isOpen: false
    })
  }

  render () {
    const { modalRef, onClosingState } = this.props
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
            <Button iconLeft transparent dark onPress={this._handleCloseDialog} style={styles.closeButton}>
              <Icon name='close' />
            </Button>
          </Row>
          <Row size={30} style={styles.logoContainer}>
            <Image resizeMode='cover' source={require('../../assets/images/onboarding_1.png')} style={styles.logo} />
          </Row>
          <Col size={40} style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Row size={35}>
              <Item style={{
                width: '90%',
                height: '75%',
                backgroundColor: '#FBFAFF',
                paddingHorizontal: 20,
                borderBottomWidth: 0
              }}>
                <Icon active name='mail' style={{
                  color: '#DAD9E2'
                }} />
                <Input placeholder='Email Address' style={{
                  fontFamily: 'AvenirNext_medium',
                  marginLeft: 10
                }} />
              </Item>
            </Row>
            <Row size={35} />
            <Row size={30} />
          </Col>
          <Row size={20} />
        </Grid>
      </Modal>
    )
  }
}

export default LoginModal
