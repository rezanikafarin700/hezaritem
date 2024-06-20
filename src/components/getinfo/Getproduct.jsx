import "./getproduct.scss";

export const Getproduct = () => {
  return (
    <div className="page">
      <form className="page__box">
        <input className="page__input" name="title" placeholder="عنوان" required={true} />
        <input className="page__input" name="shorttext" placeholder="جمله کوتاه" required={true} />
        <input className="page__input" name="price" placeholder="قیمت" required={true} />
        <input className="page__input" name="photo" placeholder="لینک عکس" required={true} />
        <input  type="submit" className="page__btn" value="+ محصول جدید"/>
      </form>
    </div>
  );
};

export default Getproduct;
