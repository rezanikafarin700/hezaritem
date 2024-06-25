import { useEffect, useState } from "react";
import Item from "../item/Item";
import { getProduct } from "../../services/Service";
import { useParams } from "react-router-dom";
import "./product.scss";
import Spinner from "../spinner/Spinner";

const Product = () => {
  const { id: productId } = useParams();

  const [getDataProduct, setDataProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const handelGetProduct = async () => {
    setLoading(true);
    try {
      const { data } = await getProduct(productId);
      console.log("Product data = ", data);
      setDataProduct(data);
      setLoading(false);
    } catch (err) {
      console.log("eeeer = ", err.message);
    }
  };

  useEffect(() => {
    handelGetProduct();
    console.log("in Product Component = ", getDataProduct);
  }, []);

  return (
    <div className="product">
      {loading ? <Spinner /> : <Item data={getDataProduct} />}
    </div>
  );
};
export default Product;
