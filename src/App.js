import React from "react";
import "./assets/css/mystyle.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Brand from "./components/elements/widgets/brand/Brand";
import Features from "./components/pages/Features/Features";
import "./assets/css/mystyle.css";
import "./assets/css/style.css";
//import "./assets/css/layout.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import ToTop from './utilities/ToTop';
import WishList from "./components/pages/wishlist/Wishlist";
import Cart from "./components/pages/cart/Cart";
import Compare from "./components/pages/compare/Compare";
import ProductList from "./components/pages/productlist/ProductList";
import MyAccount from "./components/pages/myaccount/MyAccount";
import ReduxSample from '../src/components/pages/reduxsample/ReduxSample'
import { Provider } from 'react-redux';
import store from './redux/store';
import Test from './components/pages/Test/Test';
import Login from './components/pages/User/Login';
import Register from './components/pages/User/Register';

function App() {
  return (
    <BrowserRouter>
    <ToTop>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/compare"><Compare/></Route>   
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path ="/wishlist"><WishList/></Route>
        <Route exact path="/features"><Features /><Brand/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
        <Route exact path="/productlist"><ProductList/></Route>
        <Route exact path="/myaccount"><MyAccount/></Route>
        <Route exact path="/test"><Test/></Route>
        <Route exact path="/register"><Register/></Route>
        <Route exact path="/login"><Login/></Route>
        <Provider store={store}>
          <Route exact path="/reduxsample"><ReduxSample/></Route>
        </Provider>
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
