import React, { Component } from 'react';
import "./index.scss";

const raiting = [1,2,3,4,5];

export default class Rating extends Component {
    renderRating = (val) =>{
        if(this.props.rat >= val ){
            return <i key={val} className="fa fa-star rat" aria-hidden="true"></i>;
        }
        return <i key={val} className="fa fa-star-o" aria-hidden="true"></i>;

    }
  render() {
    const { rat } = this.props;
    return (
      <div className="rating">
        {raiting.map(this.renderRating)}
        <span className="rating-val">{rat}</span>
      </div>
    );
  }
}
