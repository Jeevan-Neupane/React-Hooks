import { set } from "lodash";
import { useState } from "react"


function PreviouState() {
    const intialCount=0;
    const [count,setCount]=useState(intialCount);

  const incrementByFive=()=>{
    for(let i=0;i<5;i++){
        setCount(previousCount=>previousCount+1
        );
    }
  }


  return (
    <div>
        Count:{count}
        <button onClick={()=>setCount(intialCount)}>Reset</button>
        <button onClick={()=>setCount(previousCount=>previousCount+1)}>Increment</button>
        <button onClick={()=>setCount(previousCount=>previousCount-1)}>Decrement</button>
        <button onClick={incrementByFive}>Increment by 5</button>
       
      
    </div>
  )
}

export default PreviouState;
