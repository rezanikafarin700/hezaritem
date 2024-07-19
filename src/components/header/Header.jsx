import { Link, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updateSearch } from "../../slices/searchSlice";
import "./header.scss";

const Header = () => {
  const location = useLocation();

  const text = useSelector(state => state.searchSlice.value);
  const dispatch = useDispatch();


  return (
    <div className="header">
      <div className="mybtn mybtn__logo">لوگو</div>
      {location.pathname === "/" ? (
        <input
          value={text}
          className="input-box"
          placeholder="جستجو"
          onChange={(e) => dispatch(updateSearch(e.target.value))}
        />
      ) : null}
      <Link to="/addproduct" className="mybtn mybtn__sucsess">
        ثبت محصول
      </Link>
    </div>
  );
};

export default Header;
