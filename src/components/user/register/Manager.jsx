import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "../../../customHooks/useDebounce";
import { useEffect } from "react";
import { fetchUsers } from "../../../slices/userSlice";
import Spinner from "../../spinner/Spinner";
import { useState } from "react";

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
    dispatch(fetchUsers({ page: page, text: debounceValue }));
  }, [dispatch, debounceValue, page, users,data]);

  const addPage = () => {
    setUsers((users) => [...users, ...data]);
    let a = page + 1;
    setPage(a);
  };

  return (
    <div>
      <h1>Manager</h1>
      <button onClick={addPage}>page : {page}</button>
      {loading ? <Spinner /> : <div>{users}</div>}
    </div>
  );
};
export default Manager;
