import { useEffect, useState } from "react"


function UpdateTitle() {
    const [count,setCount]=useState(1);
    const increaseCount=()=>{
        setCount(count=>count+1);
    }
   useEffect(()=>{
    document.title=`You Click ${count} times`;
   },[])

  return (
    <div className="h-full flex items-center justify-center">
     <button onClick={increaseCount} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click {count} times</button>
    </div>
  )
}

export default UpdateTitle
