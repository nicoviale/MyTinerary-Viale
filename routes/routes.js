const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')



const {getCities, getOneCity, addCity,modifyCity,multiplesCities, removeCity} =citiesControllers;




Router.route ('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

Router.route("/multiplesCities")
.post(multiplesCities)

//rutas itineraries
const itinerariesControllers = require ('../controllers/itinerariesControllers');
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, multiplesItineraries, getItinerariesByCity} =itinerariesControllers;
Router.route ('/itinerary')
.get(getItineraries)
.post(addItinerary)

Router.route('/itinerary/:id')
.delete(removeItinerary)
.put(modifyItinerary)
.get(getOneItinerary)

Router.route("/multiplesItinerary")
.post(multiplesItineraries)

Router.route("/itinerariesbyCity/:id")
.get(getItinerariesByCity)






module.exports= Router