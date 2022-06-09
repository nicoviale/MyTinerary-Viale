import React from 'react';
import '../components/styles.css';
import Button from '@mui/material/Button';
import {Link as LinkRouter} from "react-router-dom"

function Body () {
    return (
    <div className='Body'>
      <div>
       <p className='Titulo'>
        MYtinerary
       </p>
       <h1>Find your perfect trip, designed by insiders who know and love their cities!</h1>
       <div/>
       <LinkRouter to="/Cities">
       <Button className="buttonletsgo" variant="contained" sx={{bgcolor:'text.primary'}}>Lets Go!</Button>
       </LinkRouter>
       </div>
    </div>
  )
}

export default Body;