import logo from './logo.svg';
import './App.css';
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Switch from 'react-router-dom';
import ListRancherComponent from './components/ListRancherComponent';
import ListCattleComponent from './components/ListCattleComponent';
import ListLotComponent from './components/ListLotComponent';
import Welcome from './components/Welcome';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateRancherComponent from './components/CreateRancherComponent';
import ViewRancherComponent from './components/ViewRancherComponent';
import CreateCattleComponent from './components/CreateCattleComponent';
import ViewCattleComponent from './components/ViewCattleComponent';
import CreateLotComponent from './components/CreateLotComponent';
import ViewLotComponent from './components/ViewLotComponent';

function App() {
  return (
    <div>
    <Router>
      
      
        <div className="container">
          <Switch> 
              <Route path = "/" exact component = {Welcome}></Route>
              <Route path = "/ranchers"  component = {ListRancherComponent}></Route>             
             {/* <Route path = "/add-Rancher"  component = {CreateRancherComponent}></Route>*/}
              {/*<Route path = "/update-Rancher:id"  component = {CreateRancherComponent}></Route>*/}
              <Route path = "/add-Rancher/:id"  component = {CreateRancherComponent}></Route>
              <Route path = "/view-Rancher/:id" component = {ViewRancherComponent}></Route>
                           
              <Route path = "/cattles"  component = {ListCattleComponent}></Route>
              <Route path = "/add-Cattle/:id"  component = {CreateCattleComponent}></Route>
              <Route path = "/view-Cattle/:id" component = {ViewCattleComponent}></Route>

              <Route path = "/lots"  component = {ListLotComponent}></Route>
              <Route path = "/add-Lot/:id"  component = {CreateLotComponent}></Route>
              <Route path = "/view-Lot/:id" component = {ViewLotComponent}></Route>          
              </Switch>
          </div>
          <FooterComponent />        
      </Router>
    </div>
        );
        }

        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
  </a>*/}
  {/*<h1> Welcome </h1>
  <h1> image </h1>
      </header>
    </div>
  );
}
*/
}
export default App;
