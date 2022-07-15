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
import { IconButton } from '@mui/material'
import citiesActions from '../redux/actions/citiesActions'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Swal from 'sweetalert2'
import React from "react";
import Comments from '../components/Comments';
import toast from 'react-hot-toast';


function Itinerary({ setChangeReload }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [reload, setReload] = React.useState(false)
  const [itinerary, setItinerary] = React.useState([])
  const user = useSelector((store) => store.userReducer.user)
  console.log(user)
  /*   useEffect(() => {
      dispatch(itinerariesAction.getItinerariesByCity(id))
      .then(res=>setItinerary(res.data.response.itineraries))
  /*     dispatch(itinerariesAction.getItineraries()); */
  /*}, [id,reload]); */

  React.useEffect(() => { //permite ejecutar codigo cada vez que nuestro un componente se renderice
    /* dispatch(citiesActions.getOneCity(id)) */
    dispatch(itinerariesAction.getItinerariesByCity(id))
      .then(res => setItinerary(res.data.response.itineraries))
  }, [id, reload]);
  console.log(itinerary)
  /*   async function likeItinerary() {
  console.log(id)
      const res = await dispatch(itinerariesAction.likeDislike(id))
          setReload(!reload)
      } */
  function loginPlease() {

    return (
      toast.error("login Please")
    )
  }

  async function likesOrDislikes(itineraryId) {
    /* console.log(id) */
    const res = await dispatch(itinerariesAction.likeDislike(itineraryId))
    console.log(res)
    if (res.data.success) {
      toast.success(res.data.message)
    } else {
      toast.error("🥲")
    }
  
    setReload(res)
  }


  /*   dispatch(itinerariesAction.getOneItinerary(id)) */

  const data = useSelector((store) => store.itinerariesReducer.getOneItinerary);
  console.log(data)


  /*   const dispatch = useDispatch(); */
  /*    useEffect(() => {
       dispatch(itinerariesAction.getItinerariesByCity(id))
       dispatch(itinerariesAction.getItineraries());
     }, [id,reload]); */


  /*   const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesByCity);
      console.log(itineraries); */

  const handleReload = () => {
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
  async function noUser() {
    Swal.fire({
      icon: 'error',
      title: 'Sign in!',
    })
  };
  console.log(data)
  return (
    <>
      {itinerary?.map((data) =>
        <div className="Contenedor-Iti" key={data._id}>
          <div>
            <User className="user-iti" src={data.authorimage} name={data.author} />
          </div>
          <div className="titulos-iti">
            <h1 className="name-iti">{data.name}</h1>
            <h2 className="description-iti">{data.description}</h2>
          </div>
          <div className="info-iti">
            <p>Price:{data.price}</p>
            <p>Duration:⌚{data.duration}</p>

            {user ?
          <IconButton onClick={()=>likesOrDislikes(data._id)} aria-label="add to favorites">
            {data?.likes.includes(user.user.id) ?
              <FavoriteIcon style={{ color: 'red' }} />
              :
              <FavoriteBorderIcon />}
            <Typography>{data.likes.length} likes</Typography>
          </IconButton>
          :
          <IconButton onClick={noUser} aria-label="add to favorites">
            <FavoriteBorderIcon />
            <Typography>{data.likes.length} likes</Typography>
          </IconButton>
        }
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
                  <Activities activities={data.activities} />
                  {/*   {console.log(data.activities)} */}

                </Typography>
              </AccordionDetails>
              <div>
                <p className="comments">Comments</p>
                <Comments comments={data.comments} itinerario={data} handleReload={handleReload} />

                {/*  {console.log(data)} */}
              </div>
              <div className='contenedorComentarios'>
          
              
          </div>
            </Accordion>           
          </div>

        </div>
      )}
    </>
  );
}
export default Itinerary;
