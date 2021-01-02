import React, { Component } from 'react';
import "./index.scss"
import ButtonComponent, {IncDecButton} from '../button';
import ImageLoader from '../imageLoader';
import Rating from 'component/rating';
import { AddToCart, IncreaseCartItemByPro, DecreaseCartItemByPro } from 'store/action/cart';
import { connect } from 'react-redux';
import ReadMore from 'component/readMore';

class ProductCard extends Component {
  render() {
    const {data, cart} = this.props;
    const productInCart = cart.find(item => item.id === data.id)
    return (
        <div className="card-body card">
            <ImageLoader src={data.filename}/>
            <span className="title">{data.title}</span>
            <span className="price"> ₹ {data.price}</span>
            <ReadMore txt={data.description}/>
            <p><span className="title">Category : </span>{data.type}</p>
            <Rating rat={data.rating}/>
            {productInCart?
            <IncDecButton 
              qty={productInCart.qty} 
              increment={()=>this.props.increaseCartItem(productInCart)} 
              decrement={()=>this.props.decreaseCartItem(productInCart)} 
            />:
            <ButtonComponent addToCart={()=>this.props.addToCart(data)} txt="ADD TO CART"/>}
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
    increaseCartItem: (proItem) => { dispatch(IncreaseCartItemByPro(proItem)); },
    decreaseCartItem: (proItem) => { dispatch(DecreaseCartItemByPro(proItem)); },
    addToCart: (proItem) => { dispatch(AddToCart(proItem)); },
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);