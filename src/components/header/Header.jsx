import { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="mybtn mybtn__logo">لوگو</div>
        <Link
          to="/addproduct"
          className="mybtn mybtn__sucsess"
        >
          ثبت محصول
        </Link>
      </div>
    );
  }
}

export default header;
