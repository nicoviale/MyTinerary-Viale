import React,{useRef} from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import commentActions from "../redux/actions/commentActions";
/* import Swal from 'sweetalert2' */
import toast from 'react-hot-toast'


function Comment({comments,itinerario,handleReload}) {
 console.log(comments) 
    const user = useSelector((store)=>store.userReducer.user)
    const[inputText, setInputText] = useState()
    const[modify, setModify] = useState()
    const[itinerary, setItinerary] = useState()
 /*    const [reload, setReload] = useState(false) */
    const dispatch = useDispatch()
    const inputTextElement = useRef(null)

 /*    function handleInputText(event){
        setInputText(event.currentTarget.textContent)
    } */
/* console.log(modify) */
    async function addComment (event){
        const comments ={
            itineraries: itinerario._id,
            comment:inputText,
        }
        
        const res= await dispatch(commentActions.addComment(comments))
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

    async function modifiComment(event) {
        const commentData ={
            userId: event.target.id,
            comment: modify,
        }
        const res = await dispatch(commentActions.modifiComment(commentData))
        console.log(res, "respuesta")
        setItinerary(res.data.response.newComment)
        setModify(res.data)
        if (res.data.sucess) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }

    async function deleteComment(event) {
        const res = await dispatch(commentActions.deleteComment(event.target.id))
        console.log(res)
        setItinerary(res.data.response.deleteComment)

        if(res.data.success) {
            toast.success(res.data.message)
        } else {
            toast.error(res.data.message)
        }
    }

    return (
        <>
        <div className="comment-box-comment">
            {itinerario?.comments.map(comment =>
                <div className="boxes" key={comment._id}>
                    {comment.userId._id !== user?.id ?
                    <div className="comments-conteiner">
                        <Stack direction="row" spacing={2}>
                            <Avatar
                            alt="Remy Sharp"
                            src={comment.userId.image}
                            sx={{ width: 56, height: 56, margin: 2}}
                            />
                        </Stack>
                        <div className="comment-author">{comment.userId.firstName} {comment.userId.lastName}</div>
                        <div className="box" >
                            <p>{comment.comment}</p>
                            <button onClick={modifiComment} id={comment._id} className="call-button comment-button">Edit</button>
                            <button onClick={() => deleteComment(comment._id)} className="call-button comment-button">Delete</button>
                            </div>
                    </div>
                    :
                         
                                <div>
                                    <div className="comments-container">
                                        <div className="avatar-name">
                                        <Stack direction="row" spacing={2}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={comment.userId.photo}
                                                sx={{ width: 56, height: 56, margin: 2 }}
                                            />
                                        </Stack>
                                        <div className="comment-author">{comment.userId.firstName} {comment.userId.lastName}</div>
                                        </div>
                                        <div className="comment-box" onInput={(event) => setModify(event.currentTarget.textContent)} suppressContentEditableWarning={true} contentEditable>{comment.comment}</div>
                                    </div>
                                    <div className="comment-buttons">
                                        <button onClick={modifiComment} id={comment._id} className="call-button comment-button">Edit</button>
                                        <button onClick={deleteComment} id={comment._id} className="call-button comment-button">Delete</button>
                                    </div>
                                </div>
                            
                }
                </div> 
            )}
            {user ? 
        <>
        <div className="boxes">
        <div className="comments-container">
                            <Stack direction="row" spacing={2}>
                                <Avatar
                                alt="Remy Sharp"
                                src={user.image}
                                sx={{ width: 56, height: 56, margin: 2}}
                                />
                            </Stack>
                            <div className="comment-author">{user.firstName} {user.lastName}</div>
                            <div className="comment-box" placeholder="add a Comment" ref={inputTextElement} onInput={(event) => setInputText(event.currentTarget.textContent)} suppressContentEdittableWarning={true} contentEditable></div>
        </div>
        <div className="comment-buttons">
                                <button onClick={addComment} className="call-button comment-button">Add Comment</button>
                                </div>
                                </div>
        </>
        :
        <div className="login-button-box">
            <p>Signup and login to add a comment</p>
            </div>
        }
 </div>
        
        </>
    )
}
export default Comment