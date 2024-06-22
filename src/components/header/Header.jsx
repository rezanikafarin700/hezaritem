import { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class header extends PureComponent {
  render() {
    return (
      <div className="header">
        <div className="mybtn mybtn__logo">لوگو</div>
        <Link to="/addproduct">
          <button onClick={this.addProduct} className="mybtn mybtn__sucsess">
            ثبت محصول
          </button>
        </Link>
      </div>
    );
  }
}

export default header;
