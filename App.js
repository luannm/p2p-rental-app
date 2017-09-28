import React from 'react'
import {Font, AppLoading} from 'expo'
import {Container, StyleProvider} from 'native-base'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'
import OnboardingScreen from './src/containers/OnboardingScreen'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isReady: false
    }
  }

  async _loadFonts () {
    await Font.loadAsync({
      'AvenirNext': require('./src/assets/fonts/AvenirNext-Regular.ttf'),
      'AvenirNext_medium': require('./src/assets/fonts/AvenirNext-Medium.ttf'),
      'AvenirNext_demi_bold': require('./src/assets/fonts/AvenirNext-DemiBold.ttf'),
      'AvenirNext_bold': require('./src/assets/fonts/AvenirNext-Bold.ttf')
    })
  }

  render () {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadFonts}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <StyleProvider style={getTheme(material)}>
        <Container>
          <OnboardingScreen />
        </Container>
      </StyleProvider>
    )
  }
}

export default App
