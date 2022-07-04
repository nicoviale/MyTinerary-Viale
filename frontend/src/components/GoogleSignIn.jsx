import {useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useDispatch} from 'react-redux'
import {IconButton} from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import userActions from '../redux/actions/userActions'

export default function GoogleSignIn() {
    
    const dispatch = useDispatch()

    async function handleCallbackResponse(response) {
        //console.log(response.credential)
        let userObject = jwt_decode(response.credential)
        //console.log(userObject)
        dispatch(userActions.signInUser({
            firstName: userObject.given_name,
            lastName: userObject.family_name, 
            photoUser: userObject.picture, 
            email: userObject.email, 
            password: userObject.jti, 
            /* role: 'user',  */
            from: 'google'
        }))
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '405711954042-f8r03ad637h562982h0iele942qg6lfg.apps.googleusercontent.com',
            callback: handleCallbackResponse})
        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            { theme: "outline", size: "medium" })
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