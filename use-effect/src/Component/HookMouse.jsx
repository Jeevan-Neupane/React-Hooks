import { useState,useEffect } from "react"

function HookMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

   const mousePosition=(events)=>{
    console.log('mouse-Events')
    setX(events.x);
    setY(events.y);
    
}
    useEffect(()=>{
        console.log("Event Listner is Added");
        window.addEventListener('mousemove',mousePosition);

        return ()=>{
            console.log("Event Listner is Removed")
            window.removeEventListener('mousemove',mousePosition);
        }
    },[])

  return (
    <div>
        X-{x} Y-{y}
      
    </div>
  )
}

export default HookMouse
