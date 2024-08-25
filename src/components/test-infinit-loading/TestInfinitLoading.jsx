import InfinitLoading from "../infinit-loading-component/InfinitLoading";
import "./test-infinit-loading.scss";

const TestInfinitLoading = () => {
  // const BaseURL = "https://jsonplaceholder.typicode.com/todos";
  const BaseURL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
  // const BaseURL = "https://gorest.co.in/public/v2/users";
  const config = {};

  return (
    <>
      <InfinitLoading BaseURL={BaseURL} config={config} responseDataField='Time Series'>
        <div className="container">
          {/* <h2 className="container__title">title</h2>
          <p className="container__user">userId</p>
          <p className="container__id">id</p>
          <i className="container__completed">completed</i> */}

          {/* <div>id</div>
          <div>name</div>
          <i className="red">email</i>
          <div>gender</div>
          <div>status</div> */}

          <div>open</div>
          <div>high</div>
          <div>low</div>
          <div>close</div>
          <div>volume</div>
        </div>
      </InfinitLoading>
    </>
  );
};

export default TestInfinitLoading;
