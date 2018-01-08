import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Star from './Stars.js';



let maxShow = window.location.hash.match(/\d+/);
// # if no digits then return default
maxShow = maxShow ? parseInt(maxShow[0]) : 1000;
// console.log(hash)

class Constillation extends React.Component{
  createStars(max){
    let outStar = [];
    for(let i = 0; i < max; i++){
      outStar.push(<Star/>)
    }
    return outStar;
  }
  render(){
    let stars = this.createStars(maxShow);
    return (
      <div>
        {stars}
      </div>
    )
  }
}



class Page extends React.Component{
  render(){
    return (
      <Constillation/>
    )
  }
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
