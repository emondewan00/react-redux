import { useState } from "react";
import Counter from "./components/Counter";
import Total from "./components/Total";

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
function App() {
  const [count,setCount]=useState(initialState);

    const increment=(id)=>{
        const updatedCounter=count.map((c)=>{
          if(c.id===id){
            return {...c,count:c.count+1}
          }
          return {...c}
        })
        setCount(updatedCounter)
    }
    const dicrement=(id)=>{
        const updatedCounter=count.map((c)=>{
          if(c.id===id){
            return {...c,count:c.count-1}
          }
          return {...c}
        })
        setCount(updatedCounter)
    }
    const total=count.reduce((prev,currn)=>prev+currn.count,0);

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
            {count.map((c)=>(
            <Counter 
                key={c.id}
                count={c.count} 
                id={c.id}
                increment={increment}
                dicrement={dicrement}
             />))}
            <Total total={total}/>
        </div>
    </div>
  );
}

export default App;
