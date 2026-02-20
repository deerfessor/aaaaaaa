import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Registration } from "./pages/Registration"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  const [] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
