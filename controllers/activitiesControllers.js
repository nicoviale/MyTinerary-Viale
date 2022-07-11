const Activities = require('../models/activities')

const activityController = { 

    getActivities: async (req,res) => { 
        let activities 
        let error = null 
        try { 
            activities = await Activities.find()
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    },

    uploadActivity: async (req,res) => {
        const {title,image} = req.body
        new Activities ({title,image}).save()
        .then(response => res.json({response}))
    },

    deleteAct: async (req,res) => {
        const id = req.params.id
        await Activities.findOneAndDelete({_id:id})
    },

    modifyAct: async (req,res) => {
        const id = req.params.id
        const acts = req.body
        await Activities.findOneAndUpdate({_id:id},acts)
    },

    oneActivity: async (req,res) => { 
        let activityId = req.params.id 
        let activity 
        let error = null
        try { 
            activity = await Activities.findOne({_id:activityId}) 
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activity}, 
            success: error ? false:true, 
            error: error 
        })
    },

    findActFromTin: async (req,res) => { 
        let itineraryId = req.params.id
        //console.log(itineraryId)
        let activities 
        let error = null
        try { 
            activities = await Activities.find({itinerary:itineraryId}) 
            //console.log(activities)
        } catch (err) {
            error = err
            console.log(error)
        } 
        res.json({ 
            response: error ? 'ERROR' : {activities}, 
            success: error ? false:true, 
            error: error 
        })
    }

}

module.exports = activityController