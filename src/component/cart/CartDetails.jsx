import React from 'react';

function CartDetails() {
  return (
    <div className="cart__bottom-details">
      <span>
        {' '}
        Всего пицц: <b>3 шт.</b>{' '}
      </span>
      <span>
        {' '}
        Сумма заказа: <b>900 ₽</b>{' '}
      </span>
    </div>
  );
}

export default CartDetails;
