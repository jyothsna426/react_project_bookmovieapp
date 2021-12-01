import React,{useState} from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './Register.css';
import validation from '../../validation';
import {ValidatorForm } from 'react-material-ui-form-validator';
const Register = () => {

    const[values,setValues]=useState({
        firstName:"",
        lastName:"",        
        email:"",
        password:"",
        contactNo:"",
    });
    const[errors,setErrors] =useState({});
    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,

        });
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <>
            <Grid>
                <Paper  className="paperStyle">
                    <Grid align='center'></Grid>             
                    
                    <form>
                        <div className="register">
                            <TextField variant="standard" name="firstName"  placeholder="First Name*"  onChange={handleChange} value={values.firstName} className="firstName" margin="normal" required />
                            <TextField variant="standard" name="lastName"   placeholder="Last Name*"  onChange={handleChange} value={values.lastName} className="firstName" margin="normal" required/>
                            <TextField variant="standard" name="email"      placeholder="Email*"      onChange={handleChange} value={values.email} className="firstName" margin="normal" required/>
                            <TextField variant="standard" name="password"   placeholder="Password*"   onChange={handleChange} value={values.password} type="password" className="firstName" margin="normal" required/>
                            <TextField variant="standard" name="contactNo"  placeholder="Contact No*" onChange={handleChange}  value={values.contactNo} className="firstName" margin="normal" required/>                 
                            <div className="subBtn">
                                <Button type='submit' variant='contained'  color='primary' onClick={handleFormSubmit}>Register</Button>
                            </div>
                        </div>
                    </form>      
                </Paper>
            </Grid>
        </>
    )
}
export default Register;