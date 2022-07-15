import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {IconButton} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import userActions from '../redux/actions/userActions'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function GoogleSignIn() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function handleCallbackResponse(response) {
        //console.log(response.credential)
        let userObject = jwt_decode(response.credential)
        //console.log(userObject)
        
        const logedUser={
             
            email: userObject.email, 
            password: userObject.jti, 
            /* role: 'user',  */
            from: 'google'
        }
  const res = await dispatch(userActions.signInUser(logedUser))
        console.log(res.message)
    if (res.success) {
        toast.success(res.message)
        navigate('/')      
    }else{
        toast.error(res.message)
    }}
 

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '639195332530-2igeumf6ko9hqaagnl1b676h8nqdhl3g.apps.googleusercontent.com',
            callback: handleCallbackResponse})
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium", locale:'en'})
    })

    return (
        <div>
            <div id='buttonDiv'>
{                <IconButton sx={{bgcolor: 'rgb(165, 126, 196)', color: 'white', height: '40px', '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'}}}>
                    <GoogleIcon />
                </IconButton>}
            </div>
        </div>
    )
}