import React from 'react';
import {starColors, totalColors, getRandomInt} from './defaults.js'

let degrees = [];
for(let i = 0; i < 450; i++){
  degrees.push(i * (Math.PI / 180));
}

export default class ShootingStar extends React.Component{
  constructor(props){
    super(props);
    this.changePosition = this.changePosition.bind(this);
    this.resetPosition = this.resetPosition.bind(this);
    const size = this.getSize();
    const side = getRandomInt(0, 4);
    this.state = {
      border: this.getBorder(),
      top: this.getTop(side),
      left: this.getLeft(side),
      angle: this.getAngle(side),
      side: side,
      width: size,
      height: size,
      speed: getRandomInt(1,10)
    }
  }
  componentDidMount(){
    this.timer = setInterval(this.changePosition,15);
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
  getTop(side){
    if(side == 0){
      return getRandomInt(-5000, 0);
    }
    else if(side == 1 || side == 3){
      return getRandomInt(0, window.innerHeight);
    }
    else if(side == 2){
      return getRandomInt(window.innerHeight, window.innerHeight+5000);
    }
  }
  getLeft(side){
    if(side == 0 || side == 2){
      return getRandomInt(0, window.innerWidth);
    }
    else if(side == 1){
      return getRandomInt(window.innerWidth, window.innerWidth+5000);
    }
    else if(side == 3){
      return getRandomInt(-5000, 0);
    }
  }
  getAngle(side){
    if(side == 0){
      return degrees[getRandomInt(10, 170)];
    }
    else if(side == 1){
      return degrees[getRandomInt(100,260)];
    }
    else if(side == 2){
      return degrees[getRandomInt(190, 350)];
    }
    else{
      return degrees[getRandomInt(280, 440)];
    }
  }
  resetPosition(){
    const side = getRandomInt(0, 4);
    const size = this.getSize();
    this.setState({
      border: this.getBorder(),
      top: this.getTop(side),
      left: this.getLeft(side),
      angle: this.getAngle(side),
      side: side,
      width: size,
      height: size,
      speed: getRandomInt(10,20),
    })

  }
  checkPos(side, newLeft, newTop){
    if(side == 0 && (newTop > window.innerHeight || newLeft > window.innerWidth || newLeft < 0)){
      return true;
    }
    else if(side == 1 && (newLeft < 0 || newTop > window.innerHeight || newTop < 0)){
      return true;
    }
    else if(side == 2 && (newTop < 0 || newLeft > window.innerWidth || newLeft < 0)){
      return true;
    }
    else if(side == 3 && (newLeft > window.innerWidth || newTop > window.innerHeight || newTop < 0)){
      return true;
    }
    return false
  }
  changePosition(){
    const newLeft = this.state.left + (this.state.speed*Math.cos(this.state.angle));
    const newTop = this.state.top + (this.state.speed*Math.sin(this.state.angle));
    if(this.checkPos(this.state.side, newLeft, newTop)){
      return this.resetPosition();
    }

    this.setState({
      top: newTop,
      left: newLeft,
    })
  }
  render(){
    // should seperate styling
    return(
      <div className='shooting-star' style={this.state}></div>
    )
  }


}
