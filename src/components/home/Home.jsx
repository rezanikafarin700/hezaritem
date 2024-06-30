import { Main } from "../../components";
import { useEffect, useState } from "react";
import { getAllProducts, getAllUsers } from "../../services/Service";
import "./home.scss";

const Home = ({ text }) => {
  const [loading, setLoading] = useState(false);
  const [getProducts, setProducts] = useState([]);
  const [getUsers, setUsers] = useState([]);

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoading(true);
        const { data: products } = await getAllProducts();

        // میتوان دادهای دیگری را که لازم است خواند . مثال
        // const { data: users } = await getAllUsers();
        // setUsers(users);

        setProducts(products);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    console.log('mounting ....');
    featchData();
  }, []);




  useEffect(() => {
    const featchData = async () => {
      try {
        setLoading(true);
        const { status, data } = await getAllProducts();

        const dataFilter = data.filter((p) => {
          return p.title.indexOf(text) > -1;
        });
        if (status === 200) {
          setLoading(false);
          setProducts(dataFilter);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    console.log('Updateing ...');
    featchData();
  }, [text]);


  return (
    <div className="home">
      <Main data={getProducts} loading={loading} />
    </div>
  );
};

export default Home;
