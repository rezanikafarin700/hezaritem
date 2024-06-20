import "./getproduct.scss";

export const Getproduct = () => {
  return (
    <div className="page">
      <form className="page__box">
        <input
          className="page__input"
          name="title"
          placeholder="عنوان"
          required={true}
        />
        <input
          className="page__input"
          name="shorttext"
          placeholder="جمله کوتاه"
          required={true}
        />
        <input
          className="page__input"
          name="price"
          placeholder="قیمت"
          required={true}
        />
        <input
          className="page__input"
          name="photo"
          placeholder="لینک عکس"
          required={true}
        />
        <div className="page__btns">
          <input type="submit" className="mybtn mybtn__sucsess" value="+ محصول جدید" />
          <div className="mybtn mybtn__denger">بازگشت</div>
        </div>
      </form>
    </div>
  );
};

export default Getproduct;
