import Item from "../item/Item";
import { PureComponent } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./main.scss";

class Main extends PureComponent {

  render() {

    return (
      <div className="main">
        <div className="main__sidebar">
          <Sidebar />
        </div>

        <div className="main__items">
          {this.props.data.map((d,index) => (<Item key={index} data={d}/>))}
        </div>
      </div>
    );
  }
}

export default Main;
