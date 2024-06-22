import { Home,Header,Footer,Getproduct } from "./components";
import {  Route, Routes } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path="/addproduct" element={<Getproduct />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
