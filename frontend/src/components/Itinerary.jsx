import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itinerariesAction from "../redux/actions/itinerariesAction";
import './styles.css'
import { User } from '@nextui-org/react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Activities from '../components/activities'
import likesOrDislikes from '../redux/actions/itinerariesAction'
import {IconButton} from '@mui/material'
import citiesActions from '../redux/actions/citiesActions'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Swal from 'sweetalert2'
import React from "react";
import Comments from '../components/Comments'



function Itinerary({}) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [expanded,setExpanded]= React.useState(false);
  const [reload, setReload] = React.useState(false)
  const [itinerary, setItinerary] = React.useState([])
  
 
/*   useEffect(() => {
    dispatch(itinerariesAction.getItinerariesByCity(id))
    .then(res=>setItinerary(res.data.response.itineraries))
/*     dispatch(itinerariesAction.getItineraries()); */
  /*}, [id,reload]); */

  React.useEffect(()=>{ //permite ejecutar codigo cada vez que nuestro un componente se renderice
    /* dispatch(citiesActions.getOneCity(id)) */
    dispatch(itinerariesAction.getItinerariesByCity(id))
   .then(res=>setItinerary(res.data.response.itineraries))
  },[id,reload]);
  console.log(itinerary) 
  async function likeItinerary() {
console.log(id)
    const res = await dispatch(itinerariesAction.likeDislike(id))
        setReload(!reload)
    }
 
  /*   dispatch(itinerariesAction.getOneItinerary(id)) */

    const data = useSelector((store) => store.itinerariesReducer.getOneItinerary);
 console.log(data)

const user = useSelector((store)=>store.userReducer.user)
/*   const dispatch = useDispatch(); */
/*    useEffect(() => {
     dispatch(itinerariesAction.getItinerariesByCity(id))
     dispatch(itinerariesAction.getItineraries());
   }, [id,reload]); */


/*   const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesByCity);
    console.log(itineraries); */

   const handleReload =()=>{
    setReload(!reload);
  }; 




  

/*    async function likesOrDislikes() {
    await dispatch(itinerariesAction.likeDislike(data._id))
    setReload(!reload)
  };  */

 /*  useEffect(()=>{
    props.getOneItineraryByCity(id)
    .then(response => setPlace(response.data.response.place))
  },[reload]) */ 
  async function noUser(){
    Swal.fire({
      icon:'error',
      title:'Sign in!',
    })
  };
  console.log(data)
  return (
    <>
    {itinerary?.map((data)=>
  <div className="Contenedor-Iti" key={data._id}>
    <div>
    <User className="user-iti" src={data.authorimage} name={data.author}/>
    </div>
    <div className="titulos-iti">
        <h1 className="name-iti">{data.name}</h1>
        <h2 className="description-iti">{data.description}</h2>
    </div>
    <div className="info-iti">
        <p>Price:{data.price}</p>
        <p>Duration:⌚{data.duration}</p>
        
        <IconButton aria-label= "add to favorites">
        {<div>
       
        {user?
        (<div onClick={likeItinerary}>{data.likes?.includes(user.user.id) ?
        <span style={{color: "red", fontSize: 25}} className="material-icons corazon"><FavoriteIcon/></span>:
        <span style={{fontSize: 25}} className="material-icons"><FavoriteBorderIcon/></span>}
        </div>):
          (<div onClick={noUser} style={{fontSide: 25}} className="material-icons coraBlue"><FavoriteBorderIcon/></div>)}
          <p style={{"color":"black","fontSize":30}} className=''>{data.likes?.lenght}</p>
          </div>}
  
     </IconButton>
     </div>
    <div className="hashtags-iti">
    <p>{data.hashtags}</p>
    </div>
    <div className="acordeon">
      <Accordion className="view">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Activities activities={data.activities}/>
           {console.log(data.activities)}
           
          </Typography>
        </AccordionDetails>
        <div>
        <p className="comments">Comments</p>
         <Comments comments={data.comments} itinerario={data} handleReload={handleReload}/>

         {console.log(data)}
    </div>
      </Accordion>
      </div>
    
    </div>
    )}
    </>
  );}
export default Itinerary;
