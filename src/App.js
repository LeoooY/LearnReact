import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Route, Link} from 'react-router-dom'
import Drawerbtn from './components/drawer'
import Mytable from './components/antdTable.js'


function Home(){
  return (
  <header className="App-header">
          
  <img src={logo} className="App-logo" alt="logo" />
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

  </a>
  <Drawerbtn/>
  </header>
  );
}
function About(){
  return <div>about</div>;
}

function Tryantdtable(){
  return <Mytable></Mytable>
}



class App extends Component {
  render() {
    return (
      <div className="App">
        
        
        <div>
          <Router>
            
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
                
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/antd/">Antd</Link>
              </li>
            </ul> */}
            
            <Route  exact path="/"  component={Home}/>
            <Route  path="/about"  component={About}/>
            <Route  path="/antd"  component={Tryantdtable}/>

          </Router>
          
          </div>
        
      </div>
    );
  }
}

export default App;
