import React from 'react';

// this is a star object or component

const yellows = ['255,255,224','255,255,0', '239, 224, 88'];
const totalYellow = yellows.length;
const whites = ['255, 255, 255', '239, 237, 237', '188, 188, 188'];
const totalWhites = whites.length;

// maybe should be here
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


// timer from https://codepen.io/smonn/pen/KzezEw
class Star extends React.Component{
  constructor(props){
    super(props);

    // https://github.com/goatslacker/alt/issues/283
    this.changeColor = this.changeColor.bind(this)
    const size = this.getSize();
    const top = this.getTop();
    const left = this.getLeft();
    // const position = Math.random() > .5 ? 'fixed' : 'absolute';
    this.state = {
      border: this.getBorder(),
      top: top,
      left: left,
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
    if(Math.random() > .5){
      return '1px solid rgb(' + yellows[getRandomInt(0, totalYellow)] + ')';
    }
    return '1px solid rgb(' + whites[getRandomInt(0, totalWhites)] + ')';
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

export default Star;
