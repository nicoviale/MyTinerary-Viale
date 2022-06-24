const Itinerary = require ('../models/itinerary')



const itinerarisControllers ={

    addItinerary: async (req, res) => {
        const {name,author,authorimage,description, price,duration,hashtags,likes,activities,city} = req.body
        let itineraries
        let error = null
        try {
            itineraries = await new Itinerary({
                name: name,
                author:author,
                authorimage:authorimage,
                description:description,
                price:price,
                duration: duration,
                hashtags:hashtags,
                likes:likes,
                activities:activities,
                city:city
            }).save()
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    },
    getOneItinerary: async (req, res) => {
        const id = req.params.id
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.findOne({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : { itineraries },
            success: error ? false : true,
            error: error
        })
    },
    modifyItinerary: async (req, res) => {
        const id = req.params.id
        const itineraries = req.body
        let citydb
        let error = null
        try {
            citydb = await Itinerary.findOneAndUpdate({ _id: id }, itineraries, { new: true })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerariesdb,
            success: error ? false : true,
            error: error
        })
    },
    multiplesItineraries: async (req, res) => {
        let itineraries = []
        const data = req.body.data //almaceno en la constante data la informacion que le pedi al body
        let error = null
        try {
            data.map(async (item) => {
                await new Itinerary({
                    name: item.name,
                    author:item.author,
                    authorimage:item.authorimage,
                    description: item.description,
                    price:item.price,
                    duration: item.duration,
                    hashtags: item.hashtags,
                    likes: item.likes,
                    activities:item.activities,
                }).save()
            })
        } catch (err) { error = err }
        itineraries = await Itinerary.find()
        res.json({
            response: error ? "ERROR" : itineraries,
            success: error ? false : true,
            error: error
        })
    },
    getItineraries: async(req, res) =>{
        let itineraries
        let error = null
        try{
            itineraries = await Itinerary.find().populate("city")
        } catch (err) {error = err}
        res.json({
            response: error ? 'ERROR' : (itineraries), 
            success: error ? false : true,
            error: error
        })
    },
    removeItinerary: async (req, res) => {
        const id = req.params.id
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.findOneAndDelete({ _id: id })
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itineraries,
            success: error ? false : true,
            error: error
        })
    },
    getItinerariesByCity: async (req,res) => {
        const id = req.params.id
        let itineraries
        let error = null
        try {
            itineraries = await Itinerary.find({ city : id }).populate("city")
        } catch (err) {
            error = err
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error
        })
    },
}
module.exports = itinerarisControllers