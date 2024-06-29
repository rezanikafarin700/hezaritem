import { Main } from "../../components";
import { useEffect, useState } from "react";
import { getAllProducts, getAllUsers } from "../../services/Service";
import "./home.scss";

const Home = ({text}) => {
  const [loading, setLoading] = useState(false);
  const [getProducts, setProducts] = useState([]);
  const [getUsers, setUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect...");
    const featchData = async () => {
      try {
        setLoading(true);
        const { data: products } = await getAllProducts();
        const productsFilter = products.filter(p => {
          console.log('text in filter =',text);
          return p.title.indexOf(text ) > -1;
        })
        const { data: users } = await getAllUsers();
        setProducts(productsFilter);
        setUsers(users);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    featchData();
  }, [text]);

  console.log("text in Home = ", text);

  return (
    <div className="home">
      <Main data={getProducts} loading={loading} />
    </div>
  );
};

export default Home;
