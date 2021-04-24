import React from 'react';
import CartButtons from '../component/cart/CartButtons';
import CartDetails from '../component/cart/CartDetails';
import CartImage from '../component/cart/CartImage';
import CartItem from '../component/cart/CartItem';
import Clearbutton from '../component/cart/Clearbutton';
import { CartContext } from '../CartContext';
import { ProductContext } from '../App';

function Cart() {
  const products = React.useContext(ProductContext);
  const value = React.useContext(CartContext);

  const getProductInfo = (id) => {
    return products.find((product) => product.id === id);
  };

  const cart = value.visible.cart || [];

  console.log(products);
  console.log(value);

  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <CartImage />
            <Clearbutton />
          </div>
          <div className="content__items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} product={getProductInfo(item.id)} value={value} />
            ))}
          </div>
          <div className="cart__bottom">
            <CartDetails cart={cart} products={products} />
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
