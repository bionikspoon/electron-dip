import * as React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

init()

if (module.hot) {
  module.hot.accept(init)
}

function init() {
  const App = require('./App').default

  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('App')
  )
}
