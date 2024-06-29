import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  const location = useLocation();

  const changeText = (event) => {
    console.log("chabgeText = ", event.target.value);
    props.onChangeText(event.target.value);
  };

  return (
    <div className="header">
      <div className="mybtn mybtn__logo">لوگو</div>
      {location.pathname === "/" ? (
        <input
          value={props.text}
          className="input-box"
          placeholder="جستجو"
          onChange={changeText}
        />
      ) : null}
      <Link to="/addproduct" className="mybtn mybtn__sucsess">
        ثبت محصول
      </Link>
    </div>
  );
};

export default Header;
