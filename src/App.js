import { Header, Footer, Main } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [getProducts, setProducts] = useState([]);
  const [getUsers, setUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect...");
    const featchData = async () => {
      try {
        setLoading(true);
        const { data: products } = await axios.get(
          "http://localhost:9000/products"
        );
        const { data: users } = await axios.get("http://localhost:9000/users");
        setProducts(products);
        setUsers(users);
        setLoading(false);

        console.log("products = ", products);
        console.log("users = ", users);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    featchData();
  }, []);

  console.log("getProducts = ", getProducts);

  return (
    <div className="app">
      <Header />
      <Main data={getProducts} loading={loading}/>
      <Footer />
    </div>
  );
};

export default App;
