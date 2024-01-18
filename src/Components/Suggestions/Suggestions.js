import React, { Component } from 'react'
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';
import imageSrc1 from '../../images/pp1.png'
import imageSrc2 from '../../images/pp2.png'
import imageSrc3 from '../../images/pp3.jpeg'

export default class Suggestions extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      
   }
 } 
    render() {
    return (
      <div>
        <div className="suggestions_container">
                <div className="suggestions_header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions_friends">
                        <Avatar src={imageSrc1} className="suggestions_image"/>
                        <div className="suggestions_username">testing_profile</div>
                    </div>
                    <div className="suggestions_friends">
                        <Avatar src={imageSrc2} className="suggestions_image"/>
                        <div className="suggestions_username">dummy_user</div>
                    </div>
                    <div className="suggestions_friends">
                        <Avatar src={imageSrc3} className="suggestions_image"/>
                        <div className="suggestions_username">technical_interview</div>
                    </div>
                    <div className="suggestions_friends">
                        <Avatar src={imageSrc2} className="suggestions_image"/>
                        <div className="suggestions_username">subscribe_me</div>
                    </div>
                    <div className="suggestions_friends">
                        <Avatar src={imageSrc3} className="suggestions_image"/>
                        <div className="suggestions_username">like_and _share</div>
                    </div>
                    <div className="suggestions_friends">
                        <Avatar src={imageSrc1} className="suggestions_image"/>
                        <div className="suggestions_username">hit_bell_icon</div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
