import { useEffect, useState } from "react";
import Item from "../item/Item";
import { getProduct } from "../../services/Service";
import { useParams, useNavigate } from "react-router-dom";
import "./product.scss";

const Product = () => {
  const { id: productId } = useParams();

  const [getDataProduct, setDataProduct] = useState({});
  //   const navigate = useNavigate();

  const handelGetProduct = async () => {
    try {
      const { data } = await getProduct(productId);
      console.log("Product data = ", data);
      setDataProduct(data);
    } catch (err) {
      console.log('eeeer = ',err.message);
    }
  };

  useEffect(() => {
    handelGetProduct();
    console.log("in Product Component = ", getDataProduct);
  }, []);

  return <div className="product">{<Item data={getDataProduct} />}</div>;
};
export default Product;
