import React, { Component } from 'react'
import'./MainPage.css'
import uploadImage from "../../images/upload.png"
import Post from '../Post/Post'
import {storage,auth} from "../firebase";

export default class MainPage extends Component {
constructor(props) {
  super(props)

  this.state = {
    posts:[],
    progressBar: "",
  }
}
componentDidMount(){
  this.getPost();
}

getPost=()=>{
  const thisContext=this;
  // let data=[
  //   {
  //     "postId":"1234",
  //     "userName":"pratik_k.p",
  //     "postImageURL":"https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?cs=srgb&dl=pexels-blaque-x-863963.jpg&fm=jpg",
  //     "timestamp":"12345",
  //     "likes":"1234"
  //   },
  //   {
  //     "postId":"1235",
  //     "userName":"pratik_k.p",
  //     "postImageURL":"https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?cs=srgb&dl=pexels-blaque-x-863963.jpg&fm=jpg",
  //     "timestamp":"12345",
  //     "likes":"1234"
  //   },
  //   {
  //     "postId":"1236",
  //     "userName":"pratik_k.p",
  //     "postImageURL":"https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?cs=srgb&dl=pexels-blaque-x-863963.jpg&fm=jpg",
  //     "timestamp":"12345",
  //     "likes":"1234"
  //   }

  // ];
  // this.setState({posts:data});
  fetch('http://localhost:8080/post')
            .then(response => response.json())
            .then(data => {
            thisContext.setState({posts: data});
  });
}

upload=(event)=>{

  let image=event.target.files[0];
  const thisContext=this;
  if(image==null || image== undefined)
    return;

  var uploadTask = storage.ref("images").child(image.name).put(image);
        uploadTask.on("state_changed",
          function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            thisContext.setState({progressBar: progress});
          },
          function (error) {
          },
          function () {
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              let payload={
                "postId": Math.floor(Math.random()*100000).toString(),
                "userId": JSON.parse(localStorage.getItem("users")).uid,
                "postPath": downloadURL,
                "timeStamp": new Date().getTime(),
                "likeCount": 0
          
              }
          
              const requestOptions={
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(payload),
              }
              fetch("http://localhost:8080/post",requestOptions)
              .then(response=>response.json())
              .then(data=>{
                console.log(data);
                thisContext.getPost();
              })
              .catch(error=>{
                console.log(error);
              })
            
            
            })
          })
          
}

    render() {
    return (
      <div>
        <div className="mainpage_container">  
            <div className="mainpage_divider"></div>
            <div className="fileupload">
              <label for="file-upload" >
                  <img className="mainpage_uploadicon" src={uploadImage} />
              </label>
              <input onChange={this.upload} id="file-upload" type="file"/>
            </div>
          <div className="mainpage_divider"></div>   
      </div>
      <div className="upload_text">{this.state.progressBar}</div>
      <div>
      {
          this.state.posts.map((item,index)=>(
           <Post id={item.postId} userName={item.userName} postImage={item.postPath} likes={item.likes}/>     
          )
          )
      }  
      </div>        
              
      </div>
    )
  }
}
