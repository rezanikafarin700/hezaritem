import { Main } from "../../components";
import { useEffect, useState } from "react";
import { getAllProducts, getAllUsers } from "../../services/Service";
import "./home.scss";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [getProducts, setProducts] = useState([]);
  const [getUsers, setUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect...");
    const featchData = async () => {
      try {
        setLoading(true);
        const { data: products } = await getAllProducts();
        const { data: users } = await getAllUsers();
        setProducts(products);
        setUsers(users);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    featchData();
  }, []);

  console.log("getProducts = ", getProducts);

  return (
    <div className="home">
      <Main data={getProducts} loading={loading} />
    </div>
  );
};

export default Home;
