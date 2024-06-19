// import { PureComponent } from "react";
// import { Header, Footer, Main } from "./components";
// import axios from "axios";

// class App extends PureComponent {
//   state = {
//     products: [],
//     users: [],
//   };
//   constructor() {
//     super();
//     console.log("[App.js] constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log("[App.js] getDerivedStateFromProps");
//     return null;
//   }

//   render() {
//     console.log("[App.js] render");
//     console.log("state = ", this.state);
//     return (
//       <>
//         <Header />
//         <Main data={this.state.products} loading={false} />
//         <Footer />
//       </>
//     );
//   }

//   componentDidMount() {
//     console.log(`%c [App.js] componentDidMount`, "color : blue");
//     const featchData = async () => {
//       let { data : products} = await axios.get("http://localhost:9000/products");
//       this.setState(() => {
//         console.log(
//           `%c[App.js] setState in componentDidMount`,
//           "color : green"
//         );
//         let newState = { ...this.state };
//         newState.products = [...newState.products, ...products];
//         return newState;
//       });
//     };
//     featchData();
//   }
// }
// export default App;

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
