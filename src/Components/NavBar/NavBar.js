import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import './NavBar.css';
import insta_log from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import Avatar from '@mui/material/Avatar';
import pp from "../../images/pp1.png"

export class NavBar extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      
   }
 }
  
    render() {
    return (
      <div>
        <div className="navbar_barcontent">
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={3}>
                    <img className='navbar_logo' src={insta_log} width="105px"/>
                </Grid>
                <Grid item xs={3}>
                    <input className='navbar_searchBar' text="text" placeholder="Search"/>
                </Grid>
                <Grid item xs={3} style={{"display":"flex"}}>
                    <img className='navbar_img' src={home} width="25px"/>
                    <img className='navbar_img' src={message} width="25px"/>
                    <img className='navbar_img' src={find} width="25px"/>
                    <img className='navbar_img' src={react} width="25px"/>
                    <Avatar className='navbar_img'src={pp} style={{"maxHeight":"25px", "maxWidth":"25px"}}/>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar