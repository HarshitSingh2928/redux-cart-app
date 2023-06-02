import React from 'react';
import '../App.css';
import phonepic from '../phone.jpg';
import { addItem, delItem } from '../redux/action'; 
import { connect } from 'react-redux';
const CartPage = (props) => {
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <div className="cart-item">
        <img src={phonepic} alt="Apple MacBook Pro 2017 A1707 Intel I7 16GB RAM 512GB SSD Storage MacOS" className="product-image" />
        <div className="product-details">
          <h3>Apple MacBook Pro 2017</h3>
          
          <p>Price: INR 90,000</p>
          <div className="quantity-controls">
          <button onClick={() => props.totalQuantity !== 0 && props.delItem()}>-</button>

            <span>{props.totalQuantity}</span>
            <button onClick={props.addItem}>+</button>
          </div>
        </div>
      </div>
      <div className="total-section">
        <h3>Total Price: INR {props.totalPrice}</h3>
        <button>Proceed to Buy</button>
      </div>
    </div>
  );
}
const mapStateToProps =state=>{
    return{
        totalPrice: state.totalPrice,
        totalQuantity:state.totalQuantity
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addItem : ()=> dispatch(addItem()),
        delItem:()=>dispatch(delItem())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartPage)
