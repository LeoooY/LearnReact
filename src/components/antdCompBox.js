import React from 'react'
import './antdCompBox.css'

class AntdCompBox extends React.Component{


  render(){
    return <div className="myAntdContainer">
    {this.props.children}
    </div>
  }
}

export default AntdCompBox;