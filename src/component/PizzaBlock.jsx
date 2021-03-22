import React from 'react';

function PizzaBlock(props) {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setactiveType] = React.useState(props.types[0]);
  const [activeSize, setactiveSize] = React.useState(props.sizes[0]);
  // React #5 1.16.00 React.useState(props.types[0])

  const onSelectType = (index) => setactiveType(index);
  const onSelectSize = (index) => setactiveSize(index);

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{props.name}</h4>
      {/* с помощью props.name поддтягиваем индивидуальное название из json */}
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              onClick={() => onSelectType(index)}
              className={`${activeType === index ? 'active' : ''} 
                ${!props.types.includes(index) ? 'disabled' : ''}`}
              //React #5 1.10.00 если в types нет index, то disabled
              key={`${type}_${index}`}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              onClick={() => onSelectSize(index)}
              className={`${activeSize === index ? 'active' : ''} 
              ${!props.sizes.includes(size) ? 'disabled' : ''}`}
              //React #5 1.20.00 !props.sizes.includes(size) не понятно, почему в availableTypes работает index, а здесь size
              key={`${size}_${index}`}>
              {size} см.
            </li>
          ))}
          {/* <li className="active">26 см.</li>
          <li>30 см.</li>
          <li>40 см.</li> */}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {props.price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={() => props.addPropduct(props.id)}>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
