import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Desktop from '../pages/Desktop/'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
