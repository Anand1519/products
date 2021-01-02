import React, { Component } from 'react';
import {Container, Row, Col} from "react-bootstrap";
import ProductCard from 'component/productCard'
import { getAllProducts } from 'services/products';
import { connect } from 'react-redux';
import ErrorBoundary from 'component/errorBoundary';

class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         products:[]
      };
    };
    
    async componentDidMount(){
        const products = await getAllProducts();
        this.setState({products})
    }
    componentDidUpdate(preProps, preState){
      if(this.props.cart !== preProps.cart){
        localStorage.setItem("cart", JSON.stringify(this.props.cart))
      }
    }
  render() {
    return (
      <Container fluid={true}>
        <Row>
        {this.state.products.length?this.state.products.map((val,index) =>
          <Col xs={12} sm={12} md={6} lg={4} xl={3} key={index}>
            <ErrorBoundary>
              <ProductCard data={val}/>
            </ErrorBoundary>
          </Col>
        ):
        <div className="loader"/>}
        </Row>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart:state.cart,
  }
}


export default connect(mapStateToProps, null)(Products)