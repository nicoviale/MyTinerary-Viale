const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')
const userControllers = require('../controllers/userControllers')
const {signUpUsers,signInUser} = userControllers;
const validator = require('../config/validator')

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
const sendVerification = require('../controllers/sendEmail');
 const {verifyToken,verifyMail,signOut} = require('../controllers/userControllers');
 const passport = require ('../config/passport')
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

Router.route("/auth/signUp")
.post(validator, signUpUsers)
Router.route("/auth/signIn")
.post(signInUser)

/* Router.route("/verify/:string")
.get(sendVerification) */

Router.route("/auth/signOut")
.post(signOut)

Router.route("/verify/:string")
.get(verifyMail)

 Router.route('/auth/verifyToken')
.get(passport.authenticate('jwt', {session:false}), verifyToken)

module.exports= Router