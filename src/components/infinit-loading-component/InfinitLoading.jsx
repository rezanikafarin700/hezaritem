import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import ShowData from "../show-data/ShowData";
import "./infint-loading.scss";

const InfinitLoading = ({ BaseURL, config, fields, children }) => {
  const [totalData, setTotalData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(0);
  const [numberOfData, setNumberOfData] = useState(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get(`${BaseURL}?page=${page}`, config);
      setTotalData((oldData) => [...oldData, ...response.data.data]);
      setVisible((prev) => prev + response.data.per_page);
      setNumberOfData(response.data.total);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      // window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      window.scrollTo({ top: window.scrollY, behavior: "smooth" });
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
            <div>
              {totalData.map((data, index) => (
                <div className="card" key={index}>
                  <ShowData data={data} fields={fields} />
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

            <hr />
          </>
        )}
      </div>
    </>
  );
};

export default InfinitLoading;
