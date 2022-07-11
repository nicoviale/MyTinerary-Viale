const mongoose= require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name:{type:String,required: true},
    author:{type:String,required: true},
    authorimage:{type:String,required: true},
    description:{type:String, required:true},
    price:{type:String,required: true},
    duration:{type:String,required: true},
    hashtags:{type:Array,required: true},
    likes:[{type:mongoose.Types.ObjectId, ref:"users"}],
    comments: [{
        userId: {type:mongoose.Types.ObjectId, ref:'users'},
        comment: {type: String}      
    }],
    activities:[{type:mongoose.Types.ObjectId, ref:'activities'}],
    city: {type:mongoose.Types.ObjectId,ref:"cities"}
})

const Itinerary = mongoose.model('itineraries', itinerarySchema)
module.exports = Itinerary