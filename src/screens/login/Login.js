import { Grid,Paper } from '@material-ui/core';
import React from 'react';
import {TextField,Button} from "@material-ui/core";
import './Login.css';

const Login=()=>{
  return(
    <>
      
      <Grid>
        <Paper className="paperStyle">
          <Grid align='center'>
         
            <div className="Login">
                <TextField  variant="standard" placeholder="Username*" margin="normal" required/>
                <TextField  variant="standard" placeholder='Password*' type='password'  margin="normal" required/>
            </div>
            <div className="subBtn">
              <Button variant="contained" color="primary"  onClick={() => {this.signIn();}}>Log In</Button>
            </div>            
          </Grid>
        </Paper>
      </Grid>
      
    </>

  )
}
export default Login;