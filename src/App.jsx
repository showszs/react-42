import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Links from './components/Links'

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
