import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export default class UserLogout extends Component {
 
 logout = () => {
    sessionStorage.removeItem('token')
    window.location.href = "/login";
  }
 
  render() {
    return (
      <div>
        <Button onClick={this.logout}>Logout</Button> </div>
    )
  }
}