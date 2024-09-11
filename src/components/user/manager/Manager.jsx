import { Link } from "react-router-dom";
import { InfiniteLoadingManager } from "../..";

import './manager.scss';

const UseInfiniteLoading = () => {
  const BaseUrl = "http://localhost/back-sef/public/api/users";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer hL3mLquFhdkhpj6qEfIBfjyOioIMLe34lr6kmQ9S4R5G77zR0sEzQpfL1zC6ZQaveBRK21K1amv4lBz5x3Gu5wySwvuY15ZqRCvV",
    },
  };

  
  return (
    <div className="manager">
      <Link to="/register" className="manager__add-user">+</Link>
      {/* <button className="manager__add-user" onClick={refreshPage}>+</button> */}
      <InfiniteLoadingManager BaseURL={BaseUrl} config={config} />
    </div>
  );
};
export default UseInfiniteLoading;
