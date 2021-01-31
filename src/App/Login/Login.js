import React, {useState} from 'react'
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from "../../action";
import AuthService from "../../services/auth.service";


function Login() {
     
    const [show,setShow]= useState(true);
    const toggel =! show;
    const ToggelButton = (show) => setShow(toggel);
   
     const signup = (username,email,password,imageUrl) => (dispatch) => {
        return AuthService.signup(username, email, password,imageUrl).then(
          (data) => {
            dispatch({
              type: SIGNUP_SUCCESS,
              payload: {user: data}
            });
      
           
            return Promise.resolve();
          },
          (error) => {
            const message = (error.response && error.response.data ).toString();
      
            dispatch({
              type: SIGNUP_FAIL,
              payload: message
            });
      
            
      
            return Promise.reject();
          }
        );
      };
      
       const login = (email, password) => (dispatch) => {
        return AuthService.login(email, password).then(
          (data) => {
            dispatch({
              type: LOGIN_SUCCESS,
              payload: { user: data },
            });
      
            return Promise.resolve();
          },
          (error) => {
            const message =(error.response && error.response.data ).toString();
      
            dispatch({
              type: LOGIN_FAIL,
              payload: message
            });
      
           ;
      
            return Promise.reject();
          }
        );
      };
      
  
    

    return (
        <div className="login">
            <Button onClick={ToggelButton} className="changeButton">Change</Button>
            {show ? <div className='login__page'>
            <Form>
               <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
             </Form.Group>

            <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
           </Form.Group>
            
            <Button variant="primary" type="submit" onClick={login}>
              Login
             </Button>
          </Form>
              
              
            </div> : 
            <div className="signup__page">
              <Form>
              <Form.Group controlId="formBasicusername">
                   <Form.Label>username</Form.Label>
                   <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
               
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>imageUrl</Form.Label>
                <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                   
               <Button variant="primary" type="submit" className="submitButton" onClick={signup}>
                   Submit
                </Button>
             </Form>

            </div> }
            
            
        </div>
    )
}

export default Login;
