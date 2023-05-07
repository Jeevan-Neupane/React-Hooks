import React from 'react'

function Button({children,handleClick}) {

    console.log(`Button of ${children} is rendering`);


  return (
    <button onClick={handleClick} className='bg-slate-950 p-3 my-3 rounded-md'>{children}</button>
  )
}

export default React.memo(Button);
