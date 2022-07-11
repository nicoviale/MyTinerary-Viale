import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import userActions from '../redux/actions/userActions';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {Link as LinkRouter, useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch, useSelector} from 'react-redux'
import logo from '../images/GrisTextura.png'
/* import user from '../images/user.png' */
import '../styles/styles.css'
import usersReducer from '../redux/reducers/userReducer';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person'


const pages = ['Home', 'Cities'];
const settings = [ 'SignIn', 'SignUp'];

let userOptions = [
  {to: '/SignIn', name: 'Sign In'},
  {to: '/SignUp', name: 'Sign Up'}
]

const NavBar = () => {
  const user = useSelector (store => store.userReducer.user)
  console.log(user)
  function signOut (){
    dispatch(userActions.signOut())
    navigate()
  }
  const navigate = useNavigate ()
  const dispatch = useDispatch ()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function signOutClick() {
    dispatch(userActions.signOutUser())
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <img src={logo} alt="Imagen logo" style={{ width: "100px" }} />
                    </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                  <LinkRouter to={page}> {page} </LinkRouter>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width:"100vw", justifyContent:"center", padding:1 }} >
                        <img src={logo} alt="Imagen logo" style={{ width: "200px" }} />
                    </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <LinkRouter to={page}> {page} </LinkRouter>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                {user ? <Avatar alt="photoUser" src={user.user.photo} sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'rgb(105,24,152)',
                  backgroundColor: 'rgb(224,224,224)',
                  textDecoration: 'none',
                  borderRadius: '20px'}} /> :
                <PersonIcon sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'rgb(105,24,152)',
                  backgroundColor: 'rgb(224,224,224)',
                  textDecoration: 'none',
                  borderRadius: '20px'}} />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                <Box>
                  <LinkRouter to={`/profile/${user.user.id}`}>
                    <MenuItem sx={{'&:hover': {bgcolor: 'rgb(224,224,224)'}}} onClick={handleCloseUserMenu}>
                      <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)'}}>{user.user.firstName.charAt(0).toUpperCase()+user.user.firstName.slice(1).toLowerCase()}</Typography>
                    </MenuItem>
                  </LinkRouter>
                  <MenuItem sx={{'&:hover': {bgcolor: 'rgb(224,224,224)'}}} onClick={handleCloseUserMenu}>
                    <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)'}} onClick={signOut}>Sign Out</Typography>
                  </MenuItem>
                </Box>
              ) : userOptions.map((everyOption,index) => (
                <LinkRouter key={index} to={everyOption.to} onClick={handleCloseUserMenu}>
                  <MenuItem sx={{'&:hover': {bgcolor: 'rgb(224,224,224)'}}}>
                        <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)'}}>{everyOption.name}</Typography>
                  </MenuItem>
                </LinkRouter>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
