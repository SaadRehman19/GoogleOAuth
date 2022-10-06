import React from 'react'
import {GoogleLogout} from 'react-google-login'


const Logout = () => {
const clientId='311975128143-udpk8t6n44irmge5t2nusbot0qd68lk4.apps.googleusercontent.com'
    
    
    const onSuccess=()=>{
        console.log("Log out successfully")
    }
    
  return (
    <div id='signOutButton'>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout
