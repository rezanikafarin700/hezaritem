import InfinitLoading from "../infinit-loading-component/InfinitLoading";
import "./use-infinite-loading.scss";
import ShowData from "../show-data/ShowData";

const UseInfiniteLoading = () => {
  //    const  BaseUrl= "http://localhost/back-sef/public/api/users";
  const BaseUrl = "http://localhost/back-sef/public/api/products";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer hL3mLquFhdkhpj6qEfIBfjyOioIMLe34lr6kmQ9S4R5G77zR0sEzQpfL1zC6ZQaveBRK21K1amv4lBz5x3Gu5wySwvuY15ZqRCvV",
    },
  };
  // const fields  = [ 'name','address','mobile','email','city'];
  const fields = ["title", "price", "discount", "shipping_cost", "description"];

  return (
    <div style={{ minHeight: "100vh" }}>
      <InfinitLoading
        BaseURL={BaseUrl}
        config={config}
        fields={fields}
      ></InfinitLoading>
    </div>
  );
};
export default UseInfiniteLoading;
