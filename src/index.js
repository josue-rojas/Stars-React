import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {getRandomInt} from './defaults.js';
import Star from './Stars.js';
import ShootingStar from './ShootingStar.js';



let maxShow = window.location.hash.match(/\d+/);
// # if no digits then return default
maxShow = maxShow ? parseInt(maxShow[0],10) : 1000;

class Constillation extends React.Component{
  constructor(props){
    super(props);
    this.addStar = this.addStar.bind(this);
    this.state = {
      max: props.max,
      stars: [],
      shootingStar: maxShow < 301 ? <ShootingStar/> : [],
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
        {this.state.shootingStar}
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
