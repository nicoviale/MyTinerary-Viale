import React, { useRef } from "react";
import './styles.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import commentsActions from "../redux/actions/commentActions";
import toast from 'react-hot-toast';
import {Link as LinkRouter} from 'react-router-dom'


function AddComment({ itinerario, setChangeReload, handleReload }) {
  // console.log("ITINERARIO", itinerario)

  const user = useSelector((store) => store.userReducer.user)
  const [inputText, setInputText] = useState()
  const [itinerary, setItinerary] = useState()
  const dispatch = useDispatch()
  const inputTextElement = useRef(null)
  const [reload, setReload] = useState(false)
  const [modify, setModify] = useState()
console.log(user) 
  function handleInputText(event) {
    setInputText(event.currentTarget.textContent)
  }

  //AGREGAR COMENTARIO

  async function addCommentUser(event) {
    const commentData = {
      itineraries: itinerario._id,
      comment: inputText,
    }
    const res = await dispatch(commentsActions.addComment(commentData))
    setItinerary(res.data.message.newCommet)
    inputTextElement.current.innerText = ""
    console.log(res)
 /*    if{
      toast.success(res.data.message)
    } else {
      toast.error(res.data.message)
    } */
    handleReload()
  }

 /*  const [modify, setModify] = useState() */
  /* const dispatch = useDispatch() */


  //EDITAR COMENTARIO

  async function changeComment(id) {
    const value = {
        comment: modify,
    }
 //  console.log(commentData)
//  console.log(id)
     await dispatch(commentsActions.modifyComment(id, value)) 
     handleReload()
     setReload(!reload)
}

  /* async function modifyComment(event) {
    const commentData = {
      commentID: event.target.id,
      comment: modify,
    }
    const res = await dispatch(commentsActions.modifyComment(commentData))
    setChangeReload()

    if (res.data.success) {
      toast(res.data.message)
    } else {
      toast.error(res.data.message)
    }
  } */

  //ELIMINAR COMENTARIO

  async function deleteComment(id) {
    await dispatch(commentsActions.deleteComment(id))
    handleReload()
    setReload(!reload)
}

  return (
    <>

      <div className="comment-box-comment" style={{ display: "flex", flexDirection: "column", backgroundColor: "white" }}>

        {itinerario?.comments?.map(comment =>
          <div className="boxes" key={comment._id}>

              <div className="comments-container">
                <div className="avatar-name">
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="Remy Sharp"
                      src={comment.userId?.photo}
                      sx={{ width: 56, height: 56, margin: 2 }}
                    />
                  </Stack>
                  <div className="comment-author">{comment.userId?.firstName} {comment.userId?.lastName}</div>
                </div>
                <div className="comment-box">
                <div type="text" onInput={(event) =>setModify(event.currentTarget.textContent)} 
                            contentEditable>{comment.comment}
                        </div>
                  {/* <p>{comment.comment}</p> */}
                  </div>
                  {console.log(comment)}
                  {comment?.userId?._id === user.user?.id ?
                  
                  (<div><button id={comment._id} onClick={()=>changeComment(comment._id)} className="call-button-comment-button">Edit✏️</button>
                  <button onClick={() => deleteComment(comment._id)}  className="call-button-comment-button">Delete❌</button>
                  </div>)
                  :null
                }
              </div>
          </div>
        )}

        <div className="comment-box" ref={inputTextElement} onInput={handleInputText} contentEditable suppressContentEditableWarning={true}></div>

      </div>
      {user ?(
      <div className="comment-buttons">
        <button onClick={addCommentUser} className="call-buttonbutton">Add Comment✔️</button>
      </div>
      ):
  <div className="login-button-box">
      <p className="invitation">Log in and post your comment! 
      <LinkRouter className='logueo' to={'/SignIn'}> Sign in </LinkRouter> or
      <LinkRouter className='logueo' to={'/SignUP'}> Sign up </LinkRouter></p>
  </div>}
  </>
)}

export default AddComment