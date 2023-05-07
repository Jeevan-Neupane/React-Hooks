import React from 'react'


function Title() {
    console.log("Title is rendering");
  return (
    <h2 className='text-5xl my-3'>
        Callback Hooks
      
    </h2>
  )
}

export default React.memo(Title);
