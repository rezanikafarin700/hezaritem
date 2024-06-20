import { Header, Footer, Main,Getproduct } from "./components";
import { useEffect, useState } from "react";
import { getAllProducts,getAllUsers } from "./services/Service";
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
        const { data: products } = await getAllProducts()
        const { data: users } = await getAllUsers();
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
