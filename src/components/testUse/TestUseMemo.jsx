import { useState,useRef,useMemo } from "react";
const TestUseMemo = () =>{
    const [count,setCount] = useState(0);
    const [list,setList] = useState([]);

    const claculate = useMemo(() => hezar(count) , [count]);

    const inputRef = useRef(null);

    const printList = () => {
        return(
            <>
                {list.map((l,i) =>(<div key={i}>{l}</div>))}
            </>
            )
    }

    const addList = () => {
        console.log('addList');
        setList([...list,inputRef.current.value]);
        inputRef.current.value = "";
    }

    const addCount = () => {
        setCount(()=> count + 1);
        console.log('addCount');
    }


    return(
        <>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
            <br/>
            <input  ref={inputRef} />
            <button onClick={addList}>+</button>
            {printList()}

            <hr/>
            <p>claculate : {claculate}</p>

        </>
    );

}

const hezar = (num) => {
    console.log('hezar');
    return num * 1000;
}

export default TestUseMemo;