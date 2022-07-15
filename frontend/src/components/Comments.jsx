import React, { useRef } from "react";
import './styles.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import commentsActions from "../redux/actions/commentActions";
import toast from 'react-hot-toast';
/* import Comment from "./Commfdfsfsfsfsent" */


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
    if (res.success) {
      toast.success(res.data.message)
    } else {
      toast.error(res.data.message)
    }
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

            {/* SI EL USUARIO NO ES EL QUE HIZO EL COMENTARIO */}
            

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
                  {comment.userId?._id === user.user?.id ?
                  
                  (<div><button id={comment._id} onClick={()=>changeComment(comment._id)} className="call-button comment-button">EDIT✏️</button>
                  <button onClick={() => deleteComment(comment._id)}  className="call-button comment-button">DELETE❌</button>
                  </div>)
                  :null
                }
              </div>

              
 
             {/*  <Comment comment={comment} setChangeReload={setChangeReload} /> */}

            
          </div>
        )}

        <div className="comment-box" ref={inputTextElement} onInput={handleInputText} contentEditable suppressContentEditableWarning={true}></div>

      </div>
      <div className="comment-buttons">
        <button onClick={addCommentUser} className="call-button comment-button">ADD✔️</button>
      </div>
    </>

  )
}

export default AddComment

/* { CONDICION USUARIO LOGUEADO }

  {user ?
                    <>
                        <div className="boxes">
                            <div className="comments-container">
                                <div className="avatar-name">
                                <Stack direction="row" spacing={2}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={user.photo}
                                        sx={{ width: 56, height: 56, margin: 2 }}
                                    />
                                </Stack>
                                <div className="comment-author">{user.firstName} {user.lastName}</div>
                                </div>







                               
                    </>
                    :
                    <div className="login-button-box">
                        <p className="invitation"> LOG IN AND LEAVE US A COMMENT!! ✈️</p>
                    </div>
                } */