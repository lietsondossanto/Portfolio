import React from 'react'

import Routes from './routes'
import { Light } from './styles/themes'
import { GlobalStyles } from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <div className={Light}>
      {GlobalStyles()}
      <Routes />
    </div>
  )
}

export default App
