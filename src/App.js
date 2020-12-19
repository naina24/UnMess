import React, {useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
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
const [hasaccount,setHasaccount]=useState(false);

const clearInputs=()=>{
  setEmail('');
  setPassword('');
}

const clearError=()=>
{
  setemailError('');
  setpasswordError('');
}

const handleLogin=()=>
{
fire
.auth()
.signInWithEmailAndPassword(email,password)
.catch(err=>{
  switch(err.code)
  {
    case  "auth/invalid-email":
    case  "auth/user-disabled":
    case  "auth/user-not-found":
      setemailError(err.message);
      break;
    case "auth/wrong-password":
      setpasswordError(err.message);
      break;
  }
});
};

const handleSignup=()=>
{
  clearError();
  fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .catch(err=>{
    switch(err.code)
    {
      case  "auth/email-already-in-use":
      case  "auth/invalid-email":
        setemailError(err.message);
        break;
      case "auth/weak-password":
        setpasswordError(err.message);
        break;
    }
  });

}

const handleLogout=()=>
{
  fire.auth().signOut();
}

const authlistener=()=>
{
  fire.auth().onAuthStateChanged(user=>{
    if(user)
    { clearInputs();
      setUser(user);}
    else
    setUser("");
  });
};

useEffect(()=>{
authlistener();},[])




  return (
    <>
      <Router>
        <Navbar />
       <HeroSection 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasaccount={hasaccount} 
        setHasaccount={setHasaccount}
        emailError={emailError} 
        passwordError={passwordError}
        username={username}
        setUsername={setUsername}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Feedback' component={Feedback} />
        </Switch>
      </Router>
    </>
  );
}

export default App;