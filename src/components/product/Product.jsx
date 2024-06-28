import { useEffect, useState } from "react";
import Item from "../item/Item";
import { getProduct } from "../../services/Service";
import { useParams,Link } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import "./product.scss";

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
      {loading ? (
        <Spinner />
      ) : (
        <div className="wrapper">
          <Item data={getDataProduct} />
          <div className="scale">
            <Link to={`/products/delete/${productId}`} className="mybtn mybtn__delete">حذف</Link>
            <Link to={`/products/edit/${productId}`} className="mybtn mybtn__denger">ویرایش</Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
