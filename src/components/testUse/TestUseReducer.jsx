import { useReducer } from "react";

const reducer = (state,action)=>{
    switch(action.type){
        case "INCREMENT" : 
        return {count : state.count + 1}
        case "DECREMENT" :
            return { count : state.count - 1}
        default : return state;
    }
}


const TestUseReducer = () => {
    const[state,dispatch] = useReducer(reducer,{count : 0});


    const increment = () =>{
        dispatch({type : "INCREMENT"});
    }
    
    const decrement = () =>{
        dispatch({type : "DECREMENT"});
    }
    

    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )


}

export default TestUseReducer;