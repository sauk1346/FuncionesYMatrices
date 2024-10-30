import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Inicio'
import Funciones from './Pages/Funciones'
import Trigonometria from './Pages/Trigonometria'
import Matrices from './Pages/Matrices'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/funciones" element={<Funciones/>} />
          <Route path="/trigonometria" element={<Trigonometria/>} />
          <Route path="/matrices" element={<Matrices/>} />
        </Routes>
      </BrowserRouter>
        
    </div>
  )
}
export default App
