import React from 'react';
import '../styles/styles.css'
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"
import 'typeface-rajdhani'

function Body () {
    return (
    <div className='Body'>
      <div className='conteiner-body'>
       <p className='Titulo'>
        MYtinerary
       </p>
       <h1 className='subtitulo'>Find your perfect trip, designed by insiders who know and love their cities!</h1>
       <div/>
       <LinkRouter to="/Cities">
       <Button className="buttonletsgo" variant="contained" sx={{bgcolor:'text.primary'}}>Lets Go!</Button>
       </LinkRouter>
       </div>
    </div>
  )
}

export default Body;