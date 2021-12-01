import {Paper } from '@material-ui/core';
import React,{useState} from 'react';
import {Tab,Tabs} from "@material-ui/core";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../login/Login.js';
import Register from '../register/Register.js';

const Container=()=>{
const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle={width:280,margin:"0px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return(
    <>
      <Paper elevation={20} style={paperStyle}>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        <Tab label="Login" />        
        <Tab label="Register" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Register/>
      </TabPanel>
      </Paper>
    </>

  )
}
export default Container;