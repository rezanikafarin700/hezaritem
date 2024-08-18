import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "../../../customHooks/useDebounce";
import { useEffect } from "react";
import { fetchUsers } from "../../../slices/userSlice";
import Spinner from "../../spinner/Spinner";
import { useState } from "react";
import "./manager.scss";

const Manager = () => {
  const [page, setPage] = useState(1);
  console.log("in manager page = ", page);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.userSlice.data);
  const [users, setUsers] = useState([...data]);
  console.log("users in manager = ", users);
  console.log("Data in manager = ", data);
  const loading = useSelector((state) => state.userSlice.loading);
  const text = useSelector((state) => state.searchUserSlice.value);
  let debounceValue = useDebounce(text, 800);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    dispatch(fetchUsers({ page: page, text: debounceValue }));
  }, [dispatch, debounceValue, page, users, data]);

  const handleScroll = () => {
    if (page < 8) {
      setUsers((users) => [...users, ...data]);
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1>Manager</h1>
      <button onClick={handleScroll}>page : {page}</button>
      {loading ? <Spinner /> : <div>{users}</div>}
    </div>
  );
};
export default Manager;
