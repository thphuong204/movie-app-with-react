import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./formStyles.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div>
        {/* AppBar */}
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
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Button color="inherit">Login</Button>
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
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>
    </div>
  );
}

export default LogInPage

