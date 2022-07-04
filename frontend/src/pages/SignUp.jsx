import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch} from 'react-redux';
import userActions from "../redux/actions/userActions"
import {useState} from 'react'
import Select from '@mui/material/Select'
import axios from "axios"
import MenuItem from '@mui/material/MenuItem'
import GoogleSignUp from '../components/GoogleSignUp'
import {useNavigate} from 'react-router-dom'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/Home">
      MyTinerary
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {


  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [country, setCountry] = useState([]);

  React.useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((res) => setCountry(res.data))
  },[])


  
    const handleSubmit = (event) => {
        
      event.preventDefault();
      console.log(event)
      const userData = {
          firstName: event.target[0].value,
          lastName: event.target[2].value,
          country: event.target[4].value,
          email: event.target[6].value,
          photo: event.target[8].value,
          password: event.target[10].value,
          from: "form-signup",
      }
      console.log(userData)
      const res= dispatch(userActions.signUpUser(userData)) 
      if (res.success) {
        navigate('/SignIn')
      }
      event.target[0].value = ""
      event.target[2].value = ""
      event.target[4].value = ""
      event.target[6].value = ""
      event.target[8].value = ""
      event.target[10].value = ""
  };



  return (
    <ThemeProvider theme={theme}>
      <Container className='container-signup' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{ 
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <Select 
                  required
                  fullWidth
                  id="country"
                  label="Country"
                  name="country"
                  autoComplete="country"
                  defaultValue=""
                >
                  <MenuItem value="">
                  </MenuItem>
                {
                  country.map((country,index) =><MenuItem key={index} value={country.name.common}>{country.name.common}</MenuItem>)
                }
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="photo"
                  label="URL Image"
                  name="photo"
                  autoComplete="photo"
                />
              </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignIn" href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
                <GoogleSignUp />
              </Grid>
            
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}