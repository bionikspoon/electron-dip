import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const render = () => {
  const Page = require('./Page').default

  ReactDOM.render(
    <AppContainer>
      <Page />
    </AppContainer>,
    document.getElementById('App')
  )
}
declare var module: {
  hot?: {
    accept: (render: () => void) => void
  }
}

render()

if (module.hot) {
  module.hot.accept(render)
}
