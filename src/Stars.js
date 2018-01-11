import React from 'react';
import {starColors, totalColors, getRandomInt} from './defaults.js'

// this is a star object or component

// timer from https://codepen.io/smonn/pen/KzezEw
export default class Star extends React.Component{
  constructor(props){
    super(props);

    // https://github.com/goatslacker/alt/issues/283
    this.changeColor = this.changeColor.bind(this);
    const size = this.getSize();
    this.state = {
      border: this.getBorder(),
      top: this.getTop(),
      left: this.getLeft(),
      width: size,
      height: size,
      // position: position,
    }
  }
  componentDidMount(){
    this.timer = setInterval(this.changeColor, getRandomInt(0, 15000));
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  getBorder(){
    return '1px solid rgb(' + starColors[getRandomInt(0, totalColors)] + ')';
  }
  getSize(){
    return getRandomInt(1, 10);
  }
  getTop(){
    return getRandomInt(0, window.innerHeight) + 'px';
  }
  getLeft(){
    return getRandomInt(0,window.innerWidth) + 'px';
  }
  changeColor(){
    this.setState({
      border: this.getBorder(),
    })
  }
  render(){
    return(
      <div className='star' style={this.state}></div>
    )
  }
}
