import React, { useContext } from 'react';
import { styled, alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import "./../App.css";
import { grey, orange, red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { FilmContext } from '../App';
import { logOut } from '../apis/auth';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[800],
      light: grey[700],
      dark: grey[900],
    },
    secondary: {
      main: red[400],
      light: red[300],
      dark: red[800],
    },
    warning: {
      main: orange[400]
    },
    background: {
      default: grey[900],
    },
    spacing: { xs: 2, sm: 3, md: 5 },
  },
  components: {
    // Name of the component
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "30px",
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor:"#212121"
        }
      }
    }
  },
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.black, 0.35),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.6),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
function FilmAppBar() {
  const {setSearchQuery} = useContext(FilmContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [tokenString] = React.useState(()=> JSON.parse(localStorage.getItem('token')).username);
  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileAccountOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMoreClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMoreClose = () => {
    setAnchorEl(null);
    handleMobileMoreClose();
  };

  const handleMobileMoreOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const open = Boolean(anchorMenu);
  const handleClick = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorMenu(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMore = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMoreClose}
    >
      <MenuItem onClick={()=> navigate('/home')}>{`Username: ${tokenString}`}</MenuItem>
      <MenuItem 
          onClick={()=>{
            logOut();
            navigate('/login')
          }}>Log out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMoreClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileAccountOpen} style={{display:"flex", alignItems:"center"}}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <div style={{display:"flex", alignItems:"center"}}>Profile</div>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }} id="app-bar">
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            sx={{ display: { xs: 'flex', md: 'none' } }}
            id="basic-button"
            size="large"
            edge="start"
            color="inherit"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            aria-label="show more"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu 
            id="basic-menu"
            anchorEl={anchorMenu}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
              <MenuItem onClick={() =>{navigate('/discover/1')}}>Home</MenuItem>
              <MenuItem onClick={() =>{navigate('/genres/1')}}>By Genres</MenuItem>
              {/* <MenuItem onClick={handleClose}>Favorite</MenuItem> */}
          </Menu>

          <Typography
            className="nav-item"
            sx={{ display: { xs: 'none', md: 'flex' } }}
            onClick={() =>{navigate('/discover/1')}}
          >
            <span className="nav-text">Home</span>
          </Typography>
          <Typography
            className="nav-item"
            sx={{ display: { xs: 'none', md: 'flex' } }}
            onClick={() =>{navigate('/genres/1')}}
          >
            <span className="nav-text">By Genres</span>
          </Typography>
          {/* <Typography
            className="nav-item"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <FavoriteIcon className="nav-text"/> 
            <span className="nav-text">Favorite</span>
          </Typography> */}


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter for Search"
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress = {(e)=>
                {if (e.key === "Enter" && e.target.value) {
                  setSearchQuery(e.target.value);
                  navigate(`/search/${e.target.value}`)}}
              }
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileAccountOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMoreOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMore}
    </Box>
    </ThemeProvider>
  );
}

export default FilmAppBar