
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Feedback from './components/pages/Feedback';
import { createBrowserHistory } from "history";
import Footer from './components/Footer';
import Student from './components/Student';
import Member from './components/Mess_Member/Member'
import MessMenu from './MessMenu';



function App() {
   
const history = createBrowserHistory();

  return (
    <>
      <Router  history={history}>
       <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Feedback' component={Feedback} />
          <Route path='/Student' component={Student}/>
          <Route path='/Member' component={Member}/>
          <Route path='/MessMenu' component={MessMenu}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;