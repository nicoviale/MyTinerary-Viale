import React from 'react'
import Swal from 'sweetalert2'

import {useSelector} from 'react-redux';

export default function Alerts() {
    const sweetalert = useSelector (store => store.userReducer.snackbar.message)
    console.log(sweetalert)

    return(
        <>
        
        </>
    )
}







/* import React from 'react'
import Box from '@mui/material/Box'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert'
import {useDispatch, useSelector} from 'react-redux'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar(){
    // const [state] = React.useState({
    //     vertical: 'botton',
    //     horizontal: 'top',
    // });

    // const { vertical, horizontal} = state;


    const dispatch = useDispatch()
    const snack = useSelector(store => store.usersReducer.snackbar)
    console.log(snack)

    const handleClose = () => {
        dispatch({
            type: 'MESSAGE',
            payload: {view: false, message: '', success: false}
        })
    }
    const messagge = (
        <Box>
            {(typeof snack.message) === "string" ?
            (<p>{snack.message}</p>) :
            <div>{snack.message.map((message,index) =><p key={index}>{message.message}</p>)}</div>
            }
        </Box>
    )
    return (
        <>
        <Stack spacing={2} sx={{ width: '100%'}}>
            <Snackbar
            // anchorOrigin={{ vertical, horizontal }}
            open={snack.view}
            autoHideDuration={3000}
            onClose={handleClose}
            message={
                <Alert onClick={handleClose} severity="info" sx={{ width: '100%' }}>
                    {messagge}
                </Alert>
            }
            />
        </Stack>
        </>
    )
  } */