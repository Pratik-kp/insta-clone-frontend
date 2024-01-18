import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import MainContent from '../MainContent/MainContent'

export default class HomePage extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  
    render() {
    return (
      <div>
        <NavBar/>
        <MainContent/>
      </div>
    )
  }
}
