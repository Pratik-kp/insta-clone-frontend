import React, { Component } from 'react'
import './InfoSection.css'
import Avatar from '@mui/material/Avatar';
import statusimg from '../../images/pp1.png'



export default class InfoSection extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  
    render() {
    return (
      <div>
        <div className='info_container'>
            <Avatar  className='info_image' src={statusimg}/>
            <div className='info_content'>
                <div className='info_username'>Username</div>
                <div className='info_description'>Description</div>
            </div>
        </div>

      </div>
    )
  }
}
