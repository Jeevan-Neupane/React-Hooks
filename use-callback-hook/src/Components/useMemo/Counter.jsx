import { useState,useMemo } from "react"

function Counter() {
    const [counterOne, setcounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCountOne=()=>{
        setcounterOne(counterOne+1);
    }
    const incrementCountTwo=()=>{
        setCounterTwo(counterTwo+1);
    }



    const isEven=    useMemo(()=>{
        let i=0;
        while(i<2000000000)i++;
          
        return counterOne%2==0;
       
    },[counterOne]);
    console.log(isEven)
  return (
    <div className='h-screen text-white text-3xl   px-10 py-3'>
        <button onClick={incrementCountOne} className="bg-black text-white p-4 rounded-md mx-4">count one - {counterOne}</button>
        <span>{isEven?"Even":"Odd"}</span>
        <button onClick={incrementCountTwo} className="bg-black text-white p-4 rounded-md mx-4">count one - {counterTwo}</button>
      
    </div>
  )
}

export default Counter
