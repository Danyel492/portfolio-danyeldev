import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from './components/Header'
import { Contact } from './pages/contact'
import { Home } from './pages/home'

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
