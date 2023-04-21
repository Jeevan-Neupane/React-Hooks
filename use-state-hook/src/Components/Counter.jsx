import { set } from 'lodash';
import {useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1)
    }

  return (
    <div>
        <button className="button is-success" onClick={handleClick}>Count {count}</button>
      
    </div>
  )
}

export default Counter
