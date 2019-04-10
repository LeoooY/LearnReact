import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu, Icon, Drawer, Button } from 'antd';

import Mytable from './components/antdTable.js'
import Home from './pages/home.js'


function About() {
  return <div>about</div>;
}

function Tryantdtable() {
  return <Mytable></Mytable>
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false
    };
    this.ToggleDrawer=this.ToggleDrawer.bind(this);
  }
  ToggleDrawer(){
    this.setState({
      drawerVisible:!this.state.drawerVisible
    })
    console.log(this.state.drawerVisible);
  }
  render() {
    return (
      <div className="App">
        
        <Button type="primary" className="drawerBtn" onClick={this.ToggleDrawer}>Drawer</Button>
        
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/antd" component={Tryantdtable} />
          <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.ToggleDrawer}
          visible={this.state.drawerVisible}
        >
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about/">About</Link></p>
          <p><Link to="/antd/">Antd</Link></p>
        </Drawer>
        </Router>
      </div>
    );
  }
}

export default App;
