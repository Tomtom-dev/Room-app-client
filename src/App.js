import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage'
import PostAnnounce from "./pages/PostAnnounce"
import Rooms from './pages/Rooms'
import Login from './pages/Login'
import Navbar from './component/Navbar'
import SignUp from './pages/SignUp'
import RoomPageDetail from './component/RoomPageDetail'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App() {
  return (
    <Router>
      <div className="App">
          <ReactNotification/>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/rooms/:id" component={RoomPageDetail}/>
            <Route exact path="/announce" component={PostAnnounce}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
          </Switch>
          <footer className="footer"> All right reserved.</footer>
      </div>
    </Router>
    
  );
}

export default App;
