import { useState,useEffect } from "react";

function ConditionalUpdate() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    const increaseCount=()=>{
        setCount(count=>count+1);
    }
   useEffect(()=>{
    console.log("Use Effect Updating Document Title")
    document.title=`You Click ${count} times`;
   },[count])

   const handleNameChange=(events)=>{
    setName(events.target.value)

   }

  return (
    <div className="h-full flex items-center justify-center">
     <input type="text" value={name} onChange={handleNameChange}/>
     <h1>I am rendering {name.length+count}</h1>
     <button className="waves-effect waves-light btn-small" onClick={increaseCount} >Click {count} times</button>
    </div>
  )
}

export default ConditionalUpdate
