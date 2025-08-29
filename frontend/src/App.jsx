import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Auth from "./pages/Auth"

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  )
}

export default App
