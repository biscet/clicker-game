import React from 'react'
import { hot } from 'react-hot-loader'

import RoutesRender from '@models/routes/init'
import './app.scss'

function App() {
  return (
    <div className='app'>
      <RoutesRender />
    </div>
  )
}

export default hot(module)(App)
