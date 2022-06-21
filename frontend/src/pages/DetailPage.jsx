import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Link as LinkRouter} from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios"
import '../styles/styles.css'
import 'typeface-rajdhani'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function DetailPages () {

    const [city, setCity]=useState ({})

    const {id} = useParams()


    useEffect(()=>
    {axios.get(`http://localhost:4000/api/cities/${id}`)
    .then(response=>(setCity(response.data.response.city)))
    },[id])
console.log(id)
console.log(city)


return (
    <div className="conteiner-details">
   <Card sx={{ maxWidth: 350,width:"450px",height: "800px",margin:"20px" }} className="card">
    <CardMedia
          component="img"
          height="300"
          image={city.image}
          alt="img"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
          {city.country}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontfamily="Rajdhani,sans-serif">
          {city.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          {city.description}
          </Typography>
        </CardContent>
        <CardActions>
        <LinkRouter to={`/cities`}>
          <Button className='button-card' size="small">Back To Cities</Button>
          </LinkRouter>
        </CardActions>
      </Card>
      </div>
     )
    }


