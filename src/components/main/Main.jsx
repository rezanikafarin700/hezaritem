import { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import Item from "../item/Item";
import { getAllData,findData } from '../../data/data';
import "./main.scss";

class Main extends Component {
  state = { data : getAllData()}
  render() {
    let d = findData(3);
    console.log(d);

    return (
      <div className="main">
        <div className="main__sidebar">
          <Sidebar />
        </div>

        <div className="main__items">
          {this.state.data.map((d,index) => (<Item key={index} data={d}/>))}
        </div>
      </div>
    );
  }
}

export default Main;
