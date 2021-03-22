import React from 'react';
import Catigories from '../component/Catigories';
import PizzaBlock from '../component/PizzaBlock';
import SortPopap from '../component/SortPopap';
import Context2 from '../context2';

function Home(props) {
  const [activeCategories, setActiveCategories] = React.useState(0);
  const [activePopupCategories, setActivePopupCategories] = React.useState(0);
  const [count, setCount] = React.useState({ cart: [] });

  const catigories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortPopap = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  const onClickCategories = (index) => setActiveCategories(index);
  const onClickPopupCategories = (index) => setActivePopupCategories(index);

  if (activePopupCategories === 0) {
    props.items.sort((a, b) => (a.rating > b.rating ? 1 : -1));
  } else if (activePopupCategories === 1) {
    props.items.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (activePopupCategories === 2) {
    props.items.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  const filteredPizzaz = props.items.filter((items) => items.category === activeCategories);

  const addProductToCart = (id) => {
    const productFromCart = count.cart.find((item) => item.id === id);
    if (productFromCart) {
      const newCart = count.cart.map((existedItem) => {
        if (existedItem.id !== id) {
          return existedItem;
        }
        return {
          ...existedItem,
          amount: existedItem.amount + 1,
        };
      });
      setCount({ cart: newCart });
    } else {
      const newProduct = { id, amount: 1 };
      setCount((count) => ({ cart: [...count.cart, newProduct] }));
    }
  };

  // const clearCart = () => setCount(() => ({ cart: [] }));

  console.log(props);

  if (activeCategories === 0) {
    return (
      <Context2.Provider value={count.cart}>
        <div className="container">
          <div className="content__top">
            <Catigories items={catigories} onClickItem={onClickCategories} />
            <SortPopap items={sortPopap} onClickItem={onClickPopupCategories} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {props.items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} addProduct={addProductToCart} />
            ))}
            {/* прокидываем массив объектов, мапим его и возвращаем компонент <PizzaBlock />  React #5 45.00 */}
            {/* React #5 53.00 вместо (...obj) можно использовать более большую запись name={obj.name} imageUrl={obj.imageUrl} price={obj.price} */}
            {/* <PizzaBlock /> */}
            {/* раньше <PizzaBlock /> был стандартным компонентом со значениями по умолчанию */}
          </div>
        </div>
      </Context2.Provider>
    );
  }
  return (
    // <Context2.Provider value={count.cart}>
    <div className="container">
      <div className="content__top">
        <Catigories items={catigories} onClickItem={onClickCategories} />
        <SortPopap items={sortPopap} onClickItem={onClickPopupCategories} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {filteredPizzaz.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} addProduct={addProductToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
