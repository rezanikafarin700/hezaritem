import { Home,Header,Footer,Getproduct,Product,EditProduct,DeleteProduct } from "./components";
import {  Route, Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import "./App.scss";

const App = () => {
  const [text,setText] = useState('');

  const handelText = (emitText) =>{
    console.log('App , handelText = ',emitText);
    setText(emitText);
  }


  return (
    <>
      <Header text={text} onChangeText={handelText}/>
      <Routes>
          <Route path="/" element={<Home text={text}/>}/>
          <Route  path="/addproduct" element={<Getproduct />} />
          <Route path="/products/:id" element={<Product />}/>
          <Route path="/products/edit/:id" element={<EditProduct />}/>
          <Route path="/products/delete/:id" element={<DeleteProduct />}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
