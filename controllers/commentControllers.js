const Itinerary = require('../models/itinerary')

const commentsControllers = {

    addComment: async (req, res) => {
        const {itineraries,comment} = req.body.comments
        const user = req.user._id
        try {
            const nuevoComment = await Itinerary.findOneAndUpdate({_id:itineraries}, {$push: {comments: 
                {userId: user, comment: comment}}}, {new: true}).populate("comments.userId", {lastName:1, firstName:1, photo:1})
            console.log(nuevoComment)  
                res.json({ success: true,
                    response: nuevoComment.comments, 
                    message:"gracias por dejarnos tu comentario" })
        }
        catch (error) {
            
            console.log(error)
            res.json({
                success: false, 
                message: "Algo a salido mal intentalo en unos minutos",
                console:console.log(error) })
        }

    },
    modifiComment: async (req, res) => {
        const {comment} = req.body.comments
        const {id} = req.params
       /*  const user = req.user._id */
        try {
            const modifyComment = await Itinerary.findOneAndUpdate({"comments._id":id}, {$set: {"comments.$.comment": comment }}, {new: true})
            /* console.log(modifiComment) */
            res.json({ success: true, response:{modifyComment}, message:"tu comentario a sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id 
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({"comment._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
          console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "has eliminado el comentario" })

        }
        catch (error) {
            console:console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos",console:console.log(error) })
        }

    },
    
}
module.exports = commentsControllers