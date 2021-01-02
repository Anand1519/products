import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import "./index.scss"

class ButtonComponent extends Component {
  render() {
    const { addToCart } = this.props;
    return (
      <Button className="btn" onClick={addToCart}>{this.props.txt}</Button>
    );
  }
}

export default ButtonComponent;

export class IncDecButton extends Component {
  render() {
    const {qty, increment, decrement } = this.props;
    return (
        <div className="btn-incDec">
          <i className="fa fa-minus inc-btn" onClick={decrement} aria-hidden="true"></i>
          <span className="fa incDec-value"> {qty || 1}  </span>
          <i className="fa fa-plus dec-btn" onClick={increment} aria-hidden="true"></i>
        </div>
    );
  }
}

