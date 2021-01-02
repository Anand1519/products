import React, { Component } from 'react';
import {OverlayTrigger, Tooltip} from "react-bootstrap" 
import "./index.scss";

export default class ReadMore extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         more:false
      };
    };
    handleReadTxt = () => {
        this.setState({more:!this.state.more})
    }
  render() {
    const { txt } = this.props;
    const { more } = this.state;
    return (
        <OverlayTrigger
            placement={"top"}
            overlay={<Tooltip>{more?"Hide Text":"Read More"}</Tooltip>}>
            <span className={more?"des":"extra-txt des"} onClick={this.handleReadTxt}>{txt}</span>

        </OverlayTrigger>
    );
  }
}
