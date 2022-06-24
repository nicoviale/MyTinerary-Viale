import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {Link as LinkRouter} from "react-router-dom";
import Button from '@mui/material/Button';
//import axios from "axios"
import '../styles/styles.css'
import 'typeface-rajdhani'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import { useSelector } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesAction"
import Itinerary from "../components/Itinerary"


export default function DetailPages () {

   // const [city, setCity]=useState ({})

    const {id} = useParams()
    const dispatch = useDispatch()


  useEffect(() =>{
    dispatch(itinerariesActions.readItineraries(id))
  },[])
  useEffect(()=> {
    dispatch(citiesActions.getOneCity(id))
    // eslint-disable-next-line
  },[]);

 //   {axios.get(`http://localhost:4000/api/cities/${id}`)
 //   .then(response=>(setCity(response.data.response.city)))
   // },[id])
//console.log(id)
//console.log(city)
const city = useSelector((store) => store.citiesReducer.getOneCity);
console.log(city)
const itinerary = useSelector((store) => store.itinerariesReducer.readItineraries);
console.log(itinerary)
return (
    <div className="conteiner-details">

   <Card sx={{ maxWidth: "660px",width:"660px",height: "600px",margin:"10px" }} className="card-detail">
    <CardMedia
          component="img"
          height="300"
          image={city.image}
          alt="img"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" fontFamily="Rajdhani,sans-serif" fontSize="25px" font-weight-bold>
          {city.country}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily="Rajdhani,sans-serif">
          {city.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" fontFamily="Rajdhani,sans-serif" font-weight-bold>
          {city.description}
          </Typography>
        </CardContent>
        <CardActions>          
  {/*  {itineraries.length > 0 ? <Itinerary.map(itinerary => key=(itinerary._id) data={itineraries}/> : <p>NO ITINERARIES</p>} */}
        <LinkRouter to={`/cities`}>
          <Button className='button-card' size="small">Back To Cities</Button>
          </LinkRouter>
        </CardActions>
      </Card>
      
      <Itinerary/>
      </div>
     )
    }


