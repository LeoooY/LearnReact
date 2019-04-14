import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu, Icon, Drawer, Button } from 'antd';
import Mytable from './components/antdTable.js'
import Home from './pages/home.js'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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
    this.ToggleDrawer = this.ToggleDrawer.bind(this);
  }
  ToggleDrawer() {
    this.setState({
      drawerVisible: !this.state.drawerVisible
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
            title="Navigation"
            placement="right"
            closable={true}
            onClose={this.ToggleDrawer}
            visible={this.state.drawerVisible}
          >



            <Menu >
              <Menu.Item>
                <Link to="/"><Icon type="home"/>Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about/"><Icon type="question-circle" />About</Link>
              </Menu.Item>

              <SubMenu key="sub1" title={<span><Icon type="ant-design" /><span>Antd</span></span>}>
                <Menu.Item>
                  <Link to="/antd/">Table</Link>
                </Menu.Item>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Iteom 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>

            </Menu>
          </Drawer>
        </Router>
      </div>
    );
  }
}

export default App;
