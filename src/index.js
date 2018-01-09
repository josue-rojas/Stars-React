import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Star from './Stars.js';



let maxShow = window.location.hash.match(/\d+/);
// # if no digits then return default
maxShow = maxShow ? parseInt(maxShow[0],10) : 1000;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class Constillation extends React.Component{
  constructor(props){
    super(props);
    this.addStar = this.addStar.bind(this);
    this.state = {
      max: props.max,
      stars: [],
    }
  }
  componentDidMount(){
    this.timer = setInterval(this.addStar, getRandomInt(0,100));
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  addStar(){
    if(this.state.stars.length < this.state.max){
      let star = this.state.stars.slice();
      star.push(<Star/>);
      this.setState({
        stars: star,
      })
    }
    else{
      clearInterval(this.timer);
    }
  }
  render(){
    return (
      <div>
        {this.state.stars}
      </div>
    )
  }
}

class Page extends React.Component{
  render(){
    return (
      <Constillation
        max={maxShow}
      />
    )
  }
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
