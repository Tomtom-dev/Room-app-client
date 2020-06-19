import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage'
import PostAnnounce from "./pages/PostAnnounce"
import Rooms from './pages/Rooms'
import Login from './pages/Login'
import Navbar from './component/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/homepage" component={Homepage}/>
            <Route exact path="/rooms" component={Rooms}/>
            <Route exact path="/announce" component={PostAnnounce}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
