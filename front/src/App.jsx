import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Schedule from './routes/schedule/schedule'
import Info from './routes/Info'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/' element={<Info />} />
      </Routes>
    </Router>
  )
}

export default App
