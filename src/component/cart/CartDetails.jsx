import React from 'react';

function CartDetails(props) {
  // const items = props;
  const arrItems = props.cart;
  const arrProducts = props.products;

  const getProductInfo = (id) => {
    return arrProducts.find((product) => product.id === id);
  };

  const getCartDetails = (arr, arr2) => {
    const product = arr.map((item) => {
      getProductInfo(item.id);
    });
  };

  // const getProductInfo = (id) => {
  //   return arrProducts.find((product) => product.id === id);
  // };

  // const getCartInfo = arrayProducts.reduce((acc, products,) => {
  //   getProductInfo(id)
  // }, 0)

  // console.log(getProductInfo(items.cart.id));

  return (
    <div className="cart__bottom-details">
      <span>
        {' '}
        Всего пицц: <b>...</b>{' '}
      </span>
      <span>
        {' '}
        Сумма заказа: <b>....</b>{' '}
      </span>
    </div>
  );
}

export default CartDetails;
// array.reduce
