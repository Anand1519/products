import React, { Component } from 'react';
import { Navbar, Container} from "react-bootstrap";
import "./index.scss"; 
import { connect } from 'react-redux';
class NavBar extends Component {
  render() {
    const { cart } = this.props;
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid={true}>
                <Navbar.Brand href="/">ProductsApp</Navbar.Brand>
                <Navbar.Brand className="justify-content-end" href="/cart">
                  <i className="fa">&#xf07a;</i>
                  <span className='badge badge-warning' id='lblCartCount'> {cart.length} </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart:state.cart,
  }
}
export default connect(mapStateToProps,null)(NavBar);