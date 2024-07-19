import { Home,Header,Footer,Getproduct,Product,EditProduct,DeleteProduct } from "./components";
import {  Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />}/>
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
