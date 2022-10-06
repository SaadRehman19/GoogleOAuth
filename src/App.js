import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import {gapi} from 'gapi-script'
import Login from './components/Login'
import Logout from './components/Logout'


function App() {
const clientId='311975128143-udpk8t6n44irmge5t2nusbot0qd68lk4.apps.googleusercontent.com';
  
  
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:"",
      })
    }
    gapi.load('client:auth2',start);
  },[])
  
  return(
    <div className="App">
        
      <Login/>
      <Logout/>
    </div>
  
  )
}

export default App;
