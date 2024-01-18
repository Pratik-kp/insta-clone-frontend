import React, { Component } from 'react'
import './StatusBar.css'
import Avatar from '@mui/material/Avatar';

import uploadimage from '../../images/statusadd.png'
import {storage,auth} from "../firebase";
export default class StatusBar extends Component {

constructor(props) {
  super(props)

  this.state = {
    statusList:[]
  }
}

componentDidMount(){
    this.getData();
}

getData=()=>{
    // let data=[
    //     {
    //         "username":"pratik_k.p",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"test2",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"pratik_k.p",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"test3",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"pratik_k.p",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"test4",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"pratik_k.p",
    //         "imageURL":"../../images/pp1.png"
    //     },
    //     {
    //         "username":"test5",
    //         "imageURL":"../../images/pp1.png"
    //     } 
    // ]
    // this.setState({statusList:data});

    fetch('http://localhost:8080/status')
            .then(response => response.json())
            .then(data => {
                this.setState({statusList: data});
    });
}

uploadStatus=(event)=>{
    let image=event.target.files[0];
    const thisContext=this;
    if(image==null || image==undefined)
        return;
     var uploadTask=storage.ref("status").child(image.name).put(Image);
     uploadTask.on(
        "state_changed",
        function (snapshot) {
        },
        function (error) {
        },
        function () {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
              console.log(downloadURL);

              let payload = {
                  "statusId": Math.floor(Math.random()*100000).toString(),
                  "userId": JSON.parse(localStorage.getItem("users")).uid,
                  "path": downloadURL,
                  "timeStamp": new Date().getTime()
              }
  
            const requestOptions ={
                  method: "POST",
                  headers: { 'Content-Type': 'application/json' },
                  body : JSON.stringify(payload),
              } 
              fetch("http://localhost:8080/status",requestOptions)
              .then(response => response.json())
              .then(data => {
                  thisContext.getData();
              })
              .catch(error =>{
                console.log(error);
              })
              
          })
          }
     );
}

    render() {
    return (
      <div>
        <div className='statusbar_container'>
            <div className="fileupload">
                <label for="file-upload-status" >
                    <img className="statusbar_upload" src={uploadimage} width="55px" height="55px" />
                </label>
                    <input id="file-upload-status" onChange={this.uploadStatus} type="file"/>
            </div>
            {
                this.state.statusList.map((item,index)=>(
                    <div className='status'>
                        <Avatar className='statusbar_status' src={item.path}/>
                        <div className='statusbar_text'>{item.username}</div>
                    </div>
                ))
            }
            
        </div>
      </div>
    )
  }
}
