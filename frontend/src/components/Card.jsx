import * as React from 'react'
import Grid from '@mui/material/Grid'
import {Link as LinkRouter} from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/styles.css'
import 'typeface-rajdhani'


 function MediaCard({cityFilter}) {
    
    return cityFilter.map((city) =>{
        
        return (
            <div className='conteiner'>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
               <Card sx={{ maxWidth: 350,width:"351px",height: "400px",margin:"10px" }} className="card">
        <CardMedia
          component="img"
          height="250"
          
          image={city.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {city.country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {city.name}
          </Typography>
        </CardContent>
        <CardActions>
        <LinkRouter to={`/city/${city._id}`}>
          <Button className='button-card' size="small">More Details</Button>
          </LinkRouter>
        </CardActions>
      </Card>
      </Grid>
      </Grid>
      </div>
    );
        });
        
  }

export default MediaCard





/*export default function Card({cityFilter}) {
    console.log(cityFilter)
    return (
        <>
        {cityFilter.map(Data =>(
        <div className='contenido' id='card'>
            <img src={Data.image} alt=''/>
            <div className='card-group mt-3'>
                <h4 className='card-title'> {Data.country} </h4>
                <p className='card-text text-secondary'> {Data.name} </p>
                </div>
        </div>
        ))}
        
        </>
    )
}*/









/*export default function Card({cityFilter}) {
    console.log(cityFilter)
    return (
        <>
        {cityFilter.map(Data =>(
            <div className='card' key={Data._id}>
                <div className='cards'>
                <img src={Data.image} alt='img'/>
                <h3>{Data.country}</h3>
                         <div>
                    <h3>{Data.name}</h3>
                    
                </div>
                <div className='link'>
                <LinkRouter to={`/city/${Data._id}`}>
                <Button variant="contained" color="success"> Details </Button>
                </LinkRouter>
                </div>
                
            </div>
            </div>
        ))}
        
        </>
    )
}*/
