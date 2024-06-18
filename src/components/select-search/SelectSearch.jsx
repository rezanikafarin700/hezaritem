import { PureComponent } from "react";
import "./select-search.scss";

class SelectSearch extends PureComponent {
  state = {
    users: [
      { id: 1, name: "علی", age: 23 },
      { id: 2, name: "علیرضا", age: 30 },
      { id: 3, name: "جواد", age: 28 },
      { id: 4, name: "محمد", age: 13 },
      { id: 5, name: "محمد رضا", age: 33 },
      { id: 6, name: "مهرداد", age: 25 },
      { id: 7, name: "میلاد", age: 21 },
      { id: 8, name: "احمدرضا", age: 22 },
      { id: 9, name: "رضا", age: 22 },
      { id: 10, name: "فرهاد", age: 22 },
      { id: 11, name: "آرمان", age: 22 },
      { id: 12, name: "بابک", age: 22 },
    ],
    textBox: "",
  };

  selectItem = (e)=>{
    console.log(e.target.innerText);
    this.setState((oldState) => {
        let newState = { ... oldState };
        newState.textBox = e.target.innerText;
        return newState;
    })
  }

  showList = () => {
    let users = this.state.users.filter(
      (user) => user.name.indexOf(this.state.textBox) > -1
    );
    return users.map((user) => <div className="search__item" onClick={this.selectItem}>{user.name}</div>);
  };

  filterUsers = (e) => {
    this.setState((oldState) => {
      let newState = { ...oldState };
      newState.textBox = e.target.value;
      return newState;
    });
  };

  render() {
    return (
      <div className="search">
        <input onChange={this.filterUsers}  value={this.state.textBox}/>
        <div className="search__box">{this.showList()}</div>
      </div>
    );
  }
}

export default SelectSearch;
