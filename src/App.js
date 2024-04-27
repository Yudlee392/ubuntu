// import logo from './logo.svg';
import './App.css';
import Navigation from './customers/components/Navigation/Navigation';
import HomePage from './customers/Pages/HomePage';
import Footer from './customers/components/Footer/Footer';
import Product from './customers/components/Product/Product';
import ProductDetail from './customers/components/ProductDetail/ProductDetail';
import Cart from './customers/components/Cart/Cart';
import Checkout from './customers/components/Checkout/Checkout';

function App() {
  return (
    <div className="">
      <Navigation/>
      {/* <HomePage/> */}
      {/* <ProductDetail/> */}
      {/* <Product/> */}
      {/* <Cart/> */}
      <Checkout/>
      <Footer/>
    </div>
  );
}

export default App;
