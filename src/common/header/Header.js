import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { Button} from 'react-bootstrap';
import './Header.css'
import icon from '../../assets/logo.svg';
import Container from '../../screens/container/Container.js';
import {Tab,Tabs,AppBar} from "@material-ui/core";

// import './css/style.css'

class Header extends Component{

  constructor(props) {
    super(props)

    this.state = {
        login: false,

    }
}

onOpenModalLogin = () => {
    this.setState({ login: true });
};



onCloseModalclose = () => {
    this.setState({ login: false });
};


    render() { 
      const { login,index} = this.state;
      
      return(
                <>
                   <div className="header">
                      <img src={icon} className="logo" alt="" />
                      <div className="buttonDiv">
                        {/* <button color="primary" variant="contained" className="loginButton" onClick="{this.onOpenModal}">Login</button> */}
                        <button color="primary" variant="contained" className="loginButton" id="login" onClick={this.onOpenModalLogin}>Login</button>
                      </div>
                    </div> 
                    <Modal open={login} onClose={this.onCloseModalclose}>      
                    
                    <Container/>
                    </Modal>

                 </>   
               );

    }

    
}

export default Header;

{/* <div className="header">
<img src={logo} className="logo" alt="" />
<div className="buttonDiv">
<Button color="primary" variant="contained" className="loginButton" onClick="">Login</Button>
</div>
</div> */}