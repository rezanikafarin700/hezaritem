import Item from "../item/Item";
import { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./main.scss";

class Main extends Component {

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
