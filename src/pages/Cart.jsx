import React from 'react';
import CartButtons from '../component/cart/CartButtons';
import CartDetails from '../component/cart/CartDetails';
import CartImage from '../component/cart/CartImage';
import CartItem from '../component/cart/CartItem';
import Clearbutton from '../component/cart/Clearbutton';

function Cart() {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <CartImage />
            <Clearbutton />
          </div>
          <div className="content__items">
            <CartItem />
          </div>
          <div className="cart__bottom">
            <CartDetails />
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
