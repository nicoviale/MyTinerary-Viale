import './App.css'
import NavBar from './components/NavBar.jsx'

import "swiper/css/bundle"
import {Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Index from './pages/Index'
import Cities from './pages/Cities'
import Error from './pages/Error'

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Index" element={<Index/>}/>
          <Route path="/Home" element={<Index/>}/>
          <Route path="/Cities" element={<Cities/>}/>
          <Route path='/*' element={<Error />} />
        </Routes >
        <Footer/>
    </div>
  )
}

export default App
