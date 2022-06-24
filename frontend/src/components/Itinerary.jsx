import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import itinerariesAction from "../redux/actions/itinerariesAction";
import './styles.css'
import { User } from '@nextui-org/react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Itinerary({ data }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(itinerariesAction.getItinerariesByCity(id));
  }, []);
  const itineraries = useSelector(
    (store) => store.itinerariesReducer.getItinerariesByCity
  );
  console.log(itineraries);

  return (
    <>
    
    {itineraries?.map((itinerary) => (
  <div className="Contenedor-Iti" key={itinerary._id}>
    <div>
    <User className="user-iti" src={itinerary.authorimage} name={itinerary.author}/>
    </div>
    <div className="titulos-iti">
        <h1 className="name-iti">{itinerary.name}</h1>
        <h2 className="description-iti">{itinerary.description}</h2>
    </div>
    <div className="info-iti">
        <p>{itinerary.price}</p>
        <p>⌚{itinerary.duration}</p>
        <p>💖{itinerary.likes}</p>
    </div>
    <div className="hashtags-iti">
    <p>{itinerary.hashtags}</p>
    </div>
    <div className="acordeon">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>View More</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Activities Coming Soon!
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
    
))}
    </>
  );
}
export default Itinerary;
