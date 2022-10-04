import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Header from './components/Header';
import CartList from './components/cartList';

function App() {
  return (
    <div className="">

<Header/>
    <div>

      <Routes>
      
        <Route path='/' element={<Store/>}/>
     
      </Routes>
    </div>
    <CartList/>
    </div>
  );
}

export default App;
