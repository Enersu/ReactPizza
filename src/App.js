import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../src/component/Header';
import { CartProvider } from './CartContext';
import Cart from './pages/Cart';
import Home from './pages/Home';

export const ProductContext = React.createContext();

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const requestURL = 'https://api.mocki.io/v2/db1a230d';
    fetch(requestURL)
      .then((res) => res.json())
      .then((result) => setProducts(result.pizzas));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <CartProvider>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path="/" render={() => <Home items={products} />} />
            {/* React router (вместо обычного компонента <Home />) */}
            {/* Вариант ниже обычный, вариант с Home дял того, чтобы прокинуть props в компонент*/}
            <Route exact path="/cart" component={Cart} />
          </div>
        </div>
      </CartProvider>
    </ProductContext.Provider>
  );
}

export default App;
