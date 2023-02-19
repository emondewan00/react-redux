import React, { useReducer } from 'react';

const initialState=[
    {
      id:1,
      count:0
    },
    {
      id:2,
      count:0
    }
  ];
const reduce =(state,action)=>{
    if(action==="incriment"){
        console.log("hallo")
    }else if (action === "dicriment"){
        console.log("hallo")
    }
}
const Reduce = () => {
    const [state,disptch]=useReducer(reduce,initialState);
    console.log(state);
    return (
        <div>
            hallo
        </div>
    );
};

export default Reduce;