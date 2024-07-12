import { useEffect,useState } from "react";

const useFetch = url =>{
    const [data,setData] = useState(null);
    useEffect(()=>{
        fetch(url).then(res => res.json()).then(data => setData(data))

    },[url]);
    return [data];
}

export default useFetch;

/****** */

// HOW TO USE HOOK ?

// 1.IMPORT
//import useFetch from "./components/costomHooks/useFetch";

// 2. DEFINE
// const [users] = useFetch('http://localhost:9000/users');

// 3.SHOW DATA
// {users ? users.map(u => (<div>{u.fullname}</div>)) : ""}
