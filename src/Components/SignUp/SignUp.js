import React, { Component } from 'react'
import {storage,auth} from "../firebase";

export default class SignUp extends Component {
  
constructor(props) {
  super(props)

  this.state = {
     emailId:null,
     name: null,
     userName:null,
     password:null
  }
}


newSignUp=()=>{
  auth.createUserWithEmailAndPassword(this.state.emailId, this.state.password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;

    let payload={
      "userId":user.uid,
      "userName":this.state.userName,
      "name":this.state.name,
      "profileImage":""

    }

    const requestOptions={
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload),
    }
    fetch("http://localhost:8080/users",requestOptions)
    .then(response=>response.json())
    .then(data=>{
      localStorage.setItem("users",JSON.stringify(user));
      window.location.reload();
    })
    .catch(error=>{
      console.log(error);
    })
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


  
    render() {
    return (
        <div>
            <input className='loginpage_text' onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Mobile number or Email"/>
            <input className='loginpage_text' type="text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} placeholder="Full Name"/>
            <input className='loginpage_text' type="text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} placeholder="Username"/>
            <input className='loginpage_text' type="password" onChange={(event)=>{this.state.password=event.currentTarget.value;}} placeholder="Password"/>
            <button className='login_button' onClick={this.newSignUp}>Sign Up</button>

        </div>
    )
  }
}
