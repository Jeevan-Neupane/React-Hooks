import React, { useState } from 'react'

function UseStateWithArray() {
    const [items,setItems]=useState([]);


    const renderedItems=items.map((item)=>{
        return <li key={item.id}>{item.value}</li>
    })
    const addItems=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10+1),
        }])
    }

  
  return (
    <div>
        <button onClick={addItems}>Add Items</button>
        {renderedItems}
      
    </div>
  )
}

export default UseStateWithArray
