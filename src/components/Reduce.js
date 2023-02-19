import React, { useReducer } from 'react';
import Counter from './Counter';
import Total from './Total';

const initialState={
    counter:0,
    counter2:0
}
const reduce =(state,action)=>{
    switch(action.type){
        case "increment":
            return {...state,counter:state.counter+1};
        case 'dicrement':
            return{...state,counter:state.counter-1};
        case "increment2":
            return {...state,counter2:state.counter2+1};
        case 'dicrement2':
            return{...state,counter2:state.counter2-1};
        default:
            return state;    
    }
}

const Reduce = () => {
    const [state,disptch]=useReducer(reduce,initialState);
    const total=state.counter+state.counter2;
    return (
        <>
            <Counter
             count={state.counter}
             increment={()=>disptch({type:"increment"})} 
             dicrement={()=>disptch({type:"dicrement"})} 
             />
            <Counter
             count={state.counter2}
             increment={()=>disptch({type:"increment2"})} 
             dicrement={()=>disptch({type:"dicrement2"})} 
             />
           <Total total={total}/>
        </>
    );
};

export default Reduce;