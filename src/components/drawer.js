import { Drawer, Button } from 'antd';
import { BrowserRouter as Router ,Route, Link} from 'react-router-dom'
import React from 'react'

class DrawerBtn extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about/">About</Link></p>
          <p><Link to="/antd/">Antd</Link></p>
        </Drawer>
      </div>
    );
  }
}

export default DrawerBtn;