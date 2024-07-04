import {
  Home,
  Header,
  Footer,
  Product,
  Getproduct,
  EditProduct,
  DeleteProduct,
} from "./components";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllProducts } from "./services/Service";
import DataContext from "./data/DataContext";
import "./App.scss";

const App = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [getProducts, setProducts] = useState([]);
  const [forceRender,setForceRender] = useState(false);
  const handelText = (emitText) => {
    setText(emitText);
  };

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoading(true);
        const { data: products, status } = await getAllProducts();
        if (status === 200) {
          const filterProducts = products.filter(
            (p) => p.title.indexOf(text) > -1
          );
          setProducts(filterProducts);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    featchData();
  }, [text,forceRender]);


  return (
    <DataContext.Provider value={{ products: getProducts, text, loading }}>
      <Header text={text} onChangeText={handelText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<Getproduct forceRender={forceRender} setForceRender={setForceRender}/>} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/edit/:id" element={<EditProduct forceRender={forceRender} setForceRender={setForceRender}/>} />
        <Route path="/products/delete/:id" element={<DeleteProduct />} />
      </Routes>
      <Footer />
    </DataContext.Provider>
  );
};

export default App;
