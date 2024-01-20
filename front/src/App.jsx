import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'

import Schedule from './routes/schedule/Schedule'
import Info from './routes/info/Info'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/schedule/:date' element={<Schedule />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/' element={<Info />} />
      </Routes>
    </Router>
  )
}

export default App
