import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editProduct, getProduct } from "../../services/Service";
import { Spinner,ImageUpload } from "../../components";
import "../../components/getinfo/getproduct.scss";

export const EditProduct = () => {
  const navigate = useNavigate();

  const [getDataProduct, setDataProduct] = useState({
    id: null,
    title: "",
    shipping_cost : "",
    return : "",
    description: "",
    price: "",
    image: {},
    images : []
  });

  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const getImage = (img) => {
    setImages(()=> [...img]);
    console.log('images products = ',images);
  };



  useEffect(() => {
    const featchData = async () => {
      try {
        setLoading(true);
        const { data: productData } = await getProduct(id);
        setDataProduct(() => {
          let newState = { ...productData };
          console.log('product Data =',productData)
          return newState;
        });
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };
    featchData();
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
          <ImageUpload onUpload={getImage} PreviousPhotos={getDataProduct.images}/>
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
          <textarea
            className="page__textarea"
            name="description"
            value={getDataProduct.description}
            onChange={handelInput}
            placeholder="توضیحات"
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
