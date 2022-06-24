import './App.css'
import NavBar from './components/NavBar.jsx';

import "swiper/css/bundle";
import {Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Index from './pages/Index';
import Cities from './pages/Cities';
import Error from './pages/Error';
import ScrollToTop from "react-scroll-to-top";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import DetailPage from './pages/DetailPage';
import {useEffect} from "react";
import citiesActions from './redux/actions/citiesActions';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch()
  useEffect (()=>{
    dispatch(citiesActions.getCities())
    // eslint-disable-next-line
  },[]);
  
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Index" element={<Index/>}/>
          <Route path="/Home" element={<Index/>}/>
          <Route path="/Cities" element={<Cities/>}/>
          <Route path="/city/:id" element={<DetailPage/>} />
          <Route path='/*' element={<Error />} />
        </Routes >
        <Footer/>
        <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        component={<ArrowCircleUpIcon/>}
      />
    </div>
  )
}


export default App;
