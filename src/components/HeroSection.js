
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Student from './pages/Student';



function toggleForm  () {
  const containers = document.querySelector('.containera');
  containers.classList.toggle('active');
};

function HeroSection()
 {
 

  return (
    <div className='hero-container'>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          id='2'
        >
         Mess Staff
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          id='1'
          onClick={Student}
        >
         Student <i className='far fa-play-circle' />
        </Button>
      </div>
      <section className="sectiona">
    <div class="containera">
      <div class="user signinBx">
        <div class="imgBx"><img src="https://img5.goodfon.com/original/1920x1080/c/b2/apelsin-tsitrus-listia-fon.jpg" alt="" /></div>
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Sign In</h2>
            <input type="text" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Password" />
            <input type="submit" name="" value="Login" />
            <p class="signup">
              Don't have an account ?
              <a onClick={toggleForm}>Sign Up.</a>
            </p>
          </form>
        </div>
      </div>
      <div class="user signupBx">
        <div class="formBx">
          <form action="" onsubmit="return false;">
            <h2>Create an account</h2>
            <input type="text" name="" placeholder="Username" />
            <input type="email" name="" placeholder="Email Address" />
            <input type="password" name="" placeholder="Create Password" />
            <input type="password" name="" placeholder="Confirm Password" />
            <input type="submit" name="" value="Sign Up" />
            <p class="signup">
              Already have an account ?
              <a onClick={toggleForm}>Sign in.</a>
            </p>
          </form>
        </div>
        <div class="imgBx"><img src="https://img5.goodfon.com/original/1920x1080/c/b2/apelsin-tsitrus-listia-fon.jpg" alt="" /></div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default HeroSection;


