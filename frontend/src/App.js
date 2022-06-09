
import './App.css';
import NavBar from './components/NavBar.jsx';

import "swiper/css/bundle";
import {Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Index from './pages/Index';
import Cities from './pages/Cities';
import Carrousel from './components/Carrousel';
import Body from './components/Body';




function App() {
  return (
    <div className="App">
     <NavBar/>
     <Body/>
     <Carrousel/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Cities" element={<Cities/>}/>

        </Routes >
        <Footer/>
    </div>
  );
}

export default App;
