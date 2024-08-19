import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import "./infint-loading.scss";

const InfinitLoading = () => {
  const [lastPage, setLastPage] = useState(0);
  const [totalData, setTotalData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(0);
  const [numberOfData, setNumberOfData] = useState(0);

  const BaseURL = "http://localhost/back-sef/public/api/users";

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get(BaseURL + `?page=${page}`);
      setTotalData((oldData) => [...oldData, ...response.data.data]);
      setIsLoading(false);
      setLastPage(response.data.last_page);
      setVisible((prev) => prev + response.data.per_page);
      setNumberOfData(response.data.total);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const handleOnScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    console.log('document.documentElement() = ',document.documentElement.scrollHeight);
    visible < numberOfData && numberOfData > 0
      ? window.addEventListener("scroll", handleOnScroll)
      : window.removeEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, [visible]);

  return (
    <>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h1>window.scrollY : {window.scrollY}</h1>
            <h2>window.innerHeight : {window.innerHeight}</h2>
            <h2>{numberOfData}</h2>
            <h2>last page = {lastPage}</h2>
            <div>
              {totalData.map((data, index) => (
                <div className="card" key={index}>
                  <h1>{data.name}</h1>
                  <p>{data.email}</p>
                  <p>{data.mobile}</p>
                  <p>{data.city}</p>
                  <p>{data.address}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              scroll top
            </button>

            Visible : {visible}
            <h1>window.scrollY :  {window.scrollY}</h1>
            <h1>window.innerHeight : {window.innerHeight}</h1>

            <hr />
          </>
        )}
      </div>
    </>
  );
};

export default InfinitLoading;
