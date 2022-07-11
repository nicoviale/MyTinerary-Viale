const Router = require('express').Router()
const citiesControllers = require('../controllers/citiesControllers')
const userControllers = require('../controllers/userControllers')
const {signUpUsers,signInUser} = userControllers;
const validator = require('../config/validator')
const activitiesControllers = require('../controllers/activitiesControllers');
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
/* const sendVerification = require('../controllers/sendEmail'); */
 const {verifyToken,verifyMail,signOut} = require('../controllers/userControllers');
 const passport = require ('../config/passport');
 const {getActivities,uploadActivity,deleteAct,modifyAct,oneActivity,findActFromTin} = activitiesControllers;
const {getItineraries, getOneItinerary, addItinerary, modifyItinerary, removeItinerary, multiplesItineraries, getItinerariesByCity,likeDislike} =itinerariesControllers;
const commentControllers = require('../controllers/commentControllers');
const{addComment,modifiComment,deleteComment} = require('../controllers/commentControllers');

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

Router.route('/activities')
.get(getActivities)
.post(uploadActivity)

Router.route('/activities/:id')
.delete(deleteAct)
.put(modifyAct)
.get(oneActivity)

Router.route('/activities/tineraries/:id')
.get(findActFromTin)

Router.route('/tineraries/likeDislike/:id')
.put(passport.authenticate('jwt', {session:false}), likeDislike)

Router.route('/tineraries/comment')
.post(passport.authenticate('jwt', {session: false}), addComment)


Router.route('/tineraries/comment/:id')
.post(passport.authenticate('jwt', {session: false}), deleteComment)
.put(passport.authenticate('jwt', {session: false}), modifiComment) 

module.exports= Router