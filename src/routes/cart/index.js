import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import './index.scss';
import ImageLoader from 'component/imageLoader';
import {OverlayTrigger, Tooltip} from "react-bootstrap" 
import { connect } from 'react-redux';
import emptyCart from "assets/empty_cart.png";
import { Link } from 'react-router-dom';
import { RemoveToCartByPro } from 'store/action/cart';

class CartTable extends Component {
      componentDidUpdate(preProps, preState){
        if(this.props.cart !== preProps.cart){
          localStorage.setItem("cart", JSON.stringify(this.props.cart))
        }
      }
  render() {
    const { cart: products = [], remove } = this.props; 
    return (
    <div className="cart-table">
      {products.length? 
      <div>
      <Table responsive="xl">
        <thead>
          <tr>
            <th >Image</th>
            <th >Title</th>
            <th>Unit Price</th>
            <th>Action</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item,index)=>
          <tr key={index}>
            <td><ImageLoader imageClass="small-img" src={item.filename}/></td>
            <td>{item.title}</td>
            <td>{item.price}  X {(parseInt(item.qty) || 1)}</td>
            <td>
              <OverlayTrigger placement={"top"} overlay={<Tooltip>Remove</Tooltip>}>
                <i className="fa fa-times pointer" onClick={()=> remove(item)} aria-hidden="true"></i>
              </OverlayTrigger>
            </td>
            <td>{(item.price * (parseInt(item.qty) || 1)).toFixed(2)}</td>
          </tr>)}
        </tbody>
      </Table>
      <hr/>
      <div className="total-div">
          <div className="price-txt">Total Amount</div> 
          <span className="price-txt total-price"> ₹ {(products.reduce((s,e)=>(s+ (e.price * (parseInt(e.qty) || 1))),0)).toFixed(2)}</span>
      </div>
      <hr/>
      </div>:
    <div>
      <ImageLoader src={emptyCart} imageClass="empty-cart-img" />
      <Link to="/" className="continue-shopping">Continue Shopping</Link>
    </div>
    }
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart:state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    remove : (proItem) => { dispatch(RemoveToCartByPro(proItem)); },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartTable);