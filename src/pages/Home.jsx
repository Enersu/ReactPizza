import React from 'react';
import Catigories from '../component/Catigories';
import PizzaBlock from '../component/PizzaBlock';
import SortPopap from '../component/SortPopap';

function Home(props) {
  const catigories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortPopap = ['популярности', 'цене', 'алфавиту'];
  console.log(props);
  return (
    <div className="container">
      <div className="content__top">
        <Catigories items={catigories} />
        <SortPopap items={sortPopap} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {props.items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
        {/* прокидываем массив объектов, мапим его и возвращаем компонент <PizzaBlock />  React #5 45.00 */}
        {/* React #5 53.00 вместо (...obj) можно использовать более большую запись name={obj.name} imageUrl={obj.imageUrl} price={obj.price} */}
        {/* <PizzaBlock /> */}
        {/* раньше <PizzaBlock /> был стандартным компонентом со значениями по умолчанию */}
      </div>
    </div>
  );
}

export default Home;
