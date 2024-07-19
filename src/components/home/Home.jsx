import Item from "../item/Item";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../slices/productSlice";
import { useDebounce } from "../../customHooks/useDebounce";
import { Sidebar, Spinner } from "../../components";
import "./home.scss";

const  Home = () => {
    let text = useSelector(state => state.searchSlice.value);
    let debounceValue = useDebounce(text,800);
    const data =  useSelector(state => state.productSlice.data);
    const loading = useSelector(state => state.productSlice.loading);
    const dispatch =  useDispatch();
    useEffect(()=>{
      dispatch(fetchProducts(debounceValue));
    },[dispatch,debounceValue]);
    return (

<div className="main">
        <div className="main__sidebar">
          <Sidebar />
        </div>

        <div className="main__items">
          {loading ? (
            <Spinner />
          ) : (
            data.map((d, index) =><Item key={index} data={d} />)
          )}
        </div>
      </div>
    );
  }

export default Home;
