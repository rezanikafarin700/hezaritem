import { Main } from "../../components";
import DataContext from "../../data/DataContext";
import { useContext } from "react";
import "./home.scss";

const Home = () => {
  const context = useContext(DataContext);

  return (
    <div className="home">
      <Main data={context.products} loading={context.loading} />
    </div>
  );
};

export default Home;
