import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editProduct } from "../../services/Service";
import { Spinner } from "../../components";
import DataContext from "../../data/DataContext";

import "../../components/getinfo/getproduct.scss";

export const EditProduct = ({forceRender,setForceRender}) => {
  const navigate = useNavigate();

  const [getDataProduct, setDataProduct] = useState({});

  const context = useContext(DataContext);

  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const product = context.products.find((p) => p.id === id);
    setDataProduct(product);
  }, []);

  const handelInput = (event) => {
    setDataProduct({
      ...getDataProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { status } = await editProduct(getDataProduct);
      if (status === 200) {
        setDataProduct({});
        setLoading(false);
        setForceRender(!forceRender);
        navigate("/");
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="page">
      {loading ? (
        <Spinner />
      ) : (
        <form className="page__box" onSubmit={handelSubmit}>
          <input
            className="page__input"
            name="title"
            value={getDataProduct.title}
            onChange={handelInput}
            placeholder="عنوان"
            required={true}
          />
          <input
            className="page__input"
            name="text"
            value={getDataProduct.text}
            onChange={handelInput}
            placeholder="جمله کوتاه"
            required={true}
          />
          <input
            className="page__input"
            name="price"
            value={getDataProduct.price}
            onChange={handelInput}
            placeholder="قیمت"
            required={true}
          />
          <input
            className="page__input"
            name="image"
            value={getDataProduct.image}
            onChange={handelInput}
            placeholder="لینک عکس"
            required={true}
          />
          <div className="page__btns">
            <input
              type="submit"
              className="mybtn mybtn__sucsess"
              value="ویرایش محصول"
            />
            <Link to="/" className="mybtn mybtn__denger">
              بازگشت
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProduct;
