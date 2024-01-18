import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css';
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

export default class Post extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
    commentList:[]
   }
 }
 componentDidMount(){
  this.getComments();
 }

 getComments=()=>{
  // let data=[{
  //             "userName":"ASD",
  //             "commentId":"1234",
  //             "timestamp":"12345",
  //             "description":"comment1"
  //           },
  //           {
  //             "userName":"user2",
  //             "commentId":"1234",
  //             "timestamp":"12345",
  //             "description":"comment2"
  //           },
  //           {
  //             "userName":"user3",
  //             "commentId":"1234",
  //             "timestamp":"12345",
  //             "description":"comment3"
  //           }

  //         ];

          fetch('http://localhost:8080/comments/'+this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({commentList: data});
        });
 }

 submitComments=(event)=>{

  if(event.key=="Enter"){
    let comment=event.currentTarget.value;
    if(comment!==null || comment!==undefined){

      let payload={
        "commentId": Math.floor(Math.random()*1000000).toString(),
        "userId": JSON.parse(localStorage.getItem("users")).uid,
        "postId": this.props.id,
        "timeStamp": new Date().getTime(),
        "comment": comment
      }

        const requestOptions ={
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body : JSON.stringify(payload),
      }

        fetch("http://localhost:8080/comments",requestOptions)
        .then(response => response.json())
        .then(data => {
          this.getComments();
      })
      .catch(error =>{

      })
    }
  }
 }

    render() {
    return (
      <div className='post_container'>

        {/* header */}
        <div className='post_header'>
            <Avatar className='post_image' src={this.props.profileImage}/>
            <div className='post_username'> {this.props.userName}</div>
        </div>

        {/* image */}
        <div>
           <img src={this.props.postImage} width="615px"/> 
        </div>

        {/* Analytics */}
        <div>
            <div style={{"marginLeft":"10px"}}>
                <img src={love} className='post_reactimage'/>
                <img src={comment} className='post_reactimage'/>
                <img src={share} className='post_reactimage'/>
            </div>
            <div style={{"frontWeight":"bold", "marginLeft":"20px"}}>
                {this.props.likes} likes
            </div>
        </div>

        {/* Comment Section */}
        <div>
          {
            this.state.commentList.map((item,index)=>
            ( index<4?
            <div className='post_comment'>
              {item.userName}:{item.comment}
              </div>:
              <span></span>)) 
          }
          
          <input text="text" onKeyPress={this.submitComments} className='post_commentbox' placeholder="Add a comment..."/>
        </div>
      </div>
    )
  }
}
