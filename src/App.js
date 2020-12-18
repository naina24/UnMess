import React, {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './components/pages/Feedback';
import fire from './Fire'



function App() {
   
const [user,setUser]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [emailError,setemailError]=useState('');
const [passwordError,setpasswordError]=useState('');
const [username ,setUsername]=useState('');

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Feedback' component={Feedback} />
        </Switch>
      </Router>
    </>
  );
}

export default App;