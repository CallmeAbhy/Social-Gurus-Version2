
import Landing from './components/Landing';
import './App.css';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posting from './components/Posting';
import Employee from './components/Employee';
import Organization from './components/Organization';
import NavBar from './components/NavBar';
import You from './components/You';
import Notification from './components/Notification';
import Connect from './components/Connect';
import Apply from './components/Apply';
import SearchSec from './components/SearchSec';
import Overview from './components/Overview';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Profile_com from './components/Profile_com';
import Sign_in from './components/Sign_in';
import Sign_in2 from './components/Sign_in2';
import Applied from './components/Applied';
import Applications from './components/Applications';
import Applicants_Modal from './components/Applicants_Modal';
import Cong from './components/Cong';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Nav />
        
      </header>
      
      <main>
      <Switch>
      <Route path="/" exact component={ Landing }></Route>
      <Route path="/Login" component={ Sign_in }></Route>
      <Route path="/Employee" component={ Employee }></Route>
      <Route path="/Organization" component={ Organization }></Route>
      <Route path="/Notification" component={ Notification }></Route>
      <Route path="/You" component={ You }></Route>
      <Route path="/Connect" component={ Connect }></Route>
      <Route path="/Posting" component={ Posting }></Route>
      <Route path="/SearchSec" component={ SearchSec }></Route>
      <Route path="/Overview" component={ Overview }></Route>
      <Route path="/Jobs" component={ Jobs }></Route>
      <Route path="/Profile" component={ Profile }></Route>
      <Route path="/Profile_com" component={ Profile_com }></Route>
      <Route path="/Sign_in" component={ Sign_in }></Route>
      <Route path="/Sign_in2" component={ Sign_in2 }></Route>
      <Route path="/Apply" component={ Apply }></Route>
      <Route path="/Applied" component={ Applied }></Route>
      <Route path="/Applications" component={ Applications }></Route>
      <Route path="/Applicants_Modal" component={ Applicants_Modal }></Route>
      <Route path="/Cong" component={ Cong }></Route>
      
      </Switch>

      </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
