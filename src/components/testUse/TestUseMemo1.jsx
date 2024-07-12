import { useMemo,useState,useRef, useEffect } from "react";

const TestUseMemo = () =>{

    const [todo,setTodo] = useState([]);
    const inputRef = useRef(null);
    const [count,setCount] = useState(0);
    const calculation = useMemo(() => delayAddCount(),[todo]);


    const addTodo = () =>{
        setTodo([...todo, inputRef.current.value]);
        inputRef.current.value = "";
        console.log('addTodo render ...');
    }

    const addCount = () =>{
        setCount(count + 1)
        console.log('addCount render ...');
    }

    return(
        <>
            {todo.map(t => (<div key={t}>{t}</div>))}
            <input type="text" ref={inputRef} />
            <button onClick={addTodo}>+</button>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
            {/* <p>claculation : {calculation}</p> */}

        </>
    )

}

const delayAddCount = () =>{
    console.log('render delayAddCount...');
    for(var i=0;i<=1000000000;i++){
        
    }
    return i ;
}



export default TestUseMemo;