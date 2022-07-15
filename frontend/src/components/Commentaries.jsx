/* import * as React from 'react'
import { useState } from 'react'
import commentsAction from '../Redux/action/commentActions'
import { useDispatch } from 'react-redux'

function Comment({ comentarios, handleReload, itineraryId, currentUser }) { 
    const [input, setInput] = useState('')
    const [reload, setReload] = useState(false)
    const [modify, setModify] = useState()
    const dispatch = useDispatch()
    
    console.log(itineraryId)
    async function newComment(event) {

        const commentData = {
            itineraryId: itineraryId,
            comment: input,
        } 
        await dispatch(commentsAction.addComment(commentData))
        handleReload()
        setReload(!reload)
        document.querySelector("#nuevoComentario").textContent = ""
    }

    async function removeComment(id) {
        await dispatch(commentsAction.deleteComment(id))
        handleReload()
        setReload(!reload)
    }

    async function changeComment(id) {
        const value = {
            comment: modify,
        }
     //  console.log(commentData)
//  console.log(id)
await dispatch(commentsAction.modifyComment(id, value)) 
handleReload()
setNewButton(false)
setReload(!reload)
}

// async function noUser(){
//     Swal.fire({
//       icon:"error",
//       title:"You must be logged in to comment or like an itinerary"
//     })
//   };

console.log(comentarios, { currentUser})
return (
<>
   {comentarios?.map((coment) =>
       <div key={coment._id} className='cajaComentario'>

           <div className='fotoComentario'>
               <img src={coment.userId.avatar}></img>
           </div>


           <div className='bodyComment'>
               <div className='nombreComentario'>
                   <h4>{coment.userId.fullName}</h4>
               </div>

                <div className='comentario'>
                   <p>{coment.comment}</p>
               </div>  
               {currentUser?.user?.id === coment.userId._id ? (
               <div type="text" onInput={(event) =>
                   setModify(event.currentTarget.textContent)}
                   contentEditable>{coment.comment}
               </div>
               ) : <div>{coment.comment}</div>}
               {currentUser?.user?.id === coment.userId._id ? (
               <div className='botonesComents'>
                   <button id={coment._id} onClick={()=>changeComment(coment._id)} >edit comment</button>
                   <button id={coment._id} onClick={() =>
                       removeComment(coment._id)} >🗑</button>
               </div>
               ) : null}
           </div>
       </div>
   )} 
   <div>
       <h3>Ingresa aqui tu comentario...</h3>
       <div id="nuevoComentario" onInput={(event) =>
           setInput(event.currentTarget.textContent)}
           contentEditable className="card-text textComments" ></div>
       <button onClick={newComment}>send</button>
   </div>

</>

)
}


export default Comment */