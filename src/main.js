import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App/'

const root = document.getElementById('root')

if (process.env.NODE_ENV === 'development') {
  const rerender = async () => {
    const { default: App } = await import('./components/App/')

    render(
      <AppContainer>
        <App />
      </AppContainer>,
      root,
    )
  }

  rerender()

  if (module.hot) {
    module.hot.accept('./components/App/', rerender)
  }
} else {
  render(<App />, root)
}
