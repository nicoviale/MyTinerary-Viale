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
                    message:"thanks for comment!" })
        }
        catch (error) {
            
            console.log(error)
            res.json({
                success: false, 
                message: "try again!",
                console:console.log(error) })
        }

    },
    /* modifyComment: async (req, res) => {
        console.log(req.body)
        const {comment} = req.body;
        const user = req.user._id;
  
        try {
          const newComment = await Itinerary.findOneAndUpdate(
            { "comments._id": req.body.commentID },{ $set: { "comments.$.comment": req.body.comment }}, { new: true }).populate("comments.userId", {firstName:1, lastName:1, image:1});
  
          res.json({
            success: true,
            response: { newComment },
            message: "Your comment has been modified ✏️",
          });
          console.log(newComment)
        } catch (error) {
          console.log(error);
          res.json({
            success: true,
            message: "Something went wrong please try again in a few seconds",
          });
        }
      },
  */
      modifyComment: async (req, res) => { 
       /*  console.log(req.body); */
        const { comment } = req.body.value
        const {id} = req.params
       /*  console.log(comment, id) */
        //const user = req.user._id 
        /* console.log("CONSOLECOMENTARICONTROLLERS",comment); */
        try {
            //un pedido donde me va a igualar con un await para buscarme el contenido
            const modifyComment = await Itinerary.findOneAndUpdate({"comments._id":id},
             {$set: {"comments.$.comment": comment}}, {new: true}) /* me devuelve el nuevo dato */
         
            res.json({ success: true, response:{modifyComment}, message:"Your comment has been modified" })
        }
        catch (error) {
            /* console.log("PASOPORELCATCH",error) */
            res.json({ success: false, message: "Something went wrong, try again in a few minutes", console:console.log(error) })
        }
    }, 

    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({"comments._id": id}, {$pull:{comments: {_id: id}}}, {new: true}).populate("comments.userId", {firstName:1, lastName:1, image:1})
            // console.log(deleteComment)
            res.json({success: true, response: {deleteComment}, message: "Your comment has been deleted! 🗑️"})
        }
        catch(error) {
            console.log(error)
            res.json({success: false, message: "Oops! Something went wrong, try in a few minutes"})
        }
    },

    
}
module.exports = commentsControllers