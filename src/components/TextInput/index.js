import React from 'react'
import {Item, Icon, Input} from 'native-base'
import PropTypes from 'prop-types'
import styles from './styles'

class TextInput extends React.PureComponent {
  render () {
    const {
      icon,
      iconStyle,
      inputStyle,
      containerStyle,
      ...props
    } = this.props
    return (
      <Item style={[styles.container, containerStyle]}>
        {
          icon && <Icon name={icon} style={[styles.icon, iconStyle]} />
        }
        <Input {...props} style={[styles.input, inputStyle]} />
      </Item>
    )
  }
}

TextInput.propTypes = {
  icon: PropTypes.string,
  iconStyle: Icon.propTypes.style,
  inputStyle: Input.propTypes.style,
  containerStyle: Item.propTypes.style
}

export default TextInput
