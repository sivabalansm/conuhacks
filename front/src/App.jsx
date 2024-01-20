import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import Schedule from './routes/schedule/Schedule'
import Dashboard from './routes/dashboard/dashboard'
import Analytics from './routes/analytics/analytics'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/schedule/:date' element={<Schedule />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />}/>
      </Routes>
    </Router>
  )
}

export default App
