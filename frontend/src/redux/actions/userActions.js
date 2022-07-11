import axios from 'axios'
import Swal from 'sweetalert2'

const userActions = {
    signUpUser: (userData) => {
        console.log(userData)
        return async (dispatch, getState) => {
            try{
            const res = await axios.post('http://localhost:4000/api/auth/signUp', {userData})
            console.log(res)
            if(res.data.success === false) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: [res.data.message[0].message, res.data.message[1].message, res.data.message[2].message, res.data.message[3].message,res.data.message[4].message, res.data.message[5].message,]
                })
            } else {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 2500
                })
            }
                
            
            dispatch({type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        } catch(error) {
            console.log(error)
        }
    }
},

signInUser: (logedUser) => {
    console.log(logedUser)
    return async(dispatch, getState) => {
        try {
            const res = await axios.post('http://localhost:4000/api/auth/signIn',{logedUser})
            console.log(res)
            if (res.data.success) { //si es true
                localStorage.setItem('token',res.data.response.token) //toma el token y lo manda la localstorage
                console.log(localStorage.getItem('token'))
                Swal.fire({
                    icon:'error',
                    title:'Error',
                    text: res.data.message,
                })
                dispatch({type: 'user', payload: res.data.response.userData})
            } else {
                dispatch({type: 'message',
                    payload: {                        
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
            return (res.data)
        } catch(error) {
            console.log(error)
        }
    }
},

signOut: (email) => {
    return async (dispatch, getState) =>{
        localStorage.removeItem('token')
        dispatch({
            type: 'user',
            payload: null
        })
    }
},
verifyToken: (token) => {
    return async (dispatch, getState) => {
        //console.log(token)
        const user = await axios.get('http://localhost:4000/api/auth/verifyToken',
        {headers: {'Authorization': 'Bearer '+token}} )
        //console.log(user)
        .then(user =>{if
            (user.data.success) {
                dispatch({
                    type: 'user',
                    payload: user.data.response
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
            });
            } else {
                localStorage.removeItem('token')
            }
        }
        ).catch(error => {
            if(error.response.status === 401)
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: "Your token is expired, please sign in again",
                        success: false
                    }
                })
        localStorage.removeItem('token')})
    }
   }
}

export default userActions