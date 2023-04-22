import { useState } from "react"


function UseStateWithObject() {
    const [name,setName]=useState({
          firstName:'',
          lastName:'',
    })

    const handleFirstName=(events)=>{
        setName({...name,
            firstName:events.target.value
        }
            
        )

    }
    const handleLastName=(events)=>{
        setName({
            ...name,
            lastName:events.target.value,
        })

    }

  return (
    <form>
        <input type="text" value={name.firstName} onChange={handleFirstName}/>
        <input type="text" value={name.lastName} onChange={handleLastName}/>


        <h2>Your first Name is -{name.firstName}</h2>
        <h2>Your last Name is -{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>

      
    </form>
  )
}

export default UseStateWithObject
