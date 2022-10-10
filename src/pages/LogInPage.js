import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./formStyles.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createTheme, ThemeProvider } from '@mui/material';
import { grey, orange, red } from '@mui/material/colors';


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


function LogInPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      }; // your form submit function which will invoke after successful validation
    
      console.log(watch("example")); // you can watch individual input by pass the name of the input
      const [email, setEmail] = useState("phuong");
      const [password, setPassword] = useState("123456");

  return (
    <ThemeProvider theme={theme}>
        <div>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <LiveTvIcon sx={{ fontSize: 50 }}/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button color="inherit" style={{backgroundColor:"#FFA500", borderColor: "#FFA500", 
            fontFamily: "Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue"
    , fontSize:"16px" , color: "black", fontWeight:"bold"}}>Sign up</Button>
            </Toolbar>
        </AppBar>
        </div>

        <div id="formLogIn">
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{color:"#fff"}} >Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={(event) => setEmail(event.target.value)}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{color:"#fff"}} >Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={(event) => setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" style={{color:"#fff"}} label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{backgroundColor:"#FFA500", borderColor: "#FFA500", color:"black", fontWeight:"bold"}}>
            Submit
        </Button>
        </Form>
        </div>
    </ThemeProvider>
  );
}

export default LogInPage
