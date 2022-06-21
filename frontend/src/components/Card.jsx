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
