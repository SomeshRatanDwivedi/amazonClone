import './App.css';
import Navbar from './component/Navbar';
import Lowernavbar from './component/Lowernavbar';  
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Shirt from './component/Shirt';
import Pant from './component/Pant'
import { useState } from 'react';

function App() {
  const [cart, setCart]=useState([]);
   function addToCart(product){
    console.log(product);
    const productInCart=cart.find(ele=>{
      return ele.id===product.id;
    })
   
    if(productInCart){
      if(productInCart.quant < productInCart.quantity){
        const newCart=cart.map(ele=>{
          return ele.id===product.id?{...productInCart, quantity:productInCart.quantity+1}:ele;
        })
        setCart(newCart);
      }
    }
    else{
      setCart([...cart, { ...product, quantity: 1 }])
    }
    console.log(cart.length);
  }
  
  return (
    <div>
      <BrowserRouter>
      <Navbar cart={cart}/>
      <Lowernavbar/>
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/shirt' element={<Shirt/>}/>
      <Route path='/pant' element={<Pant/>}/>

    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
